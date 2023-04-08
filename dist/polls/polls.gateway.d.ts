import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { PollsService } from './polls.service';
import { Namespace } from 'socket.io';
import { SocketWithAuth } from '../websocket/socket.types';
import { NominationDto, RemoveNominationDto, RemoveParticipantDto, ShowResultsDto, SubmitRankingsDto } from './dto/gateway-poll.dto';
export declare class PollsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly pollsService;
    private readonly logger;
    constructor(pollsService: PollsService);
    io: Namespace;
    afterInit(): void;
    handleConnection(client: SocketWithAuth): Promise<void>;
    handleDisconnect(client: SocketWithAuth): Promise<void>;
    removeParticipant(data: RemoveParticipantDto, client: SocketWithAuth): Promise<void>;
    nominate(data: NominationDto, client: SocketWithAuth): Promise<void>;
    removeNomination(data: RemoveNominationDto, client: SocketWithAuth): Promise<void>;
    startVote(client: SocketWithAuth): Promise<void>;
    showResults(client: SocketWithAuth, data: ShowResultsDto): Promise<void>;
    submitRankings(client: SocketWithAuth, data: SubmitRankingsDto): Promise<void>;
    closePoll(client: SocketWithAuth): Promise<void>;
    cancelPoll(client: SocketWithAuth): Promise<void>;
}
