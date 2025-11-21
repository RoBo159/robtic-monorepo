import { Created } from "@/components/_embeds/TicketEmbed";
import { channelProps, TicketProps } from "@robo/shared";
import { InteractionUtils } from "@/lib/interactionUtils";
import { ChannelType, Interaction, PermissionsBitField, TextChannel } from "discord.js";
import { row } from "@/components/_buttons/TicketButtons";

export class TicketUtils {

    constructor() { }

    async create(interaction: Interaction, data?: TicketProps) {

        const channelData = data?.channels as channelProps | null;

        const channel = await interaction.guild?.channels.create({
            parent: channelData!.category ?? null,
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

        await InteractionUtils.safeReply(
            interaction,
            `✅ Ticket created successfully in ${channel}`
        );

        await channel?.send({
            content: `${interaction.user} welcome`,
            embeds: [Created()],
            components: [row(["close", "manage"])]
        });

        return channel?.id;
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