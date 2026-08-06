import { Module } from '@nestjs/common';

import { TroubleshootingController } from './troubleshooting.controller';
import { TroubleshootingService } from './troubleshooting.service';

import { CustomersModule } from '../customers/customers.module';
import { OutagesModule } from '../outages/outages.module';
import { DiagnosticsModule } from '../diagnostics/diagnostics.module';

@Module({
  imports: [
    CustomersModule,
    OutagesModule,
    DiagnosticsModule,
  ],
  controllers: [
    TroubleshootingController,
  ],
  providers: [
    TroubleshootingService,
  ],
    exports: [
    TroubleshootingService,
  ],
})
export class TroubleshootingModule {}