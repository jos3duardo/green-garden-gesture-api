import { Module } from '@nestjs/common';
import { FileResolver } from './resolvers/file.resolver';
import { CreateFileService } from '@modules/file/services/create-file.service';
import { ExtractInfoFileUploadService } from '@modules/file/services/extract-info-file-upload.service';
import { RemoveFileService } from '@modules/file/services/remove-file.service';
import { UploadFileService } from '@modules/file/services/upload-file.service';
import { MinioModule } from 'nestjs-minio-client';
import { minioConfig } from '@config/minio.config';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { File } from '@modules/file/entities/file.entity';
import { FileType } from '@modules/file/entities/file.type';

@Module({
  imports: [
    MinioModule.register(minioConfig),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([File])],
      resolvers: [
        {
          DTOClass: FileType,
          EntityClass: File,
          create: { disabled: true },
          update: { disabled: true },
          delete: { disabled: true },
          guards: [],
        },
      ],
    }),
  ],
  providers: [
    FileResolver,
    CreateFileService,
    ExtractInfoFileUploadService,
    RemoveFileService,
    UploadFileService,
  ],
})
export class FileModule {}
