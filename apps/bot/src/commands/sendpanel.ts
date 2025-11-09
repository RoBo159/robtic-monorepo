import {
    ChatInputCommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
} from "discord.js";
import { PanelService, TicketPanel, type Panel } from "@robo/db";
import { InteractionUtils } from "@/lib/interactionUtils";
import type { EmbedData } from "@robo/shared";

interface PanelProps extends Panel {
    ticketPanels: TicketPanel[];
}

const panelService = new PanelService();

export default {
    data: new SlashCommandBuilder()
        .setName("send-test-panel")
        .setDescription("Only for sending test panel"),

    run: async (interaction: ChatInputCommandInteraction) => {
        await InteractionUtils.safeDefer(interaction, false);

        const found: PanelProps | null = await panelService.find("test");
        if (!found) {
            return InteractionUtils.safeReply(interaction, "⚠️ No panel found.");
        }

        const embedData = found.embed as unknown as EmbedData;
        const embed = new EmbedBuilder()
            .setTitle(embedData.title ?? "Untitled Panel")
            .setDescription(embedData.description ?? "No description provided.");

        let components: any[] = [];

        if (found.type === "BUTTON") {
            const buttons = found.ticketPanels.map((ticket : any) => {
                return new ButtonBuilder()
                    .setCustomId(`ticket_${ticket.id}`)
                    .setLabel(ticket.name || "Untitled")
                    .setStyle((Number(ticket.style) as ButtonStyle) || ButtonStyle.Primary)
            });

            const row = new ActionRowBuilder<ButtonBuilder>().addComponents(buttons.slice(0, 5));
            components.push(row);
        }

        else if (found.type === "MENU") {
            const menu = new StringSelectMenuBuilder()
                .setCustomId(`menu_${found.id}`)
                .setPlaceholder(found.placeholder || "Select a ticket type")
                .addOptions(
                    found.ticketPanels.map((ticket : any) =>
                        new StringSelectMenuOptionBuilder()
                            .setLabel(ticket.name || "Untitled")
                            .setValue(ticket.id)
                            .setDescription(ticket.description || "No description")
                    )
                );

            const row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(menu);
            components.push(row);
        }

        await interaction.followUp({
            embeds: [embed],
            components,
        });
    },
};
