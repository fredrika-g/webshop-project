import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

import { Button } from './Button';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <NavLink to={'/'}>
          <div className={styles.pageTitle}>Julshopen</div>
          <small>est. 2024</small>
        </NavLink>
        <p>Allt inför jul och vinter</p>
      </div>
      <Button
        content={<i className='fa-solid fa-cart-shopping'></i>}
        navigate={true}
        classes={styles.cartBtn}
        to={`/cart`}
      />
    </header>
  );
};
