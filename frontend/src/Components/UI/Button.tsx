import { NavLink } from 'react-router-dom';

import { ReactNode } from 'react';

type ButtonProps = {
  content: string | ReactNode;
  navigate: boolean;
  id: number;
};

export const Button = ({ content, navigate, id }: ButtonProps) => {
  if (!navigate) {
    return <button className='btn'>{content}</button>;
  } else {
    return (
      <NavLink className='btn' to={`/product/${id}`}>
        {content}
      </NavLink>
    );
  }
};
