import express from 'express';
import  {protect, admin } from '../middleware/authMiddleware.js';
import { adminProducts } from '../controllers/productAdminController.js';


const productAdminRouter = express.Router();

// @route GET /api/admin/products
// @desc Get all products (Admin Only)
// @access Private/Admin
productAdminRouter.get('/', protect, admin, adminProducts);



export default productAdminRouter;