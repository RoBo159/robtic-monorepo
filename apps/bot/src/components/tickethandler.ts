import { Events, Interaction } from "discord.js";
import { prisma, TicketService } from "@robo/db";
import { Ticket } from "@/components/_class/ticket";
import { Modal } from "./_class/modal";
import { InteractionUtils } from "@/lib/interactionUtils";

export default {
    name: Events.InteractionCreate,

    run: async (interaction: Interaction) => {
        if (!interaction.isButton() && !interaction.isStringSelectMenu()) return;

        const ticket = new Ticket();
        const modal = new Modal();
        const ticketData = new TicketService();

        try {
            const ticketId = interaction.isButton()
                ? interaction.customId.replace("ticket_", "")
                : interaction.values[0];

            const found = await ticketData.panelFind(ticketId);

            if (!found) return;

            if (!found.hasForm || !found.formId) {
                await InteractionUtils.safeDefer(interaction);
                await ticket.create(interaction, found);
                return;
            }

            const formFound = await prisma.formData.findUnique({
                where: { id: found.formId },
                include: { questions: true },
            });

            if (!formFound) {
                await InteractionUtils.safeDefer(interaction);
                await ticket.create(interaction, found);
                return;
            }

            modal.create(interaction, formFound);
        } catch (err) {
            console.error("[TicketHandler Prisma Error]", err);
            await InteractionUtils.safeReply(
                interaction,
                "❌ Failed to process this interaction. Please try again."
            );
        }
    },
};
