import { ProductSummaryType } from '../../Models/ProductSummaryType';

export const CartItem = ({ item }: { item: ProductSummaryType }) => {
  return (
    <li>
      {item.product.title} - {item.amount}
    </li>
  );
};
