import { NavLink } from 'react-router-dom';

import { ReactNode } from 'react';

type ButtonProps = {
  content: string | ReactNode;
  navigate: boolean;
  classes: string;
  to: string;
};

export const Button = ({ content, navigate, classes, to }: ButtonProps) => {
  if (!navigate) {
    return <button className={`btn ${classes}`}>{content}</button>;
  } else {
    return (
      <NavLink className={`btn ${classes}`} to={to}>
        {content}
      </NavLink>
    );
  }
};
