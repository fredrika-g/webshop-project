import { useTypedSelector } from '../Redux/configureStore';
import { useAppDispatch } from '../Redux/configureStore';
import { getCart } from '../Utils/getData';

import { useEffect } from 'react';

import { MainLayout } from '../Layouts/MainLayout';
import { PageHeading } from '../Components/UI/PageHeading';
import { CartDisplay } from '../Components/UI/CartDisplay';

export const CartPage = () => {
  // const [cart, setCart] = useState<IProduct[]>([]);
  const dispatch = useAppDispatch();
  const cart = useTypedSelector((store) => store.cart.cart);

  // retrieving the shopping cart
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <>
      <MainLayout>
        <PageHeading content={'Varukorg'} size={'md'} page={'cart'} />
        {cart && cart.length > 0 && <CartDisplay productsInCart={cart} />}
      </MainLayout>
    </>
  );
};
