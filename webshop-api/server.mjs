import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import products from './routes/products-routes.mjs';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5010;
const DB_PORT = process.env.DB_PORT;
const BASE_URL = process.env.BASE_URL;

// middleware
app.use(cors());
app.use(express.json());
app.use('/products', products);

// starting server...
app.listen(PORT, () => {
  console.log(`Servern är startad och lyssnar på port ${PORT}`);
});
