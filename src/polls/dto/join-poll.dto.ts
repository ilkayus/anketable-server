import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString } from 'class-validator';

export class JoinPollDto {
  @ApiProperty()
  @IsString()
  @Length(6, 6)
  pollID: string;

  @ApiProperty()
  @IsString()
  @Length(1, 18)
  name: string;
}
