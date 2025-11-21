import { ActionRowBuilder, ButtonInteraction, Interaction, ModalBuilder, SelectMenuInteraction, TextInputBuilder, TextInputStyle } from "discord.js";
import { FormDataProps } from "@robo/shared";
import { prisma } from "@robo/db";

export class Modal {
    constructor() { };

    async create(interaction : Interaction, data?: FormDataProps) {
        if(!data) return;

        const modal = new ModalBuilder()
            .setCustomId(data.id)
            .setTitle(data.name);

        for (let i = 0; i < data.questions?.length!; i++) {
            const questionFound = await prisma.question.findMany({
                where: { formId: data.id, id: data.questions![i].id }
            });

            if (!questionFound) break;
            const question = new TextInputBuilder()
                .setCustomId(questionFound[0].id)
                .setLabel(questionFound[0].name)
                .setPlaceholder(questionFound[0].placeholder || "")
                .setStyle(questionFound[0].style === "PARAGRAPH" ? TextInputStyle.Paragraph : TextInputStyle.Short);
                
            const q = new ActionRowBuilder<TextInputBuilder>().addComponents(question);
            modal.addComponents(q);
        };

        (interaction as ButtonInteraction | SelectMenuInteraction).showModal(modal);
    }
}