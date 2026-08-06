import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { TroubleshootingService } from './troubleshooting.service';


@Controller('troubleshoot')
export class TroubleshootingController {

  constructor(
    private readonly troubleshootingService: TroubleshootingService,
  ) {}


  @Get(':accountNumber')
  troubleshoot(
    @Param('accountNumber') accountNumber: string,
  ) {

    return this.troubleshootingService.troubleshoot(
      accountNumber,
    );

  }

}