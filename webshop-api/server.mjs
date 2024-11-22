import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';

import products from './routes/products-routes.mjs';
import cart from './routes/cart-routes.mjs';

const app = express();

const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use('/products', products);
app.use('/cart', cart);

// starting server...
app.listen(PORT, () => {
  console.log(`Servern är startad och lyssnar på port ${PORT}`);
});
