import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@common/entities';

@Entity('files')
export class File extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column()
  url: string;

  @Column({ length: 60 })
  extension: string;

  @Column({ length: 60 })
  mimetype: string;

  @Column()
  size: number;

  @Column({ name: 'path_bucket', nullable: true })
  pathBucket: string;
}
