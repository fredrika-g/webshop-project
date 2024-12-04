import { useAppDispatch } from '../../Redux/configureStore';
import { getCart } from '../../Utils/getData';
import { sendData } from '../../Utils/sendData';
import { ACTIONS } from '../../Utils/sendData';

import { ProductSummaryType } from '../../Models/ProductSummaryType';
import { Button } from './Button';
import { CartList } from './CartList';
import { useState } from 'react';

type CartDisplayProps = {
  productsInCart: ProductSummaryType[];
};

export const CartDisplay = ({ productsInCart }: CartDisplayProps) => {
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState<string>('');

  const handleClick = async () => {
    await sendData(ACTIONS.CONFIRM);

    setMessage('Order bekräftad! Tack för din beställning!');

    setTimeout(() => {
      setMessage('');
      dispatch(getCart());
    }, 3000);
  };
  return (
    <section className='cartDisplay' data-testid='cart-display'>
      <CartList productsInCart={productsInCart} />

      <Button
        content={'Beställ'}
        navigate={false}
        classes={'btn btn-confirm'}
        to={''}
        clickHandler={handleClick}
      />

      {message && <p className='confirmation'>{message}</p>}
    </section>
  );
};
