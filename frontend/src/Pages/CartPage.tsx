import { useSelector } from 'react-redux';

import { MainLayout } from '../Layouts/MainLayout';
import { PageHeading } from '../Components/UI/PageHeading';
import { useEffect, useState } from 'react';
import { getCart } from '../Utils/getData';
import { IProduct } from '../Models/IProduct';
import { CartDisplay } from '../Components/UI/CartDisplay';

export const CartPage = () => {
  const [cart, setCart] = useState<IProduct[]>([]);

  // retrieving the shopping cart
  useEffect(() => {
    const fetchData = async () => {
      setCart(await getCart());
    };

    fetchData();
  }, []);

  return (
    <>
      <MainLayout>
        <PageHeading content={'Varukorg'} size={'md'} page={'cart'} />
        {cart && cart.length > 0 && <CartDisplay productsInCart={cart} />}
      </MainLayout>
    </>
  );
};
