import { Ticket } from './interfaces/ticket.interface';
import { TicketStatus } from './enums/ticket-status.enum';
import { TicketPriority } from './enums/ticket-priority.enum';

export const tickets: Ticket[] = [
  {
    ticketId: 'INC-100001a',
    accountNumber: '100001a',
    //customerName: 'Juan Dela Cruz',
    issue: 'No Internet Connection',
    //description: 'Customer reported LOS blinking on modem.',
    priority: TicketPriority.HIGH,
    status: TicketStatus.OPEN,
   // createdDate: '2026-08-01',
    createdAt: '2026-08-02T10:00:00',
  },
  {
    ticketId: 'INC-100002',
    accountNumber: '100002',
    //customerName: 'Maria Santos',
    issue: 'Slow Internet Speed',
   // description: 'Customer experiencing intermittent slow connection.',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_PROGRESS,
   // createdDate: '2026-08-02',
    createdAt: '2026-07-25T08:15:00',
  },
  {
    ticketId: 'INC-100003',
    accountNumber: '100003',
    //customerName: 'Pedro Reyes',
    issue: 'Modem Replacement',
    //description: 'ONU device needs replacement.',
    priority: TicketPriority.LOW,
    status: TicketStatus.RESOLVED,
   // createdDate: '2026-07-30',
    createdAt: '2026-07-25T08:15:00',
  },
];