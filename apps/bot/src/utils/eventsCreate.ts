import {
    BaseInteraction,
    ButtonInteraction,
    SelectMenuInteraction,
    ModalSubmitInteraction,
    Message,
    Events,
} from "discord.js";

type CustomId = string;

type EventType = "button" | "menu" | "form" | "message";

type EventHandler =
    | ((interaction: ButtonInteraction) => void)
    | ((interaction: SelectMenuInteraction) => void)
    | ((interaction: ModalSubmitInteraction) => void)
    | ((message: Message) => void);

interface HandlerEntry {
    type: EventType;
    id?: CustomId;
    fn: EventHandler;
}

export class Event {
    public name = Events.InteractionCreate;
    private handlers: HandlerEntry[] = [];

    on(type: EventType, idOrFn: CustomId | EventHandler, fn?: EventHandler) {
        if (typeof idOrFn === "string" && fn) {
            this.handlers.push({ type, id: idOrFn, fn });
        } else if (typeof idOrFn === "function") {
            this.handlers.push({ type, fn: idOrFn });
        }
        if (type === "message") this.name = Events.MessageCreate;
        return this;
    }

    async execute(interaction: BaseInteraction | Message) {
        if (interaction instanceof Message) {
            if (interaction.author.bot) return;
            const messageHandlers = this.handlers.filter(h => h.type === "message");
            for (const { fn } of messageHandlers) {
                (fn as (msg: Message) => void)(interaction);
            }
            return;
        }

        if (interaction.isButton()) {
            this.runHandlers("button", interaction.customId, interaction);
        }

        if (interaction.isStringSelectMenu()) {
            this.runHandlers("menu", interaction.customId, interaction);
        }

        if (interaction.isModalSubmit()) {
            this.runHandlers("form", interaction.customId, interaction);
        }
    }

    private runHandlers<T extends EventType>(
        type: T,
        customId: string | undefined,
        data: any
    ) {
        const relevantHandlers = this.handlers.filter(
            (h) => h.type === type && (!h.id || h.id === customId)
        );

        for (const { fn } of relevantHandlers) {
            (fn as (arg: typeof data) => void)(data);
        }
    }
}
