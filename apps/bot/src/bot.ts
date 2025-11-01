import client from "lib/Client";
import env from "@config/src/env";

import { Logger } from "@shared/utils/logger";
import { connectDB } from "@config/src/database";

import "@/handlers/events.handler";
import {LoadCommands, registeCommands} from "./handlers/commands.handler";

connectDB();
await LoadCommands();
await registeCommands();

client.login(env.token.value).then(() => {
    Logger.debug("✅ Bot was started");
})