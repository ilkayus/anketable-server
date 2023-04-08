"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PollsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const ids_1 = require("../ids");
const getPollResults_1 = require("./helpers/getPollResults");
const polls_repository_1 = require("./polls.repository");
let PollsService = PollsService_1 = class PollsService {
    constructor(pollsRepository, jwtService) {
        this.pollsRepository = pollsRepository;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(PollsService_1.name);
    }
    async createPoll(fields) {
        const pollID = (0, ids_1.createPollID)();
        const userID = (0, ids_1.createUserID)();
        const createdPoll = await this.pollsRepository.createPoll(Object.assign(Object.assign({}, fields), { pollID,
            userID }));
        this.logger.debug(`Creating token string for pollID: ${createdPoll.id} and userID: ${userID}`);
        const signedString = this.jwtService.sign({
            pollID: createdPoll.id,
            name: fields.name,
        }, {
            subject: userID,
        });
        return {
            poll: createdPoll,
            accessToken: signedString,
        };
    }
    async getPoll(pollID) {
        return this.pollsRepository.getPoll(pollID);
    }
    async startPoll(pollID) {
        return this.pollsRepository.startPoll(pollID);
    }
    async joinPoll(poll) {
        const userID = (0, ids_1.createUserID)();
        this.logger.debug(`Fetching poll with ID: ${poll.pollID} for user with ID: ${userID}`);
        const joinedPoll = await this.pollsRepository.getPoll(poll.pollID);
        this.logger.debug(`Creating token string for pollID: ${joinedPoll.id} and userID: ${userID}`);
        const signedString = this.jwtService.sign({
            pollID: joinedPoll.id,
            name: poll.name,
        }, {
            subject: userID,
        });
        return {
            poll: joinedPoll,
            accessToken: signedString,
        };
    }
    async rejoinPoll(fields) {
        this.logger.debug(`Rejoining poll with ID: ${fields.pollID} for user with ID: ${fields.userID} with name: ${fields.name}`);
        const joinedPoll = await this.pollsRepository.addParticipant(fields);
        return joinedPoll;
    }
    async addParticipant(addParticipant) {
        return this.pollsRepository.addParticipant(addParticipant);
    }
    async removeParticipant(pollID, userID) {
        const poll = await this.pollsRepository.getPoll(pollID);
        if (!(poll === null || poll === void 0 ? void 0 : poll.hasStarted)) {
            const updatedPoll = await this.pollsRepository.removeParticipant(pollID, userID);
            return updatedPoll;
        }
    }
    async addNomination({ pollID, userID, text, }) {
        return this.pollsRepository.addNomination({
            pollID,
            nominationID: (0, ids_1.createNominationID)(),
            nomination: {
                userID,
                text,
            },
        });
    }
    async removeNomination(pollID, nominationID) {
        return this.pollsRepository.removeNomination(pollID, nominationID);
    }
    async showResults(pollID, showResults) {
        return this.pollsRepository.showResults(pollID, showResults);
    }
    async submitRankings(rankingsData) {
        const { hasStarted, showResults } = await this.pollsRepository.getPoll(rankingsData.pollID);
        if (!hasStarted) {
            throw new common_1.BadRequestException('Participants cannot rank until the poll has started.');
        }
        if (!showResults)
            return this.pollsRepository.addParticipantRankings(rankingsData);
        const { id } = await this.pollsRepository.addParticipantRankings(rankingsData);
        return this.computeResults(id);
    }
    async computeEndResults(pollID) {
        await this.pollsRepository.endPoll(pollID);
        return this.computeResults(pollID);
    }
    async computeResults(pollID) {
        const poll = await this.pollsRepository.getPoll(pollID);
        const results = (0, getPollResults_1.default)(poll.rankings, poll.nominations, poll.votesPerVoter);
        return this.pollsRepository.addResults(pollID, results);
    }
    async cancelPoll(pollID) {
        await this.pollsRepository.deletePoll(pollID);
    }
};
PollsService = PollsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [polls_repository_1.PollsRepository,
        jwt_1.JwtService])
], PollsService);
exports.PollsService = PollsService;
//# sourceMappingURL=polls.service.js.map