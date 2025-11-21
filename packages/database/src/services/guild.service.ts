import { prisma } from "@robo/db";
import { Logger } from "@robo/logger";

export class GuildService {
    async ensureGuild(guildId: string) {
        try {
            const guild = await prisma.guild.upsert({
                where: { id: guildId },
                update: {},
                create: {
                    id: guildId,
                    config: {}
                }
            });
            Logger.database(`✅ Guild ${guildId} created in database`);
            return guild;
        } catch (error) {
            Logger.error(`❌ Failed to create guild ${guildId}:`, error);
        }
    }
}
