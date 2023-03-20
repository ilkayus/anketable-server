import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { JoinPollDto } from './dto/join-poll.dto';

@Controller('polls')
export class PollsController {
  // TODO - add constructor for access to providers!

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    Logger.log('In create!');

    return createPollDto;
  }

  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    Logger.log('In join!');

    return joinPollDto;
  }

  @Post('/rejoin')
  async rejoin() {
    Logger.log('In rejoin!');
    // TODO - add implementation for extracting user from token

    return {
      message: 'rejoin endpoint',
    };
  }
}
