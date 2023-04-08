import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { AddNominationData, AddParticipantData, AddParticipantRankingsData, CreatePollData, Poll, Results } from './types/polls.types';
export declare class PollsRepository {
    private readonly redisClient;
    private readonly ttl;
    private readonly logger;
    constructor(configService: ConfigService, redisClient: Redis);
    createPoll({ votesPerVoter, topic, pollID, userID, }: CreatePollData): Promise<Poll>;
    getPoll(pollID: string): Promise<Poll>;
    startPoll(pollID: string): Promise<Poll>;
    endPoll(pollID: string): Promise<Poll>;
    showResults(pollID: string, showResults: boolean): Promise<Poll>;
    addParticipant({ pollID, userID, name, }: AddParticipantData): Promise<Poll>;
    removeParticipant(pollID: string, userID: string): Promise<Poll>;
    addNomination({ pollID, nominationID, nomination, }: AddNominationData): Promise<Poll>;
    removeNomination(pollID: string, nominationID: string): Promise<Poll>;
    addParticipantRankings({ pollID, userID, rankings, }: AddParticipantRankingsData): Promise<Poll>;
    addResults(pollID: string, results: Results): Promise<Poll>;
    deletePoll(pollID: string): Promise<void>;
}
