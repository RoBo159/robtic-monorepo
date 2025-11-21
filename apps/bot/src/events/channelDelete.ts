import { Events, Channel } from "discord.js";
import { TicketService } from "@robo/db";

export default {
    name: Events.ChannelDelete,
    run: async (channel: Channel) => {
        const ticket = new TicketService();

        if (!channel.isTextBased()) return;

        await ticket.delete(channel.id); 
    }
}
