import express from 'express';
import { admin, protect } from '../middleware/authMiddleware.js';
import { deleteProduct, fetchProducts, productCreate, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin
productRouter.post("/",protect, admin, productCreate);

// @route PUT /api/products/:id
// @desc Update an existing product ID
// @access Private/Admin
productRouter.put("/:id",protect, admin,updateProduct);

// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin
productRouter.delete("/:id",protect,admin, deleteProduct);

// @route GET /api/products
// @desc Get all products with optional query filters
// @access Public
productRouter.get('/',fetchProducts);

export default productRouter;