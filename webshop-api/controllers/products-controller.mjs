import { fetchData } from '../utilities/httpClient.mjs';
import { ProductsModel } from '../models/ProductModels.mjs';

export const listProducts = async (req, res) => {
  try {
    const result = await fetchData('products');
    const products = [];

    // projecting data
    result.map((product) => {
      products.push(
        new ProductsModel(
          product.id,
          product.model,
          product.price,
          product.description,
          ['toys'],
          120
        )
      );
    });

    res.status(200).json({ success: true, result: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};
