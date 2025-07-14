import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDto } from 'src/common/entities';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType('File')
export class FileType extends BaseDto {
  @FilterableField()
  name: string;

  @Field()
  url: string;

  @Field()
  extension: string;

  @Field()
  mimetype: string;

  @Field()
  size: number;

  @Field()
  pathBucket: string;
}
