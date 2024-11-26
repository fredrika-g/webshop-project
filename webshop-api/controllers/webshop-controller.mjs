import { fetchData } from '../utilities/httpClient.mjs';
import { ProductsModel, SingleProductModel } from '../models/ProductModels.mjs';

// assign image to product
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
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

export const findProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await fetchData(`products/${id}`);

    const img = result.categories.find((cat) => catToImg[cat.toLowerCase()]);

    const imgSrc = img ? catToImg[img] : null;
    const product = new SingleProductModel(
      result.id,
      result.title,
      result.price,
      result.categories,
      result.stock,
      result.description,
      imgSrc
    );

    res.status(200).json({ success: true, result: product });
    return result;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const currentStock = req.params.stock;

  let currentProduct;

  // 1. get current product

  currentProduct = await fetchData(`products/${id}`);

  // 2. update product stock
  try {
    const updatedProduct = { ...currentProduct, stock: currentStock - 1 };

    const result = await fetchData(`products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });

    res.status(200).json({ success: true, result });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

// cart actions
export const getCart = async (req, res) => {
  try {
    const result = await fetchData('cart');

    res.status(200).json({ success: true, result });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

// runs when: 5000/cart/add/:id
export const addToCart = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await fetchData(`products/${productId}`);

    const result = await fetchData('cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    res.status(200).json({ success: true, result: product });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};
