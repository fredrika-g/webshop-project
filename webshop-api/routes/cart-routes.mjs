import express from 'express';
import { getCart, addToCart } from '../controllers/products-controller.mjs';

const router = express.Router();

// routes
router.route('/').get(getCart);
router.route('/add/:id').get(addToCart);

export default router;