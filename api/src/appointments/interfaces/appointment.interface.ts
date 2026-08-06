import { AppointmentStatus } from '../enums/appointment-status.enum';

export interface Appointment {
  appointmentId: string;
  ticketId: string;
  accountNumber: string;
  technician: string;
  visitDate: string;
  timeSlot: string;
  status: AppointmentStatus;
  purpose: string;
}