import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SocketIOAdapter } from './websocket/socketio-adapter';

async function bootstrap() {
  const logger = new Logger('Main (main.ts)');
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('anketable example')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('anketable')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 4000;
  const clientPort = parseInt(configService.get('CLIENT_PORT'));

  // app.enableCors({
  //   origin: [
  //     `http://localhost:${clientPort}`,
  //     new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/`),
  //   ],
  // });

  app.enableCors({
    origin: true,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type,Accept,Authorization',
    methods: 'GET, POST, OPTIONS, PATCH, DELETE',
    credentials: true,
  });

  app.useWebSocketAdapter(new SocketIOAdapter(app, configService));

  await app.listen(port);
  logger.log(`Server running at ${port}`);
}
bootstrap();
