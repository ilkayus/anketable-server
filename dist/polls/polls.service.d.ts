import { JwtService } from '@nestjs/jwt';
import { PollsRepository } from './polls.repository';
import { AddNominationFields, AddParticipantFields, CreatePollFields, JoinPollFields, Poll, RejoinPollFields, SubmitRankingsFields } from './types/polls.types';
export declare class PollsService {
    private readonly pollsRepository;
    private readonly jwtService;
    private readonly logger;
    constructor(pollsRepository: PollsRepository, jwtService: JwtService);
    createPoll(fields: CreatePollFields): Promise<{
        poll: Poll;
        accessToken: string;
    }>;
    getPoll(pollID: string): Promise<Poll>;
    startPoll(pollID: string): Promise<Poll>;
    joinPoll(poll: JoinPollFields): Promise<{
        poll: Poll;
        accessToken: string;
    }>;
    rejoinPoll(fields: RejoinPollFields): Promise<Poll>;
    addParticipant(addParticipant: AddParticipantFields): Promise<Poll>;
    removeParticipant(pollID: string, userID: string): Promise<Poll | void>;
    addNomination({ pollID, userID, text, }: AddNominationFields): Promise<Poll>;
    removeNomination(pollID: string, nominationID: string): Promise<Poll>;
    showResults(pollID: string, showResults: boolean): Promise<Poll>;
    submitRankings(rankingsData: SubmitRankingsFields): Promise<Poll>;
    computeEndResults(pollID: string): Promise<Poll>;
    computeResults(pollID: string): Promise<Poll>;
    cancelPoll(pollID: string): Promise<void>;
}
