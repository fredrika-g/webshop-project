export class ProductsModel {
  constructor(id, title, price, categories, stock) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.categories = categories;
    this.stock = stock;
  }
}

export class SingleProductModel extends ProductsModel {
  constructor(id, title, price, categories, stock, description) {
    super(id, title, price, categories, stock);

    this.description = this.description;
  }
}
