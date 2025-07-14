import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@common/entities';

@Entity('plants')
export class Plant extends BaseEntity {
  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  plantedDate: string;

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
  fileId: string;
}
