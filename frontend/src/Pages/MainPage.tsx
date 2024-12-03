import { getProductData } from '../Utils/getData';
import { useEffect, useState } from 'react';

import { IProduct } from '../Models/IProduct';

import { MainLayout } from '../Layouts/MainLayout';
import { PageHeading } from '../Components/UI/PageHeading';

import { GridList } from '../Components/UI/GridList';
import { Card } from '../Components/UI/Card';

export const MainPage = () => {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProductData());
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <PageHeading content={'Våra Produkter'} size={'lg'} page={'products'} />
      <GridList>
        {products &&
          products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
      </GridList>
    </MainLayout>
  );
};
