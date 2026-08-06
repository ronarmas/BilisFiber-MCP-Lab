import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('BilisFiber API')
    .setDescription('Backend API for Talkdesk Agentic AI + MCP Demo')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3000;

  await app.listen(port);

  console.log(`🚀 API running on port ${port}`);
  console.log(`📚 Swagger: http://localhost:${port}/swagger`);
}

bootstrap();