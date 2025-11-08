import { Events, Interaction } from "discord.js";
import { Ticket } from "./_class/ticket";
import { data, formData, questionData } from "@/lib/data";
import { InteractionUtils } from "@/lib/interactionUtils";

interface valueProps {
    label: string;
    value: string;
}

export default {
    name: Events.InteractionCreate,
    run: async (interaction: Interaction) => {
        if (!interaction.isModalSubmit()) return;

        const found = formData.find(e => e._id === interaction.customId);
        if (!found)
            return await InteractionUtils.safeReply(
                interaction,
                "❌ Error: Unknown form submitted.",
            );

        const dataFound = data.find(e => e.formId === found?._id);
        if (!dataFound)
            return await InteractionUtils.safeReply(
                interaction,
                "❌ Error: Missing ticket data for this form.",
            );

        const values: valueProps[] = [];
        for (const qId of found.questionsId) {
            const questionFound = questionData.find(e => e._id === qId);
            if (!questionFound)
                return await InteractionUtils.safeReply(
                    interaction,
                    "❌ Error: One or more form questions are invalid.",
                );

            values.push({
                label: questionFound.label,
                value: interaction.fields.getTextInputValue(questionFound._id),
            });
        }

        const ticket = new Ticket();
        await ticket.create(interaction, dataFound);

        console.log(values);
    },
};
