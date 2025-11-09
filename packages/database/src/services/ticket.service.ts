import { prisma } from "packages/database/db";

export class TicketService {
    create(userId: string) {
        prisma.ticket.create({
            data: {
                id: userId,
                panelId: "test"
            },
        })
    }

    async panelCreate(panelId: string) {
        try {
            const ticketPanel = await prisma.ticketPanel.create({
                data: {
                    panelId,
                    name: "test butotn",
                    style: "1",
                }
            });

            console.log("done create ticket panel");
            return ticketPanel;
        } catch (error) {
            console.error(`❌ Failed to create Ticket Panel`, error);
        }
    }

    async panelFind(ticketPanelId: string) {
        try {
            const found = await prisma.ticketPanel.findUnique({
                where: { id: ticketPanelId },
                include: {
                    panel: true,
                    form: true,
                },
            });

            console.log("ticket panel was found");

            return found;
        } catch (error) {
            console.error(`❌ Failed to find Ticket Panel`, error);
        }
    }
}