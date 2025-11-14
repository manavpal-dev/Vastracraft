import express from 'express';
import { admin, protect } from '../middleware/authMiddleware.js';
import {bestSellerProduct, deleteProduct, fetchProducts, newArrivalsProduct, productCreate, similarProductDetails, singleProductFetch, updateProduct } from '../controllers/productController.js';

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

// @route GET /api/products/best-seller
// @desc Retrieve the product with highest rating
// @access Public
productRouter.get('/best-seller',bestSellerProduct);

// @route GET /api/products/new-arrivals
// @desc Retrivers latest 8 products - Creation date
// @access Public
productRouter.get('/new-arrivals',newArrivalsProduct);

// @route GET /api/products/:id
// @desc Get a single product by ID
// @access public
productRouter.get('/:id', singleProductFetch);

// @route Get /api/products/similar/:id
// @desc Retrieve similar products based on the current product's gender and category
// @access Public
productRouter.get('/similar/:id',similarProductDetails);



export default productRouter;