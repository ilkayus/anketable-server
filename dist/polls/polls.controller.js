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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_poll_dto_1 = require("./dto/create-poll.dto");
const join_poll_dto_1 = require("./dto/join-poll.dto");
const polls_controller_guard_1 = require("./guards/polls-controller.guard");
const polls_service_1 = require("./polls.service");
let PollsController = class PollsController {
    constructor(pollsService) {
        this.pollsService = pollsService;
    }
    async create(createPollDto) {
        const result = await this.pollsService.createPoll(createPollDto);
        return result;
    }
    async join(joinPollDto) {
        const result = await this.pollsService.joinPoll(joinPollDto);
        return result;
    }
    async rejoin(request) {
        const { userID, pollID, name } = request;
        const result = await this.pollsService.rejoinPoll({
            name,
            pollID,
            userID,
        });
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_poll_dto_1.CreatePollDto]),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/join'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_poll_dto_1.JoinPollDto]),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "join", null);
__decorate([
    (0, common_1.UseGuards)(polls_controller_guard_1.PollsGuard),
    (0, common_1.Post)('/rejoin'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "rejoin", null);
PollsController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Controller)('polls'),
    __metadata("design:paramtypes", [polls_service_1.PollsService])
], PollsController);
exports.PollsController = PollsController;
//# sourceMappingURL=polls.controller.js.map