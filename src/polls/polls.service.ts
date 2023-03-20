import { Injectable } from '@nestjs/common';
import {
  CreatePollFields,
  JoinPollFields,
  RejoinPollFields,
} from './polls.types';

@Injectable()
export class PollsService {
  async createPoll(fields: CreatePollFields) {
    return fields;
  }

  async joinPoll(fields: JoinPollFields) {
    return fields;
  }

  async rejoinPoll(fields: RejoinPollFields) {
    return fields;
  }
}
