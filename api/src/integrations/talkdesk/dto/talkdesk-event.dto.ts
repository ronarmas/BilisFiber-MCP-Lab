import { ApiProperty } from '@nestjs/swagger';

export class TalkdeskEventDto {


  @ApiProperty({
    example: 'CALL_STARTED',
  })
  event: string;



  @ApiProperty({
    example: 'TD-SESSION-100001',
  })
  sessionId: string;



  @ApiProperty({
    example: '09171234567',
  })
  phoneNumber: string;



  @ApiProperty({
    example: '2026-08-04T02:00:00',
    required: false,
  })
  timestamp?: string;

}