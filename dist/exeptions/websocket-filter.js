"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsCatchAllFilter = void 0;
const common_1 = require("@nestjs/common");
const websocket_exeptions_1 = require("./websocket-exeptions");
let WsCatchAllFilter = class WsCatchAllFilter {
    catch(exception, host) {
        var _a, _b;
        const socket = host.switchToWs().getClient();
        if (exception instanceof common_1.BadRequestException) {
            const exceptionData = exception.getResponse();
            const exceptionMessage = (_b = (_a = exceptionData['message']) !== null && _a !== void 0 ? _a : exceptionData) !== null && _b !== void 0 ? _b : exception.name;
            const wsException = new websocket_exeptions_1.WsBadRequestException(exceptionMessage);
            socket.emit('exception', wsException.getError());
            return;
        }
        if (exception instanceof websocket_exeptions_1.WsTypeException) {
            socket.emit('exception', exception.getError());
            return;
        }
        const wsException = new websocket_exeptions_1.WsUnknownException(exception.message);
        socket.emit('exception', wsException.getError());
    }
};
WsCatchAllFilter = __decorate([
    (0, common_1.Catch)()
], WsCatchAllFilter);
exports.WsCatchAllFilter = WsCatchAllFilter;
//# sourceMappingURL=websocket-filter.js.map