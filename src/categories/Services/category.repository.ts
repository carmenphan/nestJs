import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from '../entities/categories.entity';
import { Repository } from 'typeorm';
import { Category } from '../Models/category.model';
import { ICategoryRepository } from '../Interfaces/ICategoryRepository';
import { BaseRepository } from "../../global/BaseRepository";

@Injectable()
export class CategoryRepository
  extends BaseRepository<CategoriesEntity, Repository<CategoriesEntity>>
  implements ICategoryRepository
{
  constructor(
    @InjectRepository(CategoriesEntity)
    protected readonly repository: Repository<CategoriesEntity>,
  ) {
    super(repository);
  }
}
