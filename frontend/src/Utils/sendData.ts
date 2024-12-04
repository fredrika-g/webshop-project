import axios from 'axios';

const cartUrl = 'http://localhost:5000/cart/';

export const ACTIONS = {
  ADD: 'add',
  CONFIRM: 'confirm',
  DELETE: 'delete',
};

export const sendData = async (action: string, productId?: number) => {
  let url: string = '';

  // setting the url
  if (action === ACTIONS.ADD) {
    url = `${cartUrl}add/${productId}`;
  }

  if (action === ACTIONS.CONFIRM) {
    url = `${cartUrl}confirm`;
  }

  if (action === ACTIONS.DELETE) {
    url = `${cartUrl}delete/${productId}`;
  }

  // executing the request
  try {
    const result = await axios.get(url);

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
