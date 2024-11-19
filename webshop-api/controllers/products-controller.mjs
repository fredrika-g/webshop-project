import { fetchData } from '../utilities/httpClient.mjs';
import { ProductsModel, SingleProductModel } from '../models/ProductModels.mjs';

const catToImg = {
  pyssel: 'christmashobby.jpg',
  bakning: 'christmasbaking.jpg',
  kläder: 'christmasclothing.jpg',
  dekoration: 'christmasdecor.jpg',
  belysning: 'christmaslights.jpg',
};

export const listProducts = async (req, res) => {
  try {
    const result = await fetchData('products');
    const products = [];

    // projecting data
    result.map((product) => {
      const img = product.categories.find((cat) => catToImg[cat.toLowerCase()]);

      const imgSrc = img ? catToImg[img] : null;

      products.push(
        new ProductsModel(
          product.id,
          product.title,
          product.price,
          product.categories,
          product.stock,
          imgSrc
        )
      );
    });

    res.status(200).json({ success: true, result: products });
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
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};
