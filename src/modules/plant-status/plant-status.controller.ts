import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlantStatusService } from './plant-status.service';
import { CreatePlantStatusDto } from './dto/create-plant-status.dto';
import { UpdatePlantStatusDto } from './dto/update-plant-status.dto';

@Controller('plant-status')
export class PlantStatusController {
  constructor(private readonly plantStatusService: PlantStatusService) {}

  @Post()
  create(@Body() createPlantStatusDto: CreatePlantStatusDto) {
    return this.plantStatusService.create(createPlantStatusDto);
  }

  @Get()
  findAll() {
    return this.plantStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantStatusDto: UpdatePlantStatusDto) {
    return this.plantStatusService.update(+id, updatePlantStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantStatusService.remove(+id);
  }
}
