import { BadRequestException } from '@nestjs/common';
import { once } from 'events';
import { FileUpload } from 'graphql-upload-minimal';
import { File } from '@modules/file/entities/file.entity';

export class ExtractInfoFileUploadService {
  async execute(fileUpload: FileUpload): Promise<Partial<File>> {
    const { mimetype } = fileUpload;
    const partesNome = fileUpload.filename.split('.');
    const extension = partesNome.pop();

    if (!partesNome.length) {
      throw new BadRequestException(['File without extension']);
    }

    const name = partesNome.join('.');
    const size = await this.getFileSize(fileUpload);

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
