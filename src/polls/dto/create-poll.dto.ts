import { ApiProperty } from '@nestjs/swagger';
import { Length, IsInt, IsString, Min, Max } from 'class-validator';

export class CreatePollDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  topic: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(5)
  votesPerVoter: number;

  @ApiProperty()
  @IsString()
  @Length(1, 25)
  name: string;
}
