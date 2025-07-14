import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { FileType } from '../entities/file.type';
import { CreateFileService } from '../services/create-file.service';
import { File } from '@modules/file/entities/file.entity';

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileService: CreateFileService) {}

  @Mutation(() => FileType)
  createFile(
    @Args({
      name: 'file',
      type: () => GraphQLUpload,
    })
    fileUpload: FileUpload,
  ): Promise<File> {
    return this.fileService.execute(fileUpload, 'files');
  }
}
