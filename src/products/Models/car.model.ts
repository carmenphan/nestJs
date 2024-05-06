export class Car {
  id?: number;
  productName?: string;
  Price?: string;
  category_id?: number;

  constructor(
    id: number,
    productName: string,
    Price: string,
    category_id: number,
  ) {
    this.id = id;
    this.productName = productName;
    this.Price = Price;
    this.category_id = category_id;
  }
}
