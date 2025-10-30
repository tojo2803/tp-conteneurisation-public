import { Controller, Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
  @Get()
  now(): { now: string } {
    return { now: new Date().toISOString() };
  }

  @Get('ping')
  ping(): string {
    return 'pong';
  }
}
