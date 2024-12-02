import { NavLink } from 'react-router-dom';

import { IProduct } from '../../Models/IProduct';

import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import React from 'react';
import { MainPage } from '../../Pages/MainPage';

type CardProps = {
  product: IProduct;
};

export const Card = ({ product }: CardProps) => {
  return (
    <section className='card'>
      <NavLink to={`/product/${product.id}`}>
        <CardHeader imgSrc={product.img} productTitle={product.title} />
      </NavLink>
      <CardFooter product={product} />
    </section>
  );
};
