import { IProduct } from '../../Models/IProduct';

import { PageHeading } from './PageHeading';
import { Image } from './Image';
import { ProductInfo } from './ProductInfo';

export const ItemDisplay = ({ item }: { item: IProduct }) => {
  return (
    <section className='itemDisplay'>
      <PageHeading content={item.title} size={'md'} page={'singleProduct'} />
      <ProductInfo item={item} />
      <Image src={`../src/assets/images/${item.img}`} altText={item.title} />
    </section>
  );
};
