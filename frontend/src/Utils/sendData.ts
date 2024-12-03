import axios from 'axios';

const cartUrl = 'http://localhost:5000/cart/';

// export const addToCart = async (id: number) => {
//   try {
//     const result = await axios.get(`${cartUrl}add/${id}`);

//     if (result.status === 200) {
//       return true;
//     } else {
//       console.log('Something went wrong in /cart/add');
//       return false;
//     }
//   } catch (error) {
//     console.log('addToCart:', error);
//   }
// };

// export const placeOrder = async () => {
//   try {
//     const result = await axios.get(`${cartUrl}confirm`);

//     if (result.status === 200) {
//       return true;
//     } else {
//       console.log('Something went wrong in /cart/confirm');
//       return false;
//     }
//   } catch (error) {
//     console.log('placeOrder:', error);
//   }
// };

// delete from cart
// export const deleteItemFromCart = async (productId: number) => {
//   try {
//     const result = await axios.get(`${cartUrl}delete/${productId}`);

//     if (result.status === 200) {
//       return true;
//     } else {
//       console.log('Something went wrong in /cart/delete');
//       return false;
//     }
//   } catch (error) {
//     console.log('deleteItemFromCart: ', error);
//   }
// };

export const sendData = async (action: string, productId?: number) => {
  let url: string;

  // setting the url
  if (action === 'add') {
    url = `${cartUrl}add/${productId}`;
  }

  if (action === 'confirm') {
    url = `${cartUrl}confirm`;
  }

  if (action === 'delete') {
    url = `${cartUrl}delete/${productId}`;
  }

  // executing the request
  try {
    const result = await axios.get(url!);

    if (result.status === 200) {
      return true;
    } else {
      console.log(`Something went wrong in /cart/${action}`);
      return false;
    }
  } catch (error) {
    console.log(`sendData / ${action}: `, error);
  }
};
