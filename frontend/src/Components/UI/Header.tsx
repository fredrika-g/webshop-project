import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <div className={styles.pageTitle}>Julshopen</div>
          <small>est. 2024</small>
        </div>
        <p>Allt inför jul och vinter</p>
      </div>
    </header>
  );
};
