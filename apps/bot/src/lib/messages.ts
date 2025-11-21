export const messages = {
    success: {
        created: "Your ticket has been successfully created.",
        opened: "Your ticket has been opened.",
        closed: "Your ticket has been closed.",
        deleted: "Your ticket has been deleted.",
        updated: "Your ticket has been updated.",
        haveTicket: "You already have an open ticket.",
    },

    warn: {
        noTicketChannel: "This command can only be used inside a ticket channel.",
        noOpenTicket: "You don't have any open tickets.",
        closePermission: "You don't have permission to close this ticket.",
        closedTicket: "This ticket is already closed.",

        created: "A ticket already exists. Cannot create another one.",
        opened: "This ticket is already open.",
        closed: "This ticket is already closed.",
        deleted: "This ticket is already deleted or missing.",
        updated: "The ticket could not be updated due to missing or invalid data.",
    },

    error: {
        main: "❌ An unexpected error occurred while processing your request.",

        noPermission: "❌ You don't have permission to perform this action.",
        ticketNotFound: "❌ Ticket not found.",
        panelNotFound: "❌ Panel not found.",
        ticketData: "❌ Missing or invalid ticket data.",
        formData: "❌ Unknown or invalid form submitted.",
        questionData: "❌ One or more form questions are invalid.",

        failedCloseTicket: "❌ Failed to close the ticket channel. Check permissions.",
        failedCreateTicket: "❌ Failed to create the ticket channel. Check permissions.",
        failedDeleteTicket: "❌ Failed to delete the ticket entry from the database.",
        failedUpdateTicket: "❌ Failed to update the ticket.",
    },

    debug: {
        created: "[DEBUG] Ticket created.",
        opened: "[DEBUG] Ticket opened.",
        closed: "[DEBUG] Ticket closed.",
        deleted: "[DEBUG] Ticket deleted.",
        updated: "[DEBUG] Ticket updated.",

        lookup: "[DEBUG] Fetching ticket data.",
        lookupFail: "[DEBUG] Failed to fetch ticket data.",
        panelLookup: "[DEBUG] Fetching ticket panel data.",
        panelLookupFail: "[DEBUG] Failed to fetch ticket panel data.",
    }
};



export type MessageCategories = keyof typeof messages;

export type MessageKeys<C extends MessageCategories> = keyof typeof messages[C];

export type MessagePath = `${MessageCategories}.${string & MessageKeys<MessageCategories>}`;