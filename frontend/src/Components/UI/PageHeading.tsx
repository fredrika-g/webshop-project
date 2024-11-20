type PageHeadingProps = {
  content: string;
  size: string;
  page: string;
};

export const PageHeading = ({ content, size, page }: PageHeadingProps) => {
  return <h1 className={`heading-${size} ${page}`}>{content}</h1>;
};
