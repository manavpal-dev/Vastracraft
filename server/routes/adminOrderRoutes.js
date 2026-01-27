import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  adminOrder,
  deleteOrder,
  updateAdminOrder,
} from "../controllers/adminOrderController.js";

const adminOrderRouter = express.Router();

// @route GET /api/admin/orders
// @desc Get all order (Admin Only)
// @access Private/Admin

adminOrderRouter.get("/", protect, admin, adminOrder);

// @route PUT /api/admin/orders/:id
// @desc Update order status
// @access Private/Admin
adminOrderRouter.put("/:id", protect, admin, updateAdminOrder);

// @route DELETE /api/admin/orders/:id
// @desc Delete an order
// @access Private/Admin
adminOrderRouter.delete("/:id",protect,admin, deleteOrder);


export default adminOrderRouter;