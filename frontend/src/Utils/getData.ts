import axios from 'axios';

const url = 'http://localhost:5000/products/';

export const getProducts = async () => {
  try {
    const result = await axios.get(url);

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
  console.log(`${url}${productId}`);
  try {
    const result = await axios.get(`${url}${productId}`);

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
