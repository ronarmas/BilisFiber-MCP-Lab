import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Patch } from '@nestjs/common';
import { UpdateAppointmentStatusDto } from './dto/update-appointment-status.dto';

@Controller('appointments')
export class AppointmentsController {

  constructor(
    private readonly appointmentsService: AppointmentsService,
  ) {}

  @Get('account/:accountNumber')
  getAppointmentsByAccount(
    @Param('accountNumber') accountNumber: string,
  ) {
    return this.appointmentsService.getAppointmentsByAccount(
      accountNumber,
    );
  }

  @Get(':appointmentId')
  getAppointmentById(
    @Param('appointmentId') appointmentId: string,
  ) {
    return this.appointmentsService.getAppointmentById(
      appointmentId,
    );
  }

  @Post()
  createAppointment(
    @Body() dto: CreateAppointmentDto,
  ) {
    return this.appointmentsService.createAppointment(dto);
  }

  //
@Patch(':appointmentId/status')
updateAppointmentStatus(
  @Param('appointmentId') appointmentId: string,
  @Body() dto: UpdateAppointmentStatusDto,
) {
  return this.appointmentsService.updateAppointmentStatus(
    appointmentId,
    dto.status,
  );
}

}