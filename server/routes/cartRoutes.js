import express from 'express'
import { protect } from '../middleware/authMiddleware.js';
import {addProductInCart, deleteProductCart, loggedInUserCart, updateProduct } from '../controllers/cartController.js';

const cartRouter = express.Router();


// @route POST /api/cart
// @desc Add a product to the cart for a gues or logged in user
// @access Public
cartRouter.post("/",addProductInCart);

// @route PUT /api/cart
// @desc Update product quantity in the cart for a guest or logged-in user
// @access Public
cartRouter.put("/",updateProduct);

// @route DELETE /api/cart
// @desc Remove a product from the Cart
// @desc Public
cartRouter.delete("/",deleteProductCart);

// @route GET /api/cart
// @desc Get logged-in user's or guest user's cart
// @access Public
cartRouter.get("/",loggedInUserCart);

export default cartRouter;