import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async helloPath() {
    return 'Hello world!';
  }

  async goodbyePath() {
    return 'Goodbye world!';
  }
}
