import { Injectable, Logger } from '@nestjs/common';
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
    try {
      const chunks: Buffer[] = [];
      for await (const chunk of fileUpload.createReadStream()) {
        chunks.push(chunk);
      }
      const fileBuffer = Buffer.concat(chunks);

      const fileUploadBuffer: {
        buffer: Buffer;
        filename: string;
        fieldName: string;
        mimetype: string;
        encoding: string;
      } = {
        buffer: fileBuffer,
        filename: fileUpload.filename,
        fieldName: fileUpload.fieldName,
        mimetype: fileUpload.mimetype,
        encoding: fileUpload.encoding,
      };

      const { url, pathBucket } = await this.uploadFileService.execute(
        directory,
        fileUploadBuffer,
      );

      const infoFile = await this.infoFileService.execute(fileUploadBuffer);

      return await this.repository.save({ ...infoFile, url, pathBucket });
    } catch (error) {
      Logger.error(error);
      throw new Error(`Error creating file: ${error.message}`);
    }
  }
}
