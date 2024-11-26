import { NavLink } from 'react-router-dom';

import { ReactNode } from 'react';

type ButtonProps = {
  content: string | ReactNode;
  navigate: boolean;
  classes: string;
  to: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  content,
  navigate,
  classes,
  to,
  clickHandler,
}: ButtonProps) => {
  if (!navigate) {
    return (
      <button className={`btn ${classes}`} onClick={clickHandler}>
        {content}
      </button>
    );
  } else {
    return (
      <NavLink className={`btn ${classes}`} to={to}>
        {content}
      </NavLink>
    );
  }
};
