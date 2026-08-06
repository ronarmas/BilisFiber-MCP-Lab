import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { appointments } from './appointments.data';
import { Appointment } from './interfaces/appointment.interface';
import { AppointmentStatus } from './enums/appointment-status.enum';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { TicketsService } from '../tickets/tickets.service';
import { customerRecords } from '../mock-data/customer-records.data';
import { getNextAvailableTechnician } from './dispatcher/technician.dispatcher';

@Injectable()
export class AppointmentsService {

  constructor(
    private readonly ticketsService: TicketsService,
  ) {}


  getAppointmentsByAccount(accountNumber: string) {

    // Verify customer exists
    const customer = customerRecords.find(
      customer => customer.accountNumber === accountNumber,
    );

    if (!customer) {
      throw new NotFoundException(
        `Customer with account number '${accountNumber}' not found.`,
      );
    }


    return appointments.filter(
      appointment => appointment.accountNumber === accountNumber,
    );
  }


  getAppointmentById(appointmentId: string) {

    const appointment = appointments.find(
      appointment => appointment.appointmentId === appointmentId,
    );

    if (!appointment) {
      throw new NotFoundException(
        `Appointment '${appointmentId}' not found.`,
      );
    }


    return appointment;
  }


  createAppointment(dto: CreateAppointmentDto) {

    // Validate ticket exists
    this.ticketsService.getTicketById(dto.ticketId);


    // Prevent duplicate appointments
    const existingAppointment = appointments.find(
      appointment =>
        appointment.ticketId === dto.ticketId &&
        appointment.status !== AppointmentStatus.COMPLETED &&
        appointment.status !== AppointmentStatus.CANCELLED,
    );


    if (existingAppointment) {
      return {
        message: 'An appointment already exists for this ticket.',
        appointment: existingAppointment,
      };
    }


    // Find available technician
    const technician = getNextAvailableTechnician();


    if (!technician) {
      return {
        message: 'No technicians are currently available.',
      };
    }


    // Generate next appointment number
    const latestAppointment =
      appointments
        .map(a => Number(a.appointmentId.replace('APT-', '')))
        .sort((a, b) => b - a)[0] || 100000;


    const nextAppointmentNumber = latestAppointment + 1;


    const appointment: Appointment = {
      appointmentId: `APT-${nextAppointmentNumber}`,
      ticketId: dto.ticketId,
      accountNumber: dto.accountNumber,
      technician: technician.name,
      visitDate: dto.visitDate,
      timeSlot: dto.timeSlot,
      purpose: dto.purpose,
      status: AppointmentStatus.ASSIGNED,
    };


    appointments.push(appointment);


    // Mark technician unavailable
    technician.available = false;


    return appointment;
  }


  updateAppointmentStatus(
    appointmentId: string,
    status: AppointmentStatus,
  ) {

    const appointment = appointments.find(
      appointment => appointment.appointmentId === appointmentId,
    );


    if (!appointment) {
      throw new NotFoundException(
        `Appointment '${appointmentId}' not found.`,
      );
    }


    appointment.status = status;


    return {
      message: 'Appointment updated successfully.',
      appointment,
    };
  }

}