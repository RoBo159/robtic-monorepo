import { readdirSync, statSync } from "fs"
import path from "path"
import { BotError, handleError } from "@/handlers/error.handler"
import { Logger } from "@robo/logger"

export class Loader {
    constructor(private basePath: string) { }

    async load(
        folder: string,
        callback: (file: string, name: string) => Promise<void>,
        errorType: "EVENT" | "COMMAND" | "DATABASE"
    ) {
        const fullPath = path.join(this.basePath, folder)
        const files = readdirSync(fullPath)

        for (const file of files) {
            const filePath = path.join(fullPath, file)
            if (statSync(filePath).isFile() && file.endsWith(".ts")) {
                const name = file.replace(".ts", "")
                try {
                    await callback(filePath, name)
                } catch (error) {
                    handleError(new BotError(`Fialed to load ${folder}`, errorType), filePath);
                    Logger.error(`${error}`)
                }
            }
        }
    }
}