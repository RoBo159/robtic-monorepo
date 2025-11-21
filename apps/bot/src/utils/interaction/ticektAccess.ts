import { TicketService } from "@robo/db";
import { Interaction } from "discord.js";

export default async function TicketAccess(
    interaction: Interaction,
    panelId: string
): Promise<boolean> {

    const ticket = new TicketService();

    const existing = await ticket.findUserTicketInPanel(interaction.user.id, panelId);

    if (!existing) return false;

    if (existing.status === "CLOSED") return false;

    return true;
}