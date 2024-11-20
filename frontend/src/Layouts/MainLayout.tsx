import { ReactNode } from 'react';
import { Header } from '../Components/UI/Header';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
