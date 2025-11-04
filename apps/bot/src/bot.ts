import client from "lib/Client";
import "dotenv/config";

import env from "@config/src/env";

import { Logger } from "@shared/utils/logger";
import { connectDB } from "@config/src/database";

import { Collection } from "discord.js";
import { CommandType } from "@shared/types/client";

client.commands = new Collection<string, CommandType>();

import "@/handlers/events.handler";
import { LoadCommands, registeCommands } from "./handlers/commands.handler";

connectDB();
await LoadCommands();
await registeCommands();

await client.login(env.token.value).then(() => {
    Logger.debug("✅ Bot was started");
})