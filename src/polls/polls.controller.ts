import { Controller, Logger, Post } from '@nestjs/common';

@Controller('polls')
export class PollsController {
  @Post()
  async create() {
    Logger.log('In Create');
  }

  @Post('/join')
  async join() {
    Logger.log('In Join');
  }

  @Post('/rejoin')
  async rejoin() {
    Logger.log('In Rejoin');
  }
}
