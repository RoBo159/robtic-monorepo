import { prisma } from "packages/database/db";

class PanelService {
    create(guildId : string, name: string) {
        prisma.panel.create({
            data: {
                guildId,
                name,
            }
        })
    }
}