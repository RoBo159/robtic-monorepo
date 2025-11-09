import { PrismaClient } from "./generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma =
    new PrismaClient({
        log: ["error", "warn"],
    }).$extends(withAccelerate())

// --- Services Exports ---
import { GuildService } from "./src/services/guild.service";
import { TicketService } from "./src/services/ticket.service";
import { PanelService } from "./src/services/panel.service";
import { FormService } from "./src/services/form.service";

// --- Types Export ---
import { Guild, TicketPanel, Ticket, Panel } from "./generated/prisma";

// --- Main Exports ---
export {
    GuildService,
    TicketService,
    PanelService,
    FormService,
    type Guild,
    type TicketPanel,
    type Ticket,
    type Panel,
    prisma
};