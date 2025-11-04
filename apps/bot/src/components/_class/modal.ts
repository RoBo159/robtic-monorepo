import { questionData } from "@/lib/data";
import { ActionRowBuilder, ButtonInteraction, Interaction, ModalBuilder, SelectMenuInteraction, TextInputBuilder } from "discord.js";

export class Modal {
    constructor() { };

    create(interaction : Interaction, data?: any) {
        if(!data) return;

        const modal = new ModalBuilder()
            .setCustomId(data._id)
            .setTitle(data.name);

        for (let i = 0; i < data.questionsId.length; i++) {
            const questionFound = questionData.find(e => e._id === data.questionsId[i]);

            if (!questionFound) break;
            const question = new TextInputBuilder()
                .setCustomId(questionFound._id)
                .setLabel(questionFound.label)
                .setPlaceholder(questionFound.placeholder)
                .setStyle(questionFound.style);

            const q = new ActionRowBuilder<TextInputBuilder>().addComponents(question);
            modal.addComponents(q);
        };

        (interaction as ButtonInteraction | SelectMenuInteraction).showModal(modal);
    }
}