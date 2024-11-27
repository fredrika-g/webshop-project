import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/configureStore.ts';

import { MainPage } from './Pages/MainPage.tsx';
import { ProductPage } from './Pages/ProductPage.tsx';
import { CartPage } from './Pages/CartPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='product/:id' element={<ProductPage />} />
          <Route path='cart/' element={<CartPage />} />
        </Routes>

        <App />
      </Router>
    </Provider>
  </StrictMode>
);
