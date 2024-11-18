import { fetchData } from '../utilities/httpClient.mjs';
import { ProductsModel, SingleProductModel } from '../models/ProductModels.mjs';

export const listProducts = async (req, res) => {
  try {
    const result = await fetchData('products');
    const products = [];

    // projecting data
    result.map((product) => {
      products.push(
        new ProductsModel(
          product.id,
          product.title,
          product.price,
          result.categories,
          result.stock
        )
      );
    });

    res.status(200).json({ success: true, result: products });
    return products;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

export const findProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await fetchData(`products/${id}`);
    const product = new SingleProductModel(
      result.id,
      result.title,
      result.price,
      result.categories,
      result.stock,
      result.description
    );

    res.status(200).json({ success: true, result: product });
    return product;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};
