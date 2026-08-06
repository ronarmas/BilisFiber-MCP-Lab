import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { OutagesService } from './outages.service';

@ApiTags('Outages')
@Controller('outages')
export class OutagesController {

  constructor(
    private readonly outagesService: OutagesService,
  ) {}

  @Post('check')
  @ApiOperation({
    summary: 'Check active outage in customer area',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        area: {
          type: 'string',
          example: 'Sto. Cristo',
        },
      },
    },
  })
  checkOutage(
    @Body() body: { area: string },
  ) {
    return this.outagesService.checkOutage(body?.area);
  }
}