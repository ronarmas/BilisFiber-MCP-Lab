import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { TalkdeskService } from './talkdesk.service';
//import type { TalkdeskEvent } from './interfaces/talkdesk-event.interface';
import { TalkdeskEventDto } from './dto/talkdesk-event.dto';
@Controller('talkdesk/webhook')
export class TalkdeskWebhookController {


  constructor(
    private readonly talkdeskService: TalkdeskService,
  ) {}



  @Post()
 handleEvent(
  @Body() event: TalkdeskEventDto,
) {

    return this.talkdeskService.handleEvent(
      event,
    );

  }


}