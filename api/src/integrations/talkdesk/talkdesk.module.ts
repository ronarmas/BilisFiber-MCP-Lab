import { Module } from '@nestjs/common';

import { TalkdeskController } from './talkdesk.controller';
import { TalkdeskService } from './talkdesk.service';

import { TroubleshootingModule } from '../../troubleshooting/troubleshooting.module';
import { DiagnosticsModule } from '../../diagnostics/diagnostics.module';
import { TicketsModule } from '../../tickets/tickets.module';
import { AppointmentsModule } from '../../appointments/appointments.module';
import { TalkdeskWebhookController } from './talkdesk-webhook.controller';
import { CustomersModule} from '../../customers/customers.module';
import { OutagesModule } from '../../outages/outages.module';
@Module({

  imports: [
    CustomersModule,
    DiagnosticsModule,
    TroubleshootingModule,
    OutagesModule,
    TicketsModule,
    AppointmentsModule,
  ],

  controllers: [
    TalkdeskController,
    TalkdeskWebhookController,
  ],

  providers: [
    TalkdeskService,
  ],

})
export class TalkdeskModule {}