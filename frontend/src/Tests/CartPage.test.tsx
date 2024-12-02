import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { describe, it, beforeEach, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../Mocks/server';
import { http, HttpResponse } from 'msw';

// redux toolkit
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Redux/cartSlice';

// component to be tested...
import { CartPage } from '../Pages/CartPage';

beforeEach(() => {
  const store = configureStore({
    reducer: {
      cart: cartSlice,
    },
  });
  render(
    <MemoryRouter>
      <Provider store={store}>
        <CartPage />
      </Provider>
    </MemoryRouter>
  );
});

describe('Cart Page Component', () => {
  it('should have a heading with the text Varukorg', () => {
    const heading = screen.getByRole('heading', { name: 'Varukorg' });

    expect(heading).toBeInTheDocument();
  });

  it('should show CartDisplay if cart is not empty', async () => {
    server.use(
      http.get('http://localhost:5000/cart', () => {
        return HttpResponse.json({
          success: true,
          result: [
            {
              id: 1,
              title: 'Julgran i plast, 180 cm',
              price: 499,
            },
          ],
        });
      })
    );

    expect(await screen.findByTestId('cart-display')).toBeInTheDocument();
  });

  it('should not display CartDisplay if cart is empty', async () => {
    server.use(
      http.get('http://localhost:5000/cart', () => {
        return HttpResponse.json({
          success: true,
          result: [],
        });
      })
    );

    expect(screen.queryByTestId('cart-display')).toBeNull();
  });
});
