import { ReactNode } from 'react';
import styles from './GridList.module.css';

type GridListProps = {
  children: ReactNode;
};

export const GridList = ({ children }: GridListProps) => {
  return <section className={styles.grid}>{children}</section>;
};
