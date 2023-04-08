import { CreatePollDto } from './dto/create-poll.dto';
import { JoinPollDto } from './dto/join-poll.dto';
import { PollsService } from './polls.service';
import { PollRequestWithAuth } from './types/polls.types';
export declare class PollsController {
    private pollsService;
    constructor(pollsService: PollsService);
    create(createPollDto: CreatePollDto): Promise<{
        poll: import("./types/polls.types").Poll;
        accessToken: string;
    }>;
    join(joinPollDto: JoinPollDto): Promise<{
        poll: import("./types/polls.types").Poll;
        accessToken: string;
    }>;
    rejoin(request: PollRequestWithAuth): Promise<import("./types/polls.types").Poll>;
}
