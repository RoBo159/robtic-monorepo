import { dataProps } from "@/lib/data";
import { InteractionUtils } from "@/lib/interactionUtils";
import { ChannelType, Interaction, PermissionsBitField } from "discord.js";

export class Ticket {
    constructor() { }

    async create(interaction: Interaction, data?: dataProps) {
        try {
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

            await InteractionUtils.safeReply(
                interaction,
                `✅ Ticket created successfully in ${channel}`
            );

            await channel?.send(`🎫 Ticket opened by ${interaction.user}`);
        } catch (err) {
            console.error(err);
            await InteractionUtils.safeReply(
                interaction,
                "❌ Failed to create ticket channel. Check permissions."
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