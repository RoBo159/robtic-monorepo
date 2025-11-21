import { Interaction, MessageFlags } from "discord.js";
import { Logger } from "@robo/logger";

/**
 * Utility functions to safely interact with Discord interactions.
 * Handles all combinations of deferred / replied / repliable states.
 */

export class InteractionUtils {
    /**
     * Ensures the interaction is safely replied to (either via reply or editReply).
     * Automatically handles deferred, replied, and repliable interactions.
     */
    static async safeReply(
        interaction: Interaction,
        content: string,
        ephemeral = true
    ): Promise<void> {
        try {
            if (!interaction.isRepliable()) return;

            if (interaction.replied) {
                await interaction.followUp({
                    content,
                    flags: ephemeral ? MessageFlags.Ephemeral : undefined,
                });
                return;
            }

            if (interaction.deferred) {
                await interaction.editReply({
                    content,
                });
                return;
            }

            await interaction.reply({
                content,
                flags: ephemeral ? MessageFlags.Ephemeral : undefined,
            });
        } catch (err) {
            Logger.error("[InteractionUtils.safeReply] Error:", err);
        }
    }

    static async safeDefer(
        interaction: Interaction,
        ephemeral = true
    ): Promise<void> {
        try {
            if (!interaction.isRepliable()) return;
            if (interaction.deferred || interaction.replied) return;

            await interaction.deferReply({ flags: ephemeral ? MessageFlags.Ephemeral : undefined });
        } catch (err) {
            Logger.error("[InteractionUtils.safeDefer] Error:", err);
        }
    }   
}
