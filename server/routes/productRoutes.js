import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { productCreate } from '../controllers/productController.js';

const productRouter = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin
productRouter.post("/",protect,productCreate);

export default productRouter;