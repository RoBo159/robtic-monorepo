import client from "@/lib/Client";
import env from "config/env";
import { REST, Routes } from "discord.js";
import { Loader } from "utils/loader";
import { Logger } from "utils/logger";

const handler = new Loader("src");

async function LoadCommands() {
    handler.load("commands", async (filePath) => {
        const command = (await import(filePath)).default;

        if ('data' in command && 'run' in command) {
            client.commands.set(command.data.name, command);
        } else {
            throw new Error(`The command at ${filePath} is missing a required "data" or "run" property.`);
        }
    }, "COMMAND");

    const rest = new REST({ version: '9' }).setToken(env.token.value!);

    try {
        Logger.debug(`Started refreshing ${client.commands.size} application (/) commands.`);

        const data: any = await rest.put(
            process.env.NODE_ENV === "dev" ?
                Routes.applicationGuildCommands(env.clientId.value!, env.guildId.value!) :
                Routes.applicationCommands(env.clientId.value!),
            { body: client.commands.map(cmd => cmd.data.toJSON()) }
        );

        Logger.debug(`Successfully reloaded ${data.length} application (/) commands.`)
    } catch (err: unknown) {
        Logger.error(err as string);
    };
}

LoadCommands();