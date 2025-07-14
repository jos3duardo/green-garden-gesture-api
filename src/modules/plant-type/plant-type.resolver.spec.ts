import { Test, TestingModule } from '@nestjs/testing';
import { PlantTypeResolver } from './plant-type.resolver';
import { PlantTypeService } from './plant-type.service';

describe('PlantTypeResolver', () => {
  let resolver: PlantTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantTypeResolver, PlantTypeService],
    }).compile();

    resolver = module.get<PlantTypeResolver>(PlantTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
