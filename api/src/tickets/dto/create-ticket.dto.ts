import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty({
    example: '100001',
    description: 'Customer account number',
  })
  accountNumber: string;

  @ApiProperty({
    example: 'LOS Red Light',
    description: 'Reported issue',
  })
  issue: string;
}