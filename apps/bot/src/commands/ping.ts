import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("png")
    .setDescription("test"),
    run: (interaction : ChatInputCommandInteraction) => {
        interaction.reply("heelo")
    }
}