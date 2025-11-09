import { prisma } from "@robo/db";

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
            console.log(`✅ Guild ${guildId} created in database`);
            return guild;
        } catch (error) {
            console.error(`❌ Failed to create guild ${guildId}:`, error);
        }
    }
}
