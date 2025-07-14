import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDto {
  @IDField(() => Int)
  id: number;

  @FilterableField(() => GraphQLISODateTime, {
    description: 'record creation date',
    defaultValue: new Date(Date.now()).toLocaleString(),
  })
  createdAt: Date;

  @FilterableField(() => GraphQLISODateTime, {
    description: 'record update date',
    nullable: true,
  })
  updatedAt?: Date;

  @FilterableField(() => GraphQLISODateTime, {
    description: 'record deletion date',
    nullable: true,
  })
  deletedAt?: Date;
}
