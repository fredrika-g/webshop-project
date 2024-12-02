import { ProductSummaryType } from '../../Models/ProductSummaryType';

import { CartItem } from './CartItem';

type CartListProps = {
  productsInCart: ProductSummaryType[];
};

export const CartList = ({ productsInCart }: CartListProps) => {
  return (
    <ul>
      {productsInCart &&
        productsInCart.map((item) => {
          return <CartItem key={item.product.id} item={item} />;
        })}
    </ul>
  );
};
