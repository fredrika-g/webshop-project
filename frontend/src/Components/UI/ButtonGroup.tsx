import { ReactNode } from 'react';

type ButtonGroupProps = {
  children: ReactNode;
};

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <div className='btnGroup'>{children}</div>;
};
