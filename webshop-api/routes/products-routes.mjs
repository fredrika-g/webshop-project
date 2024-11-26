import express from 'express';
import {
  listProducts,
  findProduct,
  updateProduct,
} from '../controllers/webshop-controller.mjs';

const router = express.Router();

// routes
router.route('/').get(listProducts);
router.route('/:id').get(findProduct);
router.route('/:id/:stock').get(updateProduct);

export default router;
