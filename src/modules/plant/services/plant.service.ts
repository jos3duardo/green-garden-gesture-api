import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { File } from '@modules/file/entities/file.entity';
import { Plant } from '@modules/plant/entities/plant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileService } from '@modules/file/services/create-file.service';
import { CreatePlantInput } from '@modules/plant/input/create-plant.input';
import { FileUpload } from 'graphql-upload-minimal';
import { PATH_PLANTS } from '@config/minio.config';

@Injectable()
export class PlantService {
  constructor(
    @InjectRepository(Plant)
    private readonly repository: Repository<Plant>,
    private readonly createFileService: CreateFileService,
  ) {}

  async createOnePlant(
    input: CreatePlantInput,
    fileUpload: FileUpload,
  ): Promise<Plant> {
    try {
      let file: File;

      if (fileUpload) {
        file = await this.createFileService.execute(fileUpload, PATH_PLANTS);
      }

      const plantSave = await this.repository.save({
        ...input,
        fileId: file?.id ?? null,
      });

      return this.repository.findOne({
        where: { id: plantSave.id },
      });
    } catch (error) {
      Logger.error(error);
      throw new BadRequestException('error creating plant', error.message);
    }
  }
}
