import { TicketPriority } from '../enums/ticket-priority.enum';
import { TicketStatus } from '../enums/ticket-status.enum';

//export interface Ticket {
//  ticketId: string;
//  accountNumber: string;
//  customerName: string;
//  issue: string;
//  status: TicketStatus;
//  priority: TicketPriority;
// createdAt: string;
// // issueType: string;
//  description: string;
//  createdDate: string;
//}

export interface Ticket {
  ticketId: string;
  accountNumber: string;
  issue: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;

  assignedGroup?: string;
  assignedTechnician?: string;
  resolution?: string;
  updatedAt?: string;
}

//export interface Ticket {
//  ticketId: string;
//  accountNumber: string;
//  issue: string;
//  status: TicketStatus;
//  priority: TicketPriority;
//  createdAt: string;
//}