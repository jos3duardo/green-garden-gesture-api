import { Test, TestingModule } from '@nestjs/testing';
import { WatereingFrequencyResolver } from './watereing-frequency.resolver';
import { WatereingFrequencyService } from './watereing-frequency.service';

describe('WatereingFrequencyResolver', () => {
  let resolver: WatereingFrequencyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatereingFrequencyResolver, WatereingFrequencyService],
    }).compile();

    resolver = module.get<WatereingFrequencyResolver>(WatereingFrequencyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
