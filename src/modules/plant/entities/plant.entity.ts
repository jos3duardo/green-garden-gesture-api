import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '@common/entities';
import { File } from '@modules/file/entities/file.entity';

@Entity('plants')
export class Plant extends BaseEntity {
  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  plantedDate: Date;

  @Column()
  location: string;

  @Column()
  soilType: string;

  @Column()
  sunExposure: string;

  @Column()
  wateringFrequency: string;

  @Column()
  status: string;

  @Column({ name: 'file_id' })
  fileId: number;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn({
    name: 'file_id',
    referencedColumnName: 'id',
  })
  file: File;
}
