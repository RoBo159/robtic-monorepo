import { Panel, Ticket, TicketPanel, FormData } from "@robo/db";

export interface PanelProps extends Panel {
    ticketPanels?: TicketPanel[];
}

export interface TicketProps extends TicketPanel {
    tickets?: Ticket[];
}

export type TicketUpdate = Omit<TicketProps, "id" | "panelId" | "panel">;

export interface FormDataProps extends FormData {
    questions?: QuestionProps[];
    ticketPanels?: TicketPanel[];
}