import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MainPage } from './Pages/MainPage.tsx';
import { ProductPage } from './Pages/ProductPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='product/:id' element={<ProductPage />} />
      </Routes>

      <App />
    </Router>
  </StrictMode>
);
