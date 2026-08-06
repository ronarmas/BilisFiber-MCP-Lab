import {
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { TalkdeskService } from './talkdesk.service';
import { ApiKeyGuard } from '../../auth/api-key.guard';


@Controller('talkdesk')
@UseGuards(ApiKeyGuard)
export class TalkdeskController {


  constructor(
    private readonly talkdeskService: TalkdeskService,
  ) {}



  // AI Tool: Diagnose customer service

  @Get('diagnose/:accountNumber')
  diagnose(
    @Param('accountNumber')
    accountNumber: string,
  ) {

    return this.talkdeskService.diagnose(
      accountNumber,
    );

  }



  // AI Tool: Reboot ONT

  @Post('reboot/:serviceId')
  reboot(
    @Param('serviceId')
    serviceId: string,
  ) {

    return this.talkdeskService.reboot(
      serviceId,
    );

  }


}