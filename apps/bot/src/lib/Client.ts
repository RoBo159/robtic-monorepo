import { Client, Collection, GatewayIntentBits } from "discord.js";
import type { CommandType } from "@shared/types/client";

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