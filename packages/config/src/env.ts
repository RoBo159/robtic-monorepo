import "dotenv/config";
import { Logger } from "@shared/utils/logger";

interface EnvVar {
    value: string | undefined;
    required: boolean;
}

const env: Record<string, EnvVar> = {
    token: {
        value: process.env.DISCORD_TOKEN,
        required: true,
    },
    clientId: {
        value: process.env.DISCORD_CLIENT_ID,
        required: true,
    },
    guildId: {
        value: process.env.DISCORD_GUILD_ID,
        required: false,
    },
    mongoDB: {
        value: process.env.MONGO_URI,
        required: false
    }
};

for (const [key, { value, required }] of Object.entries(env)) {
    if (required && (!value || value.trim() === "")) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

Logger.debug("All required environment variables are set.");

export default env;