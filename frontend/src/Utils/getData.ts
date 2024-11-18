import axios from 'axios';

const url = 'http://localhost:5000/products/';

export const getProducts = async () => {
  try {
    const result = await axios.get(url);

    if (result.status === 200) {
      const products = result.data.result;

      return products;
    } else {
      console.log('Error!');
    }
  } catch (error) {
    console.log(error);
  }
};
