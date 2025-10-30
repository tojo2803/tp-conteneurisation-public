import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { TimeController } from './time.controller';
import { ItemsController } from './items.controller';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  controllers: [TimeController, ItemsController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.enableCors({ origin: true });
  const port = process.env.BACKEND_PORT || 3001;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
