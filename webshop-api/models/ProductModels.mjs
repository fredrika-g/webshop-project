export class ProductsModel {
  constructor(id, title, price, categories, stock) {
    this.id = Number(id);
    this.title = title;
    this.price = Number(price);
    this.categories = categories;
    this.stock = Number(stock);
  }
}

export class SingleProductModel extends ProductsModel {
  constructor(id, title, price, categories, stock, description) {
    super(id, title, price, categories, stock);

    this.description = description;
  }
}
