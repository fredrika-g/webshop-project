import { IProduct } from '../../Models/IProduct';
import { sendData } from '../../Utils/sendData';
import { ACTIONS } from '../../Utils/sendData';
import { Button } from './Button';

export const ProductInfo = ({ item }: { item: IProduct }) => {
  const handleClick = async () => {
    // add item to cart
    await sendData(ACTIONS.ADD, item.id);
  };
  return (
    <>
      <div className='itemInfo'>
        <p>{item.description}</p>
        <small
          className={item.stock > 0 ? 'inStock' : 'outOfStock'}
        >{`${item.stock} i lager`}</small>
      </div>
      <div className='buy'>
        <p className='price'>{`${item.price} sek`}</p>
        <Button
          content={<i className='fa-solid fa-cart-shopping'></i>}
          navigate={false}
          classes={'default'}
          to={''}
          clickHandler={handleClick}
        />
      </div>
    </>
  );
};
