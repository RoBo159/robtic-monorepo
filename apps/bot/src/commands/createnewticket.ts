import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { prisma } from "@robo/db";
import { InteractionUtils } from "@/lib/interactionUtils";

export default {
    data: new SlashCommandBuilder()
        .setName("create-new-ticket")
        .setDescription("only for create test panel"),

    run: async (interaction: ChatInputCommandInteraction) => {
        InteractionUtils.safeDefer(interaction, true);
        
        await prisma.formData.create({
            data: {
                id: "test-form",
                name: "Test Form",
                questions: {
                    create: [
                        {
                            id: "question-1",
                            name: "What is your favorite color?",
                            style: "SHORT",
                            required: true,
                            placeholder: "e.g., Blue"
                        }
                    ]
                }
            }
        });
        // 2. Create TicketPanel linked to Panel
        await prisma.ticketPanel.create({
            data: {
                panelId: "test",
                name: "test form",
                style: "1",
                hasForm: true,
                formId: "test-form",
                channels: {
                    category: "1440798954693329017"
                }
            }
        });

        // 3. Create Form + Questions

        InteractionUtils.safeReply(
            interaction,
            `Panel created for guild: ${interaction.guildId} 🎉`
        );
    }
};
