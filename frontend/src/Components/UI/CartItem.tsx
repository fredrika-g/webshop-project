import { ProductSummaryType } from '../../Models/ProductSummaryType';

export const CartItem = ({ item }: { item: ProductSummaryType }) => {
  return (
    <li>
      <strong>{item.amount}</strong> <span>x</span> {item.product.title}
    </li>
  );
};
