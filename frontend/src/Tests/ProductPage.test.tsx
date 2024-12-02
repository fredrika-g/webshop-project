import '@testing-library/jest-dom';
import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../Mocks/server';

// Component to test...
import { ProductPage } from '../Pages/ProductPage';
import { IProduct } from '../Models/IProduct';

beforeEach(() => {
  render(
    <MemoryRouter>
      <ProductPage />
    </MemoryRouter>
  );
});

describe('Product Page Component', () => {
  describe('fetch Product', () => {
    it('should show products that match the data defined in msw handler', async () => {
      let product: IProduct;

      server.events.on('response:mocked', async ({ request, response }) => {
        const payload = await response.json();
        product = payload.result;
      });

      await waitFor(() =>
        expect(product.title).toEqual('Julgran i plast, 180 cm')
      );
    });
  });

  describe('displaying product info on page', () => {
    it('should have a not empty product title', async () => {
      await waitFor(async () => {
        const heading = await screen.findByRole('heading', {
          name: 'Julgran i plast, 180 cm',
        });
        expect(heading).toBeInTheDocument();
      });
    });
  });
});
