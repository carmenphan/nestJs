import { Inject, Injectable } from "@nestjs/common";
import { Category } from '../Models/category.model';
import { ICategoryRepository } from '../Interfaces/ICategoryRepository';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }
  async findOne(id: number): Promise<Category> {
    return await this.categoryRepository.findOne(id);
  }
  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.create(category);
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
