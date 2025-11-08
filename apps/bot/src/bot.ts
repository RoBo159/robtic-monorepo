import client from "lib/Client";
import "dotenv/config";

import env from "@robo/config/env.js";

import { Logger } from "@robo/shared";

import { Collection } from "discord.js";
import { CommandType } from "@robo/shared";

client.commands = new Collection<string, CommandType>();

import "@/handlers/events.handler";
import { LoadCommands, registeCommands } from "./handlers/commands.handler";

await LoadCommands();
await registeCommands();

await client.login(env.token.value).then(() => {
    Logger.debug("✅ Bot was started");
})