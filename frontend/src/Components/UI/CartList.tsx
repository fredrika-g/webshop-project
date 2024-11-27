import { useEffect, useState } from 'react';
import { IProduct } from '../../Models/IProduct';
import { ProductSummaryType } from '../../Models/ProductSummaryType';

import { CartItem } from './CartItem';

type CartListProps = {
  productsInCart: IProduct[];
};

export const CartList = ({ productsInCart }: CartListProps) => {
  const [productSummary, setProductSummary] = useState<ProductSummaryType[]>(
    []
  );
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  // on first mount
  useEffect(() => {
    productMapper();
  }, []);

  //   on state change
  useEffect(() => {
    productMapper();
  }, [productsInCart]);

  useEffect(() => {
    productMapper();
    console.log('hasChanged', hasChanged);
  }, [hasChanged]);

  const productMapper = () => {
    const productMap = new Map<number, { product: IProduct; amount: number }>();
    // get unique values in cart + retrieve how many of each product there are
    productsInCart.forEach((product) => {
      if (productMap.has(product.id)) {
        productMap.get(product.id)!.amount++;
      } else {
        productMap.set(product.id, { product, amount: 1 });
      }
    });

    // convert Map to array and set state
    setProductSummary(Array.from(productMap.values()));
  };

  return (
    <ul>
      {productSummary &&
        productSummary.map((item) => {
          return (
            <CartItem
              key={item.product.id}
              item={item}
              stateSetter={setHasChanged}
            />
          );
        })}
    </ul>
  );
};
