import { Image } from './Image';

type CardHeaderProps = {
  imgSrc: string;
  productTitle: string;
};
export const CardHeader = ({ imgSrc, productTitle }: CardHeaderProps) => {
  return (
    <div className='cardHeader'>
      <Image src={`../src/assets/images/${imgSrc}`} altText={productTitle} />
      <h2>{productTitle}</h2>
    </div>
  );
};
