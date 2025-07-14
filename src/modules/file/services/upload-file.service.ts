import { MINIO_BUCKET, MINIO_LINK } from '@config/minio.config';

import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { MinioService } from 'nestjs-minio-client';
import { FileUploadBuffer } from '@modules/file/interfaces/file-uplopad.interface';

interface UploadArquivoInterface {
  url: string;
  pathBucket: string;
}

@Injectable()
export class UploadFileService {
  constructor(private readonly minioService: MinioService) {}

  async execute(
    diretorio: string,
    fileUpload: FileUploadBuffer,
  ): Promise<UploadArquivoInterface> {
    let metaData: { [key: string]: string } = {
      'Content-Type': 'image/jpeg',
      'Content-Disposition': 'inline',
    };

    const extensions = fileUpload.filename.split('.').pop();

    if (extensions === 'pdf') {
      metaData = {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline',
      };
    }

    const nomeArquivo = randomBytes(20).toString('hex');
    const nomeCompleto = diretorio + '/' + nomeArquivo + '.' + extensions;

    const fileStream = fileUpload.buffer;

    this.minioService.client.putObject(
      MINIO_BUCKET,
      nomeCompleto,
      fileStream,
      1,
      metaData,
    );

    return {
      url: MINIO_LINK + '/' + nomeCompleto,
      pathBucket: nomeCompleto,
    };
  }
}
