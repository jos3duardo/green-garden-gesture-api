import { Test, TestingModule } from '@nestjs/testing';
import { PlantGrowthStagesResolver } from './plant-growth-stages.resolver';
import { PlantGrowthStagesService } from './plant-growth-stages.service';

describe('PlantGrowthStagesResolver', () => {
  let resolver: PlantGrowthStagesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantGrowthStagesResolver, PlantGrowthStagesService],
    }).compile();

    resolver = module.get<PlantGrowthStagesResolver>(PlantGrowthStagesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
