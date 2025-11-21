import { BotError } from "@/handlers/error.handler";
import { Client, Events } from "discord.js";
import { Logger } from "@robo/logger";

export default {
    name: Events.ClientReady,
    once: true,
    run: (client: Client) => {
        try {
            Logger.success(`Bot was started ✅ as ${client.user?.username}`);

        } catch (err: unknown) {
            new BotError(`there is problem when bot started \n ${err}`, "EVENT")
        }
    }
}