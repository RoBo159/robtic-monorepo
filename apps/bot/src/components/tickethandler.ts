import { Events, Interaction } from "discord.js";
import { data, formData } from "@/lib/data";
import { Ticket } from "@/components/_class/ticket";
import { Modal } from "./_class/modal";
import { InteractionUtils } from "@/lib/interactionUtils";

export default {
    name: Events.InteractionCreate,
    run: async (interaction: Interaction) => {
        if (!interaction.isButton() && !interaction.isSelectMenu()) return;

        const ticket = new Ticket();
        const modal = new Modal();

        let found;
        if (interaction.isButton())
            found = data.find(e => e._id === interaction.customId);
        else if (interaction.isSelectMenu())
            found = data.find(e => e._id === interaction.values[0]);

        if (!found) {
            await InteractionUtils.safeReply(
                interaction,
                "❌ Cannot find this ticket type."
            );
            return;
        }

        if (!found.form) {
            await InteractionUtils.safeDefer(interaction);
            await ticket.create(interaction, found);
            return;
        }

        const formFound = formData.find(e => e._id === found.formId);

        if (!formFound) {
            await InteractionUtils.safeDefer(interaction);
            await ticket.create(interaction, found);
            return;
        }

        try {
            modal.create(interaction, formFound);
        } catch (err) {
            console.error("[TicketHandler Modal Error]", err);
            await InteractionUtils.safeReply(
                interaction,
                "❌ Failed to open the form modal."
            );
        }
    },
};
