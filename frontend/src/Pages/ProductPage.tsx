import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IProduct } from '../Models/IProduct';
import { MainLayout } from '../Layouts/MainLayout';

export const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>();

  const { id } = useParams();

  //   get product info from backend with id
  return (
    <MainLayout>
      <div>ProductPage</div>
    </MainLayout>
  );
};
