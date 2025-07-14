import { Test, TestingModule } from '@nestjs/testing';
import { PlantCareInstructionsResolver } from './plant-care-instructions.resolver';
import { PlantCareInstructionsService } from './plant-care-instructions.service';

describe('PlantCareInstructionsResolver', () => {
  let resolver: PlantCareInstructionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantCareInstructionsResolver, PlantCareInstructionsService],
    }).compile();

    resolver = module.get<PlantCareInstructionsResolver>(PlantCareInstructionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
