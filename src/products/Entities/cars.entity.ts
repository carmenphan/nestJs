import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoriesEntity } from '../../categories/entities/categories.entity';
@Entity('cars')
export class CarsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  productName: string;
  @Column()
  Price: string;
  @Column()
  category_id: number;
  @ManyToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: CategoriesEntity;
}
