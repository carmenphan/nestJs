import { MinLength } from 'class-validator';

export class CategoryDto {
  @MinLength(1, { message: 'Name is too short , minimum length is 5' })
  categoryName: string;
  description: string;
}
