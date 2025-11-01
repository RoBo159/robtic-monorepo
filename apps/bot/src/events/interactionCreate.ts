import { BotError } from "@/handlers/error.handler";
import client from "@/lib/Client";
import { ChatInputCommandInteraction, Events, MessageFlags } from "discord.js";

export default {
    name: Events.InteractionCreate,
    run: async (interaction: ChatInputCommandInteraction) => {
        try {
            if (!interaction.isChatInputCommand()) return;

            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                throw new Error(`❌ No command matching "${interaction.commandName}" was found`);
            };

            await command.execute(interaction, client);
        } catch (err: unknown) {
            new BotError(`there is error in events/InteractionCreate ( line 19 )`, "EVENT");
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: 'There was an error while executing this command!',
                    flags: MessageFlags.Ephemeral,
                });
            } else {
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    flags: MessageFlags.Ephemeral,
                });
            }
        }
    }
}