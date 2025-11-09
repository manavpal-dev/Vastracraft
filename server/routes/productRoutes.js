import express from 'express';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';

const productRouter = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin
productRouter.post("/",protect,);

export default productRouter;