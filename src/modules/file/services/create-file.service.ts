import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUpload } from 'graphql-upload-minimal';
import { Repository } from 'typeorm';
import { File } from '@modules/file/entities/file.entity';
import { UploadFileService } from '@modules/file/services/upload-file.service';
import { ExtractInfoFileUploadService } from '@modules/file/services/extract-info-file-upload.service';

@Injectable()
export class CreateFileService {
  constructor(
    @InjectRepository(File)
    readonly repository: Repository<File>,
    private uploadFileService: UploadFileService,
    private infoFileService: ExtractInfoFileUploadService,
  ) {}

  async execute(fileUpload: FileUpload, directory: string): Promise<File> {
    const infoFile = await this.infoFileService.execute(fileUpload);

    const { url, pathBucket } = await this.uploadFileService.execute(
      directory,
      fileUpload,
    );
    return this.repository.save({ ...infoFile, url, pathBucket });
  }
}
