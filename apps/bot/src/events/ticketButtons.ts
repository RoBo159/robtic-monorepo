import { Events, Interaction, MessageFlags } from "discord.js";
import { Ticket } from "@/components/_class/ticket";
import { Managed } from "@/components/_embeds/TicketEmbed";

export default {
    name: Events.InteractionCreate,
    run: (interaction : Interaction) => {
        if(!interaction.isButton()) return;

        const ticket = new Ticket();
        if(interaction.customId === "close") return ticket.close(interaction, interaction.channel?.id);
        if(interaction.customId === "manage") return interaction.reply({
            embeds: [Managed()],
            flags: MessageFlags.Ephemeral
        })
    }
}