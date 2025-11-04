import { ButtonBuilder, SelectMenuBuilder, SelectMenuOptionBuilder } from "@discordjs/builders";
import { ActionRowBuilder, ButtonStyle, ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("test-embed")
    .setDescription("test test"),

    run: (interaction : ChatInputCommandInteraction) => {

        const embed = new EmbedBuilder()
        .setTitle("test")
        .setDescription("test test test");

        const button = new ButtonBuilder()
        .setCustomId("1")
        .setLabel("test")
        .setStyle(ButtonStyle.Primary);

        const button2 = new ButtonBuilder()
        .setCustomId("2")
        .setLabel("testo")
        .setStyle(ButtonStyle.Primary);

        const button3 = new ButtonBuilder()
        .setCustomId("3")
        .setLabel("testoo")
        .setStyle(ButtonStyle.Primary);

        const meun = new SelectMenuBuilder()
        .setCustomId("4")
        .setPlaceholder("select one of this ticket")
        .setOptions(
            new SelectMenuOptionBuilder()
            .setValue("4")
            .setLabel("test")
            .setDescription("test tes test"),
        );

        const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button, button2, button3);
        const row2 = new ActionRowBuilder<SelectMenuBuilder>().addComponents(meun);

        interaction.reply({
            embeds: [embed],
            components: [row, row2]
        });
    }
}