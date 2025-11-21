import { Events, Interaction } from "discord.js";
import { Ticket } from "./_class/ticket";
import { InteractionUtils } from "@/lib/interactionUtils";
import { FormService, TicketService } from "@robo/db";

interface valueProps {
    label: string;
    value: string;
}

export default {
    name: Events.InteractionCreate,
    run: async (interaction: Interaction) => {
        if (!interaction.isModalSubmit()) return;
        await InteractionUtils.safeDefer(interaction);

        const ticketData = new TicketService();
        const formData = new FormService();

        const found = await formData.find(interaction.customId);
        if (!found)
            return await InteractionUtils.safeReply(
                interaction,
                "❌ Error: Unknown form submitted.",
            );

        const dataFound = await ticketData.panelFind(found.ticketPanels.find(tp => tp.formId === found.id)?.id!);
        if (!dataFound)
            return await InteractionUtils.safeReply(
                interaction,
                "❌ Error: Missing ticket data for this form.",
            );

        const values: valueProps[] = [];
        for (const qId of found.questions.map(q => q.id)) {
            const questionFound = found.questions.find(e => e.id === qId);
            if (!questionFound)
                return await InteractionUtils.safeReply(
                    interaction,
                    "❌ Error: One or more form questions are invalid.",
                );

            values.push({
                label: questionFound.name,
                value: interaction.fields.getTextInputValue(questionFound.id),
            });
        }

        const ticket = new Ticket();
        await ticket.create(interaction, dataFound);

        console.log(values);
    },
};
