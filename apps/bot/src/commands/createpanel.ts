import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { PanelService } from "@robo/db";
import { InteractionUtils } from "@/lib/interactionUtils";

const panel = new PanelService();

export default {
    data: new SlashCommandBuilder()
    .setName("create-test-panel")
    .setDescription("only for create test panel"),
    run: async (interaction : ChatInputCommandInteraction) => {
        InteractionUtils.safeDefer(interaction, true);

        await panel.create(interaction.guild?.id!, "test").then(() => {
            InteractionUtils.safeReply(interaction, `done create panel with default ticket ${interaction.guild?.id} \n ${interaction.guild}`);
        });
    }
}