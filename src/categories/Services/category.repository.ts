import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from '../entities/categories.entity';
import { Repository } from 'typeorm';
import { Category } from '../Models/category.model';
import { ICategoryRepository } from '../Interfaces/ICategoryRepository';

@Injectable()
export class CategoryRepository implements ICategoryRepository{
  constructor(
    @InjectRepository(CategoriesEntity)
    private categoryRepository: Repository<CategoriesEntity>,
  ) {}
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
  async findOne(id: number): Promise<Category> {
    return await this.categoryRepository.findOne({ where : {id : id} });
  }
  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }
  async update(id, category: Category): Promise<Category> {
    await this.categoryRepository.update(id, category);
    return await this.findOne(id);
  }
  async delete(id: number): Promise<boolean> {
    const category = await this.findOne(id);
    if (category && (await this.categoryRepository.delete(id))) {
      return true;
    }
    return false;
  }
}
