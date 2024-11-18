import express from 'express';
import {
  listProducts,
  findProduct,
} from '../controllers/products-controller.mjs';

const router = express.Router();

// routes
router.route('/').get(listProducts);
router.route('/:id').get(findProduct);

export default router;
