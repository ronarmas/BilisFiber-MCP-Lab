import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OutagesModule } from './outages/outages.module';
import { CustomersModule } from './customers/customers.module';
import { TicketsModule } from './tickets/tickets.module';
import { DiagnosticsModule } from './diagnostics/diagnostics.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { TroubleshootingModule } from './troubleshooting/troubleshooting.module';
import { KnowledgeBaseModule } from './knowledge-base/knowledge-base.module';

import { TalkdeskModule } from './integrations/talkdesk/talkdesk.module';
@Module({
  imports: [
    OutagesModule,
    CustomersModule,
    TicketsModule,
    DiagnosticsModule,
    AppointmentsModule,
    TroubleshootingModule,
    KnowledgeBaseModule,
    TalkdeskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}