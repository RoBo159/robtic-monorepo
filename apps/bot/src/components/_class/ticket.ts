import { InteractionUtils } from "@/lib/interactionUtils";
import { Interaction } from "discord.js";
import { TicketUtils } from "@/service/ticket";
import { Logger } from "@robo/logger";
import { TicketProps } from "@robo/shared";
import { TicketService } from "@robo/db";

export class Ticket {
    constructor(
        private ticket = new TicketUtils(),
        private ticketData = new TicketService()
    ) { }

    async create(interaction: Interaction, data?: TicketProps) {
        try {

            if(!data) throw new Error("There is no Data to create ticket");
            const id = await this.ticket.create(interaction, data);
            if(!id) throw new Error("Failed to create ticket id");
            await this.ticketData.create(id, interaction.user.id, data.id!);
        } catch (err) {
            Logger.error(`[Ticket Create Error] ${err}`);
            await InteractionUtils.safeReply(
                interaction,
                "❌ Failed to create ticket channel. Check permissions."
            );
        }
    }

    async close(interaction: Interaction, channelId: string | undefined) {
        try {
            const found = await this.ticketData.find("channel", interaction.channel?.id!);

            if(!found) return await InteractionUtils.safeReply(interaction, "You don't have any open ticket.");

            if(found?.status === "CLOSED") return await InteractionUtils.safeReply(interaction, "Your ticket is already closed.");
            this.ticket.close(interaction, channelId!).then(async () => {
                if(channelId) {
                    await this.ticketData.update(found.id, { status: "CLOSED" });

                    const channel = interaction.guild?.channels.cache.get(channelId!);
                    if(channel?.isSendable()) {
                        channel.send("🔒 This ticket has been closed.");
                    }
                }
            });
        } catch (err) {
            Logger.error(`[Ticket Close Error] ${err}`);
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