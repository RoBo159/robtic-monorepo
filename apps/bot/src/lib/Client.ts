import { Client, Collection, GatewayIntentBits } from "discord.js";
import type { CommandType } from "types/client";

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

client.commands = new Collection<string, CommandType>();

export default client;