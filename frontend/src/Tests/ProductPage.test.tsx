import '@testing-library/jest-dom';

import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { getProductData } from '../Utils/getData';

// Component to test...
import { act } from 'react';
import { ItemDisplay } from '../Components/UI/ItemDisplay';

beforeEach(async () => {
  const demoProduct = await getProductData(1);
  render(
    <MemoryRouter>
      <ItemDisplay item={demoProduct} />
    </MemoryRouter>
  );
});

describe('Product Page Component', () => {
  describe('fetch Product', () => {
    it('should show products that match the data defined in msw handler', async () => {
      await act(async () => {
        const response = await getProductData(1);
        expect(response.title).toEqual('Julgran i plast, 180 cm');
      });
    });

    // check if undefined
    it('fetch', async () => {
      await act(async () => {
        const response = await getProductData(1);
        expect(response).not.toBeUndefined();
      });
    });
  });

  describe('displaying product info on page', () => {
    it('should have a product title that is not an empty string', async () => {
      await waitFor(() => {
        const productTitle = screen.getByRole('heading', { level: 1 });
        expect(productTitle).toHaveTextContent('Julgran i plast, 180 cm');
      });
    });
  });
});
