import { Test, TestingModule } from '@nestjs/testing';
import { WatereingFrequencyService } from './watereing-frequency.service';

describe('WatereingFrequencyService', () => {
  let service: WatereingFrequencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatereingFrequencyService],
    }).compile();

    service = module.get<WatereingFrequencyService>(WatereingFrequencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
