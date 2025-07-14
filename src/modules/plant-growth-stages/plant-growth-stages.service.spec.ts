import { Test, TestingModule } from '@nestjs/testing';
import { PlantGrowthStagesService } from './plant-growth-stages.service';

describe('PlantGrowthStagesService', () => {
  let service: PlantGrowthStagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantGrowthStagesService],
    }).compile();

    service = module.get<PlantGrowthStagesService>(PlantGrowthStagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
