import { Test, TestingModule } from '@nestjs/testing';
import { SoilTypeResolver } from './soil-type.resolver';
import { SoilTypeService } from './soil-type.service';

describe('SoilTypeResolver', () => {
  let resolver: SoilTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoilTypeResolver, SoilTypeService],
    }).compile();

    resolver = module.get<SoilTypeResolver>(SoilTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
