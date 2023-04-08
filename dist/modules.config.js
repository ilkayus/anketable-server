"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtModule = exports.redisModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const redis_module_1 = require("./redis/redis.module");
exports.redisModule = redis_module_1.RedisModule.registerAsync({
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => {
        const logger = new common_1.Logger('RedisModule');
        return {
            connectionOptions: {
                password: configService.get('REDISPASS'),
                host: configService.get('REDISHOST'),
                port: configService.get('REDISPORT'),
            },
            onClientReady: (client) => {
                logger.log('Redis client ready');
                client.on('error', (err) => {
                    logger.error('Redis Client Error: ', err);
                });
                client.on('connect', () => {
                    logger.log(`Connected to redis on ${client.options.host}:${client.options.port}`);
                });
            },
        };
    },
    inject: [config_1.ConfigService],
});
exports.jwtModule = jwt_1.JwtModule.registerAsync({
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
            expiresIn: parseInt(configService.get('POLL_DURATION')),
        },
    }),
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=modules.config.js.map