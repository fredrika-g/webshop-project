import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAProduct } from '../Utils/getData';

import { IProduct } from '../Models/IProduct';
import { MainLayout } from '../Layouts/MainLayout';

export const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>();

  // extract the id from location
  const { id } = useParams();

  //   get product info from backend with id

  useEffect(() => {
    const fetchData = async () => {
      setProduct(await getAProduct(Number(id)));
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <div>ProductPage</div>
      <div>{product && product.title}</div>
    </MainLayout>
  );
};
