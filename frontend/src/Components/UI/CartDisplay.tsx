import { IProduct } from '../../Models/IProduct';
import { placeOrder } from '../../Utils/sendData';
import { Button } from './Button';
import { CartList } from './CartList';

type CartDisplayProps = {
  productsInCart: IProduct[];
};

export const CartDisplay = ({ productsInCart }: CartDisplayProps) => {
  const handleClick = async () => {
    await placeOrder();
  };
  return (
    <section className='cartDisplay'>
      {/* list of products */}
      <CartList productsInCart={productsInCart} />

      {/* buy button */}
      <Button
        content={'Beställ'}
        navigate={false}
        classes={'btn btn-confirm'}
        to={''}
      />
    </section>
  );
};
