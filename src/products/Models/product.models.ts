export class Product {
  id: number;
  name: string;
  Price: string;
  category_id: number;

  constructor(id: number, name: string, price: string, category_id: number) {
    this.id = id;
    this.name = name;
    this.Price = price;
    this.category_id = category_id;
  }
}
