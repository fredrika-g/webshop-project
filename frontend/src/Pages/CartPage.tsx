import { MainLayout } from '../Layouts/MainLayout';
import { PageHeading } from '../Components/UI/PageHeading';

export const CartPage = () => {
  return (
    <>
      <MainLayout>
        <PageHeading content={'Varukorg'} size={'md'} page={'cart'} />
        <div>CartPage</div>
      </MainLayout>
    </>
  );
};
