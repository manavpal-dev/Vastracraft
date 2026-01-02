import express from 'express'
import {protect, admin} from "../middleware/authMiddleware.js";
import { adminOrder } from '../controllers/adminOrderController.js';

export const adminOrderRouter = express.Router();


// @route GET /api/admin/orders
// @desc Get all order (Admin Only)
// @access Private/Admin

adminOrderRouter.get("/", protect, admin, adminOrder);
