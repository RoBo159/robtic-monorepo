import { prisma } from "@robo/db";
import { DefaultEmbed } from "../default/embed";
import { Logger } from "@robo/logger";
import { ticketBy } from "@robo/shared";

type TicketUpdateData = Parameters<typeof prisma.ticket.update>[0]['data'];

export class TicketService {
    async create(id: string, userId: string, panelId: string) {
        await prisma.ticket.create({
            data: {
                id,
                userId,
                panelId,
                embed: DefaultEmbed,
            },
        });

        Logger.database("done create ticket");
    }

    async find(by: ticketBy = "channel", id: string) {
        try {
            const ticket = by === "channel"
                ? await prisma.ticket.findUnique({
                    where: { id },
                    include: { panel: true },
                })
                : await prisma.ticket.findFirst({
                    where: { userId: id },
                    include: { panel: true },
                });

            Logger.database("ticket was found");

            return ticket;
        } catch (error) {
            Logger.error(`❌ Failed to find Ticket`, error);
        }
    }

    async update(id: string, data: TicketUpdateData) {
        try {
            const ticket = await prisma.ticket.update({
                where: { id },
                data
            });
            return ticket;
        } catch (err) {
            Logger.error("❌ Failed to update Ticket", err);
        }
    }

    async delete(id: string) {
        try {
            await prisma.ticket.delete({
                where: { id }
            }).catch(() => null);

            Logger.database("done delete ticket");
        } catch (error) {
            Logger.error(`❌ Failed to delete Ticket`, error);
        }
    }

    async panelCreate(panelId: string) {
        try {
            const ticketPanel = await prisma.ticketPanel.create({
                data: {
                    panelId,
                    name: "test butotn",
                    style: "1",
                    channels: {
                        category: "1304497912541216821"
                    }
                }
            });

            Logger.database("done create ticket panel");
            return ticketPanel;
        } catch (error) {
            Logger.error(`❌ Failed to create Ticket Panel`, error);
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

            Logger.database("ticket panel was found");

            return found;
        } catch (error) {
            Logger.error(`❌ Failed to find Ticket Panel`, error);
        }
    }

    async findUserTicketInPanel(userId: string, panelId: string) {
        try {
            const found = await prisma.ticket.findFirst({
                where: {
                    userId,
                    panelId,
                    status: "OPEN"
                },
                include: {
                    panel: true,
                },
            });

            Logger.database("user ticket in panel was found");

            return found;
        } catch (error) {
            Logger.error(`❌ Failed to find User Ticket in Panel`, error);
        }
    }
}