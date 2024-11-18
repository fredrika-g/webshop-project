import { ReactNode } from 'react';
import { Header } from '../Components/UI/Header';
import { Footer } from '../Components/UI/Footer';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
