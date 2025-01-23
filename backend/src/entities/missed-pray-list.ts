import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MissedPrayList {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  prayId: string;

  @Column({ name: 'status', default: false })
  prayed: boolean;

  @CreateDateColumn()
  missedAt: Date;
}
