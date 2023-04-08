"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const socketio_adapter_1 = require("./websocket/socketio-adapter");
async function bootstrap() {
    const logger = new common_1.Logger('Main (main.ts)');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('anketable example')
        .setDescription('API description')
        .setVersion('1.0')
        .addTag('anketable')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('', app, document);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT') || 4000;
    const clientPort = parseInt(configService.get('CLIENT_PORT'));
    app.enableCors({
        origin: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type,Accept,Authorization',
        methods: 'GET, POST, OPTIONS, PATCH, DELETE',
        credentials: true,
    });
    app.useWebSocketAdapter(new socketio_adapter_1.SocketIOAdapter(app, configService));
    await app.listen(port);
    logger.log(`Server running at ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map