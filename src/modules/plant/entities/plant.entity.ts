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

  @Column({ nullable: true, default: '' })
  temperature: string;

  @Column({ nullable: true, default: '' })
  humidity: string;

  @Column({ nullable: true, default: '' })
  sunlight: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ type: 'date', nullable: true, name: 'next_watering' })
  nextWatering: Date;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn({
    name: 'file_id',
    referencedColumnName: 'id',
  })
  file: File;
}
