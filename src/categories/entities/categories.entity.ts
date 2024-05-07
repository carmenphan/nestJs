import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarsEntity } from '../../products/Entities/cars.entity';
@Entity('categories')
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  categoryName: string;
  @Column()
  description: string;
  @OneToMany(() => CarsEntity, (cars) => cars.category)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  cars: CarsEntity[];
}
