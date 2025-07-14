import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WatereingFrequencyService } from './watereing-frequency.service';
import { WatereingFrequency } from './entities/watereing-frequency.entity';
import { CreateWatereingFrequencyInput } from './dto/create-watereing-frequency.input';
import { UpdateWatereingFrequencyInput } from './dto/update-watereing-frequency.input';

@Resolver(() => WatereingFrequency)
export class WatereingFrequencyResolver {
  constructor(private readonly watereingFrequencyService: WatereingFrequencyService) {}

  @Mutation(() => WatereingFrequency)
  createWatereingFrequency(@Args('createWatereingFrequencyInput') createWatereingFrequencyInput: CreateWatereingFrequencyInput) {
    return this.watereingFrequencyService.create(createWatereingFrequencyInput);
  }

  @Query(() => [WatereingFrequency], { name: 'watereingFrequency' })
  findAll() {
    return this.watereingFrequencyService.findAll();
  }

  @Query(() => WatereingFrequency, { name: 'watereingFrequency' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.watereingFrequencyService.findOne(id);
  }

  @Mutation(() => WatereingFrequency)
  updateWatereingFrequency(@Args('updateWatereingFrequencyInput') updateWatereingFrequencyInput: UpdateWatereingFrequencyInput) {
    return this.watereingFrequencyService.update(updateWatereingFrequencyInput.id, updateWatereingFrequencyInput);
  }

  @Mutation(() => WatereingFrequency)
  removeWatereingFrequency(@Args('id', { type: () => Int }) id: number) {
    return this.watereingFrequencyService.remove(id);
  }
}
