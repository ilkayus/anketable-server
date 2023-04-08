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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowResultsDto = exports.SubmitRankingsDto = exports.RemoveParticipantDto = exports.RemoveNominationDto = exports.NominationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class NominationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { text: { required: true, type: () => String, minLength: 1, maxLength: 100 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], NominationDto.prototype, "text", void 0);
exports.NominationDto = NominationDto;
class RemoveNominationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, minLength: 1, maxLength: 100 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], RemoveNominationDto.prototype, "id", void 0);
exports.RemoveNominationDto = RemoveNominationDto;
class RemoveParticipantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, minLength: 1, maxLength: 100 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], RemoveParticipantDto.prototype, "id", void 0);
exports.RemoveParticipantDto = RemoveParticipantDto;
class SubmitRankingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { rankings: { required: true, type: () => [String] } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SubmitRankingsDto.prototype, "rankings", void 0);
exports.SubmitRankingsDto = SubmitRankingsDto;
class ShowResultsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { showResults: { required: true, type: () => Boolean } };
    }
}
exports.ShowResultsDto = ShowResultsDto;
//# sourceMappingURL=gateway-poll.dto.js.map