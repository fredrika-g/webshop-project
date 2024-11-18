import { getProducts } from '../Utils/getData';
import { useEffect, useState } from 'react';

import { IProduct } from '../Models/IProduct';

import { MainLayout } from '../Layouts/MainLayout';

export const MainPage = () => {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProducts());
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <div>
        {products &&
          products.map((product) => {
            return <h3 key={product.id}>{product.title}</h3>;
          })}
      </div>
    </MainLayout>
  );
};
