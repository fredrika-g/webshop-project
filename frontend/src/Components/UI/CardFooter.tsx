import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';
import { IProduct } from '../../Models/IProduct';
import { sendData } from '../../Utils/sendData';
import { ACTIONS } from '../../Utils/sendData';

type CardFooterProps = {
  product: IProduct;
};

export const CardFooter = ({ product }: CardFooterProps) => {
  const handleClick = async () => {
    // add item to cart
    await sendData(ACTIONS.ADD, product.id);
  };

  return (
    <div className='cardFooter'>
      <p className='price'>{product.price} sek</p>

      <ButtonGroup>
        <Button
          content={<i className='fa-solid fa-cart-shopping'></i>}
          navigate={false}
          classes='default'
          to={''}
          clickHandler={handleClick}
        />
        <Button
          content='Mer Info'
          navigate={true}
          classes='default'
          to={`/product/${product.id}`}
        />
      </ButtonGroup>
    </div>
  );
};
