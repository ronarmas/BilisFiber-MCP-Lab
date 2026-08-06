import { Module } from '@nestjs/common';
import { OutagesController } from './outages.controller';
import { OutagesService } from './outages.service';

@Module({
  controllers: [OutagesController],
  providers: [OutagesService],
  exports: [OutagesService],
})
export class OutagesModule {}
