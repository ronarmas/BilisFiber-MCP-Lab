import { z } from "zod";
import { getTicketsByAccount, getTicketById, createTicket, } from "../api.js";
export function registerTicketTools(server) {
    server.tool("get_tickets_by_account", "Retrieve all tickets for a customer account.", {
        accountNumber: z.string(),
    }, async ({ accountNumber }) => {
        const tickets = await getTicketsByAccount(accountNumber);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(tickets, null, 2),
                },
            ],
        };
    });
    server.tool("get_ticket_by_id", "Retrieve a ticket by ticket ID.", {
        ticketId: z.string(),
    }, async ({ ticketId }) => {
        const ticket = await getTicketById(ticketId);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(ticket, null, 2),
                },
            ],
        };
    });
    server.tool("create_ticket", "Create a new support ticket.", {
        accountNumber: z.string(),
        issue: z.string(),
    }, async (args) => {
        const ticket = await createTicket(args);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(ticket, null, 2),
                },
            ],
        };
    });
}
