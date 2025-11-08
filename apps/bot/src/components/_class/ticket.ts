import { dataProps } from "@/lib/data";
import { InteractionUtils } from "@/lib/interactionUtils";
import { Interaction } from "discord.js";
import { TicketService } from "@/service/ticket";

export class Ticket {
    constructor(
        private ticket = new TicketService()
    ) { }

    async create(interaction: Interaction, data?: dataProps) {
        try {
            await InteractionUtils.safeDefer(interaction);
            this.ticket.create(interaction, data);
        } catch (err) {
            console.error(err);
            await InteractionUtils.safeReply(
                interaction,
                "❌ Failed to create ticket channel. Check permissions."
            );
        }
    }

    async close(interaction: Interaction, channelId: string | undefined) {
        try {
            await InteractionUtils.safeDefer(interaction);
            this.ticket.close(interaction, channelId!);
        } catch (err) {
            console.error(err);
            await InteractionUtils.safeReply(
                interaction,
                "❌ Failed to close ticket channel. Check permissions."
            );
        }
    }

    delete(channelId: string) {

    }

    update(channelId: string) {

    }

    add() { }

    rename() { }
}