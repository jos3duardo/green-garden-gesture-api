import { Test, TestingModule } from '@nestjs/testing';
import { SunExposureResolver } from './sun-exposure.resolver';
import { SunExposureService } from './sun-exposure.service';

describe('SunExposureResolver', () => {
  let resolver: SunExposureResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SunExposureResolver, SunExposureService],
    }).compile();

    resolver = module.get<SunExposureResolver>(SunExposureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
