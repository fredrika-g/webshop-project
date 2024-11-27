import express from 'express';
import {
  getCart,
  addToCart,
  placeOrder,
  deleteFromCart,
} from '../controllers/webshop-controller.mjs';

const router = express.Router();

// routes
router.route('/').get(getCart);
router.route('/add/:id').get(addToCart);
router.route('/confirm').get(placeOrder);
router.route('/delete/:id').get(deleteFromCart);

export default router;
