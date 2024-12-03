import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCart } from '../Redux/cartSlice';
import { IProduct } from '../Models/IProduct';

const productUrl = 'http://localhost:5000/products/';
const cartUrl = 'http://localhost:5000/cart/';

export const getProductData = async (productId?: number) => {
  const url = productId ? `${productUrl}${productId}` : productUrl;
  try {
    const result = await axios.get(url);

    if (result.status === 200) {
      const productData = result.data.result;
      return productData;
    } else {
      console.log('Something went wrong in: /products');
    }
  } catch (error) {
    console.log(error);
  }
};

// redux toolkit / managing the cart
export const getCart = createAsyncThunk('cart', async (_, { dispatch }) => {
  const response = await axios.get(cartUrl);

  const productMap = new Map<number, { product: IProduct; amount: number }>();
  // get unique values in cart + retrieve how many of each product there are
  response.data.result.forEach((product: IProduct) => {
    if (productMap.has(product.id)) {
      productMap.get(product.id)!.amount++;
    } else {
      productMap.set(product.id, { product, amount: 1 });
    }
  });

  // convert Map to array and return it
  const cart = Array.from(productMap.values());

  // update cart in store
  dispatch(setCart(cart));
});
