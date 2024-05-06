import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('accounts')
export class AccountsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column()
  password: string;
  @Column()
  permission: string;
}