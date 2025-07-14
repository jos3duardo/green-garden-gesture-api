import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SunExposureService } from './sun-exposure.service';
import { SunExposure } from './entities/sun-exposure.entity';
import { CreateSunExposureInput } from './dto/create-sun-exposure.input';
import { UpdateSunExposureInput } from './dto/update-sun-exposure.input';

@Resolver(() => SunExposure)
export class SunExposureResolver {
  constructor(private readonly sunExposureService: SunExposureService) {}

  @Mutation(() => SunExposure)
  createSunExposure(@Args('createSunExposureInput') createSunExposureInput: CreateSunExposureInput) {
    return this.sunExposureService.create(createSunExposureInput);
  }

  @Query(() => [SunExposure], { name: 'sunExposure' })
  findAll() {
    return this.sunExposureService.findAll();
  }

  @Query(() => SunExposure, { name: 'sunExposure' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sunExposureService.findOne(id);
  }

  @Mutation(() => SunExposure)
  updateSunExposure(@Args('updateSunExposureInput') updateSunExposureInput: UpdateSunExposureInput) {
    return this.sunExposureService.update(updateSunExposureInput.id, updateSunExposureInput);
  }

  @Mutation(() => SunExposure)
  removeSunExposure(@Args('id', { type: () => Int }) id: number) {
    return this.sunExposureService.remove(id);
  }
}
