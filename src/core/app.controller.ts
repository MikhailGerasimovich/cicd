import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  hello() {
    return this.appService.helloPath();
  }

  @Get('goodbye')
  async goodbye() {
    return this.appService.goodbyePath();
  }
}
