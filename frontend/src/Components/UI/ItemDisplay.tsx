import { IProduct } from '../../Models/IProduct';

import { addToCart } from '../../Utils/sendData';

import { PageHeading } from './PageHeading';
import { Button } from './Button';
import { Image } from './Image';

export const ItemDisplay = ({ item }: { item: IProduct }) => {
  const handleClick = async () => {
    // add item to cart
    await addToCart(item.id);
  };
  return (
    <section className='itemDisplay'>
      <PageHeading content={item.title} size={'md'} page={'singleProduct'} />
      <div className='itemInfo'>
        <p>{item.description}</p>
        <small
          className={item.stock > 0 ? 'inStock' : 'outOfStock'}
        >{`${item.stock} i lager`}</small>
      </div>
      <div className='buy'>
        <p className='price'>{`${item.price} sek`}</p>
        <Button
          content={<i className='fa-solid fa-cart-shopping'></i>}
          navigate={false}
          classes={'default'}
          to={''}
          clickHandler={(e) => handleClick()}
        />
      </div>
      <Image src={`../src/assets/images/${item.img}`} altText={item.title} />
    </section>
  );
};
