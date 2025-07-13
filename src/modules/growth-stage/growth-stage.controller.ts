import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrowthStageService } from './growth-stage.service';
import { CreateGrowthStageDto } from './dto/create-growth-stage.dto';
import { UpdateGrowthStageDto } from './dto/update-growth-stage.dto';

@Controller('growth-stage')
export class GrowthStageController {
  constructor(private readonly growthStageService: GrowthStageService) {}

  @Post()
  create(@Body() createGrowthStageDto: CreateGrowthStageDto) {
    return this.growthStageService.create(createGrowthStageDto);
  }

  @Get()
  findAll() {
    return this.growthStageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.growthStageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrowthStageDto: UpdateGrowthStageDto) {
    return this.growthStageService.update(+id, updateGrowthStageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.growthStageService.remove(+id);
  }
}
