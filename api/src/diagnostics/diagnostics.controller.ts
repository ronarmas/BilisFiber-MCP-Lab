import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { DiagnosticsService } from './diagnostics.service';
import { RebootDeviceDto } from './dto/reboot-device.dto';

@Controller('diagnostics')
export class DiagnosticsController {

  constructor(
    private readonly diagnosticsService: DiagnosticsService,
  ) {}


  @Get(':serviceId')
  getDiagnostics(
    @Param('serviceId') serviceId: string,
  ) {
    return this.diagnosticsService.getDiagnostics(serviceId);
  }


  @Post(':serviceId/reboot')
  rebootDevice(
    @Param('serviceId') serviceId: string,
    @Body() dto: RebootDeviceDto,
  ) {
    return this.diagnosticsService.rebootDevice(serviceId);
  }

  @Post(':serviceId/refresh')
  refreshStatus(
  @Param('serviceId') serviceId: string,
  ) {
  return this.diagnosticsService.refreshStatus(serviceId);
  }

  @Post(':serviceId/reset')
resetDiagnostics(
  @Param('serviceId') serviceId: string,
) {
  return this.diagnosticsService.resetDiagnostics(serviceId);
}
}