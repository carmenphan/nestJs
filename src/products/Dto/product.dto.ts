import { MinLength } from 'class-validator';

export class ProductDto {
  @MinLength(5, { message: 'Name is too short , minimum length is 5' })
  productName: string;
  Price: string;
  category_id: number;
}
