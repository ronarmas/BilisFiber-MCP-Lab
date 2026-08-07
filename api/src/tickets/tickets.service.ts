import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

//import { tickets } from './tickets.data';
import { customerRecords, tickets } from '../mock-data/customer-records.data';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketStatus } from './enums/ticket-status.enum';
import { TicketPriority } from './enums/ticket-priority.enum';
import { Ticket } from './interfaces/ticket.interface';

@Injectable()
export class TicketsService {

  getCustomerTickets(accountNumber: string) {

    // Verify customer exists
    const customer = customerRecords.find(
      customer => customer.accountNumber === accountNumber,
    );

    if (!customer) {
      throw new NotFoundException(
        `Customer with account number '${accountNumber}' not found.`,
      );
    }

    return tickets.filter(
      ticket => ticket.accountNumber === accountNumber,
    );
  }


  createTicket(dto: CreateTicketDto) {

    // Verify customer exists
    const customer = customerRecords.find(
      customer => customer.accountNumber === dto.accountNumber,
    );

    if (!customer) {
      throw new NotFoundException(
        `Customer with account number '${dto.accountNumber}' not found.`,
      );
    }


    // Check if the same issue is already open
    const existingTicket = tickets.find(
      ticket =>
        ticket.accountNumber === dto.accountNumber &&
        ticket.issue === dto.issue &&
        ticket.status === TicketStatus.OPEN,
    );

    if (existingTicket) {
      return {
        message: 'An open ticket for this issue already exists.',
        ticket: existingTicket,
      };
    }


    // Generate next ticket number
    const latestTicket =
      tickets
        .map(ticket =>
          Number(ticket.ticketId.replace('INC-', '')),
        )
        .sort((a, b) => b - a)[0] || 100000;


    const nextTicketNumber = latestTicket + 1;

    const now = new Date().toISOString();


    const ticket: Ticket = {
      ticketId: `INC-${nextTicketNumber}`,
      accountNumber: dto.accountNumber,
      issue: dto.issue,
      status: TicketStatus.OPEN,
      priority: TicketPriority.MEDIUM,
      createdAt: now,
    };


    tickets.push(ticket);

    return ticket;
  }


  updateTicketStatus(
    ticketId: string,
    status: TicketStatus,
  ) {

    const ticket = tickets.find(
      ticket => ticket.ticketId === ticketId,
    );

    if (!ticket) {
      throw new NotFoundException(
        `Ticket '${ticketId}' not found.`,
      );
    }


    ticket.status = status;


    return {
      message: 'Ticket updated successfully.',
      ticket,
    };
  }


  getTicketById(ticketId: string) {

    const ticket = tickets.find(
      ticket => ticket.ticketId === ticketId,
    );

    if (!ticket) {
      throw new NotFoundException(
        `Ticket '${ticketId}' not found.`,
      );
    }


    return ticket;
  }

}