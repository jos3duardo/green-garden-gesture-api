import { MINIO_BUCKET } from '@config/minio.config';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MinioService } from 'nestjs-minio-client';
import { Repository } from 'typeorm';
import { File } from '@modules/file/entities/file.entity';

@Injectable()
export class RemoveFileService {
  constructor(
    @InjectRepository(File)
    readonly repository: Repository<File>,
    private readonly minioService: MinioService,
  ) {}

  async execute(idFile: number): Promise<File> {
    const file = await this.repository.findOne({ where: { id: idFile } });

    if (!file) {
      return;
    }

    await this.minioService.client.removeObject(MINIO_BUCKET, file.pathBucket);

    return this.repository.remove(file);
  }
}
