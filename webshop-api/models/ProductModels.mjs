export class ProductsModel {
  constructor(id, title, price, categories, stock, img) {
    this.id = Number(id);
    this.title = title;
    this.price = Number(price);
    this.categories = categories;
    this.stock = Number(stock);
    this.img = img;
  }
}

export class SingleProductModel extends ProductsModel {
  constructor(id, title, price, categories, stock, description, img) {
    super(id, title, price, categories, stock, img);

    this.description = description;
  }
}
