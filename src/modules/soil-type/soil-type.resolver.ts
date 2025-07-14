import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SoilTypeService } from './soil-type.service';
import { SoilType } from './entities/soil-type.entity';
import { CreateSoilTypeInput } from './dto/create-soil-type.input';
import { UpdateSoilTypeInput } from './dto/update-soil-type.input';

@Resolver(() => SoilType)
export class SoilTypeResolver {
  constructor(private readonly soilTypeService: SoilTypeService) {}

  @Mutation(() => SoilType)
  createSoilType(@Args('createSoilTypeInput') createSoilTypeInput: CreateSoilTypeInput) {
    return this.soilTypeService.create(createSoilTypeInput);
  }

  @Query(() => [SoilType], { name: 'soilType' })
  findAll() {
    return this.soilTypeService.findAll();
  }

  @Query(() => SoilType, { name: 'soilType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.soilTypeService.findOne(id);
  }

  @Mutation(() => SoilType)
  updateSoilType(@Args('updateSoilTypeInput') updateSoilTypeInput: UpdateSoilTypeInput) {
    return this.soilTypeService.update(updateSoilTypeInput.id, updateSoilTypeInput);
  }

  @Mutation(() => SoilType)
  removeSoilType(@Args('id', { type: () => Int }) id: number) {
    return this.soilTypeService.remove(id);
  }
}
