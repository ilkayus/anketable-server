import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString } from 'class-validator';

export class NominationDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  text: string;
}
