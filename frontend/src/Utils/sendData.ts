import axios from 'axios';

const url = 'http://localhost:5000/products/';

export const addToCart = async (id: number, currentStock: number) => {
  try {
    const result = await axios.get(`${url}${id}/${currentStock}`);

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
