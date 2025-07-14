import { BadRequestException } from '@nestjs/common';
import { once } from 'events';
import { File } from '@modules/file/entities/file.entity';
import { FileUpload } from 'graphql-upload-minimal';
import { FileUploadBuffer } from '@modules/file/interfaces/file-uplopad.interface';

export class ExtractInfoFileUploadService {
  async execute(fileUpload: FileUploadBuffer): Promise<Partial<File>> {
    const { mimetype, buffer } = fileUpload;
    const partesNome = fileUpload.filename.split('.');
    const extension = partesNome.pop();

    if (!partesNome.length) {
      throw new BadRequestException(['File without extension']);
    }

    const name = partesNome.join('.');
    const stream = {
      ...fileUpload,
      createReadStream: () => {
        const { Readable } = require('stream');
        return Readable.from(buffer);
      },
    };
    const size = await this.getFileSize(stream);

    return { name, extension, mimetype, size };
  }

  private async getFileSize(fileUpload: FileUpload): Promise<number> {
    let fileSize = 0;

    const readable = fileUpload.createReadStream().on('readable', () => {
      let chunk;

      while ((chunk = readable.read()) !== null) {
        fileSize += chunk.length;
      }
    });

    await once(readable, 'end');

    return fileSize;
  }
}
