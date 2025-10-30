import { config } from 'dotenv';

import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { TimeController } from './time.controller';
import { ItemsController } from './items.controller';
import {  dirname,resolve } from 'path';

@Module({ controllers: [TimeController, ItemsController] })
class AppModule {}

async function bootstrap() {

  config({ path: resolve(__dirname, '../../.env') });
  const raw = process.env.BACKEND_PORT;
  const port = Number.isFinite(Number(raw)) && Number(raw) > 0 ? Number(raw) : 3000;

  console.log('Backend is running on port:', port);

  const app = await NestFactory.create(AppModule, { logger: false });
  app.enableCors({ origin: true });

  await app.listen(port, '0.0.0.0');
}
bootstrap();
