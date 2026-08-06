import { Appointment } from './interfaces/appointment.interface';
import { AppointmentStatus } from './enums/appointment-status.enum';

export const appointments: Appointment[] = [
  {
    appointmentId: 'APT-100001',
    ticketId: 'INC-100001',
    accountNumber: '100001A',
    technician: 'Juan Dela Cruz',
    visitDate: '2026-08-05',
    timeSlot: '08:00 AM - 10:00 AM',
    purpose: 'Fiber Connection Repair',
    status: AppointmentStatus.SCHEDULED,
  },
  {
    appointmentId: 'APT-100002',
    ticketId: 'INC-100002',
    accountNumber: '100002',
    technician: 'Mark Villanueva',
    visitDate: '2026-08-06',
    timeSlot: '10:00 AM - 12:00 PM',
    purpose: 'Internet Speed Investigation',
    status: AppointmentStatus.ASSIGNED,
  },
  {
    appointmentId: 'APT-100003',
    ticketId: 'INC-100003',
    accountNumber: '100003',
    technician: 'Anna Garcia',
    visitDate: '2026-08-04',
    timeSlot: '01:00 PM - 03:00 PM',
    purpose: 'ONU Replacement',
    status: AppointmentStatus.COMPLETED,
  },
];