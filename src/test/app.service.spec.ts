import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../core/app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should return "Hello world!" from helloPath method', async () => {
    const result = await appService.helloPath();
    expect(result).toBe('Hello world!');
  });

  it('should return "Goodbye world!" from goodbyePath method', async () => {
    const result = await appService.goodbyePath();
    expect(result).toBe('Goodbye world!');
  });
});
