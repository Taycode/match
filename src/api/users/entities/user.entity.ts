import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserTrackEnum } from '../enums/user-track.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({
    type: 'enum',
    enum: UserTrackEnum,
  })
  track: UserTrackEnum;

  @Column('int')
  yearsOfExperience: number;

  @Column('text', { array: true })
  tools: string[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
