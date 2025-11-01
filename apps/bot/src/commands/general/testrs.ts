import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("fds")
    .setDescription("test"),
    run: (interaction : ChatInputCommandInteraction) => {
        interaction.reply("heelo")
    }
}