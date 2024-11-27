import { ProductSummaryType } from '../../Models/ProductSummaryType';
import { placeOrder } from '../../Utils/sendData';
import { Button } from './Button';
import { CartList } from './CartList';

type CartDisplayProps = {
  productsInCart: ProductSummaryType[];
};

export const CartDisplay = ({ productsInCart }: CartDisplayProps) => {
  const handleClick = async () => {
    await placeOrder();
  };
  return (
    <section className='cartDisplay'>
      <CartList productsInCart={productsInCart} />

      <Button
        content={'Beställ'}
        navigate={false}
        classes={'btn btn-confirm'}
        to={''}
        clickHandler={handleClick}
      />
    </section>
  );
};
