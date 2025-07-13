import { Test, TestingModule } from '@nestjs/testing';
import { GrowthStageService } from './growth-stage.service';

describe('GrowthStageService', () => {
  let service: GrowthStageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrowthStageService],
    }).compile();

    service = module.get<GrowthStageService>(GrowthStageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
