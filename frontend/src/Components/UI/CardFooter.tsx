import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';
import { IProduct } from '../../Models/IProduct';

type CardFooterProps = {
  product: IProduct;
};

export const CardFooter = ({ product }: CardFooterProps) => {
  return (
    <div className='cardFooter'>
      <p className='price'>{product.price} sek</p>

      <ButtonGroup>
        <Button
          content={<i className='fa-solid fa-cart-shopping'></i>}
          navigate={false}
          classes='default'
          to={''}
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
