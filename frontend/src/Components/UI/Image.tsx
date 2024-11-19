type ImageProps = {
  src: string;
  altText: string;
};

export const Image = ({ src, altText }: ImageProps) => {
  return <img className='img' src={src} alt={altText} />;
};
