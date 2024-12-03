import { getCart } from '../../Utils/getData';
import { useAppDispatch } from '../../Redux/configureStore';

import { ProductSummaryType } from '../../Models/ProductSummaryType';
import { sendData } from '../../Utils/sendData';

import { Button } from './Button';

type CartItemProps = {
  item: ProductSummaryType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    // delete item
    await sendData('delete', item.product.id);

    dispatch(getCart());
  };
  return (
    <li>
      <strong>{item.amount}</strong> <span>x</span> {item.product.title}{' '}
      <Button
        content={<i className='fa-solid fa-trash'></i>}
        navigate={false}
        classes={'btn btn-delete'}
        to={''}
        clickHandler={handleDelete}
      />
    </li>
  );
};
