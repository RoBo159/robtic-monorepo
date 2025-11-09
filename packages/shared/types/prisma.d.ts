import { Panel } from "@robo/db";

export interface PanelProps extends Panel {
    ticketPanels?: TicketPanel[];
}