import client from "lib/Client";
import "dotenv/config";
import { initLogger } from "@robo/logger";

import env from "@robo/config/env";

import { Logger } from "@robo/logger";

import { Collection } from "discord.js";
import { CommandType } from "@robo/shared";

client.commands = new Collection<string, CommandType>();

import "@/handlers/events.handler";
import { LoadCommands, registeCommands } from "./handlers/commands.handler";

await LoadCommands();
await registeCommands();

initLogger({
    level: "debug",
});

await client.login(env.token.value).then(() => {
    Logger.debug("✅ Bot was started");
})