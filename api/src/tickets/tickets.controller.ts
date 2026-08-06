import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';

@Controller('tickets')
export class TicketsController {
  constructor(
    private readonly ticketsService: TicketsService,
  ) {}

  // Get all tickets for a customer
  @Get('customer/:accountNumber')
  getCustomerTickets(
    @Param('accountNumber') accountNumber: string,
  ) {
    return this.ticketsService.getCustomerTickets(
      accountNumber,
    );
  }

  // Get a specific ticket
  @Get(':ticketId')
  getTicketById(
    @Param('ticketId') ticketId: string,
  ) {
    return this.ticketsService.getTicketById(
      ticketId,
    );
  }

  // Create a new ticket
  @Post()
  createTicket(
    @Body() dto: CreateTicketDto,
  ) {
    return this.ticketsService.createTicket(
      dto,
    );
  }

  // Update ticket status
  @Patch(':ticketId/status')
  updateTicketStatus(
    @Param('ticketId') ticketId: string,
    @Body() dto: UpdateTicketStatusDto,
  ) {
    return this.ticketsService.updateTicketStatus(
      ticketId,
      dto.status,
    );
  }
}