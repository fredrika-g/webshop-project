import axios from 'axios';

const productUrl = 'http://localhost:5000/products/';
const cartUrl = 'http://localhost:5000/cart/';

export const countDownStock = async (id: number, currentStock: number) => {
  try {
    const result = await axios.get(`${productUrl}${id}/${currentStock}`);

    if (result.status === 200) {
      return true;
    } else {
      console.log('Something went wrong in: /products');
      return false;
    }
  } catch (error) {
    console.log('caught error:', error);
  }
};

export const addToCart = async (id: number) => {
  try {
    const result = await axios.get(`${cartUrl}add/${id}`);

    if (result.status === 200) {
      return true;
    } else {
      console.log('Something went wrong in /cart/add');
      return false;
    }
  } catch (error) {
    console.log('caught error:', error);
  }
};
