import axios from 'axios';

const productUrl = 'http://localhost:5000/products/';
const cartUrl = 'http://localhost:5000/cart/';

export const getProducts = async () => {
  try {
    const result = await axios.get(productUrl);

    if (result.status === 200) {
      const products = result.data.result;
      return products;
    } else {
      console.log('Something went wrong in: /products');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAProduct = async (productId: number) => {
  try {
    const result = await axios.get(`${productUrl}${productId}`);

    if (result.status === 200) {
      const product = result.data.result;

      return product;
    } else {
      console.log(`Something went wrong in /products/${productId}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async () => {
  try {
    const response = await axios.get(cartUrl);

    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
