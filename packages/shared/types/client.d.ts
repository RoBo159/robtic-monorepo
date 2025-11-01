import {
    ChatInputCommandInteraction,
    Client,
    Collection,
    StringSelectMenuInteraction,
} from "discord.js";

export interface CommandType {
    data: any;
    execute: (interaction: ChatInputCommandInteraction, client: Client) => Promise<any>;
    access?: boolean;
}

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, CommandType>;
    }
}