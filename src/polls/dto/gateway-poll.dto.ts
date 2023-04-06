import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString, IsArray } from 'class-validator';

export class NominationDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  text: string;
}

export class RemoveNominationDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  id: string;
}

export class RemoveParticipantDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  id: string;
}

export class SubmitRankingsDto {
  @ApiProperty()
  @IsArray()
  rankings: string[];
}

export class ShowResultsDto {
  showResults: boolean;
}
