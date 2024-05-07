import { Module } from '@nestjs/common';
import { CategoriesEntity } from './entities/categories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './Controllers/category.controller';
import { CategoryService } from './Services/category.service';
import { CategoryRepository } from './Services/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesEntity])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      useClass: CategoryRepository,
      provide: 'ICategoryRepository',
    },
  ],
})
export class CategoriesModule {}
