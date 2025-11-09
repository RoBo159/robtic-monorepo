import { prisma, TicketService } from "packages/database/db";
import { DefaultEmbed } from "../default/embed";

const ticket = new TicketService();

export class PanelService {
    async create(guildId: string, name: string) {
        try {
            const panel = await prisma.panel.upsert({
                where: { id: "test" },
                update: {
                    name,
                },
                create: {
                    id: "test",
                    guildId,
                    name,
                    type: "BUTTON",
                    embed: DefaultEmbed
                }
            })

            await ticket.panelCreate(panel.id);
            console.log("done create panel");

            return panel;
        } catch (error) {
            console.error(`❌ Failed to create Panel`, error);
        }
    }

    async find(panelId: string) {
        try {
            const panel = await prisma.panel.findUnique({
                where: { id: panelId },
                include: { ticketPanels: true },
            });

            return panel;
        } catch (error) {
            console.error(`❌ Failed to find panel`, error);
            throw error;
        }
    }

}