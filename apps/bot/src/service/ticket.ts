import { Created } from "@/components/_embeds/TicketEmbed";
import { dataProps } from "@/lib/data";
import { InteractionUtils } from "@/lib/interactionUtils";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, Interaction, PermissionsBitField, TextChannel } from "discord.js";

export class TicketService {
    constructor() { }

    async create(interaction: Interaction, data?: dataProps) {
        await InteractionUtils.safeDefer(interaction);

        const channel = await interaction.guild?.channels.create({
            parent: data?.category ?? null,
            name: `${data?.name || "ticket"}-${interaction.user.username}`,
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                    id: interaction.guild.roles.everyone,
                    deny: [PermissionsBitField.Flags.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.ViewChannel]
                }
            ]
        });

        const close = new ButtonBuilder()
            .setCustomId("close")
            .setLabel("Close")
            .setStyle(ButtonStyle.Secondary)
            .setEmoji("🔒");

        const manage = new ButtonBuilder()
            .setCustomId("manage")
            .setLabel("Manage")
            .setStyle(ButtonStyle.Secondary)
            .setEmoji("⚙️");

        const button = new ActionRowBuilder<ButtonBuilder>().addComponents(close, manage);

        await InteractionUtils.safeReply(
            interaction,
            `✅ Ticket created successfully in ${channel}`
        );

        await channel?.send({
            content: `${interaction.user} welcome`,
            embeds: [Created()],
            components: [button]
        });
    };

    async close(interaction : Interaction, channelId : string) {
        const channel = interaction.guild?.channels.cache.get(channelId!);

        if (!channel) return await InteractionUtils.safeReply(interaction, "I can't found this channel in the server");
        if (!channel.isTextBased() || !(channel instanceof TextChannel)) return await InteractionUtils.safeReply(interaction, "This is not a text channel.");
        await channel.permissionOverwrites.edit(interaction.user.id, {
            ViewChannel: false
        })

        InteractionUtils.safeReply(interaction, "channel was closed successfully")
    }
}