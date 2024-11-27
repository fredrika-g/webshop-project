import { SetStateAction } from 'react';
import { ProductSummaryType } from '../../Models/ProductSummaryType';
import { deleteItemFromCart } from '../../Utils/sendData';

import { Button } from './Button';

type CartItemProps = {
  item: ProductSummaryType;
  stateSetter: React.Dispatch<SetStateAction<boolean>>;
};

export const CartItem = ({ item, stateSetter }: CartItemProps) => {
  const handleDelete = async () => {
    // delete item
    await deleteItemFromCart(item.product.id);

    stateSetter(true);
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
