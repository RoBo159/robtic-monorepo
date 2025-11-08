import { Client, Collection, GatewayIntentBits } from "discord.js";
import type { CommandType } from "@robo/shared";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.MessageContent
    ]
});

export default client;