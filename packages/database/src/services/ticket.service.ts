import { prisma } from "packages/database/db";

export class TicketService {
    create(userId : string) {
        prisma.ticket.create({
            data: {
                id: userId,
                panelId: "test"
            },
        })
    }
}