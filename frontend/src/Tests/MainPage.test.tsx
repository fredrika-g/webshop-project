import '@testing-library/jest-dom';
import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../Mocks/server';

import { IProduct } from '../Models/IProduct';

// component to test...
import { MainPage } from '../Pages/MainPage';

beforeEach(() =>
  render(
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  )
);

describe('Main Page Component', () => {
  it('should display the text Våra Produkter', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(/våra produkter/i);
  });

  it('should display products from API', async () => {
    await waitFor(() => {
      expect(screen.getByText('Julgran i plast, 180 cm')).toBeInTheDocument();
      expect(screen.getByText('Adventsljusstake i trä')).toBeInTheDocument();
    });
  });

  it('should show products that match the data defined in msw handler', async () => {
    let productTitles: IProduct[] = [];
    server.events.on('response:mocked', async ({ response }) => {
      const payload = await response.json();

      productTitles = payload.result.map((product: IProduct) => product.title);
    });

    await waitFor(() =>
      expect(productTitles).toEqual([
        'Julgran i plast, 180 cm',
        'Adventsljusstake i trä',
      ])
    );
  });
});
