import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  addNewUser,
  adminUser,
  deleteUser,
  updateUser,
} from "../controllers/adminController.js";

const adminRouter = express.Router();

// controller api

// @route GET /api/admin/users
// @desc Get all users (Admin Only)
// @access Private/Admin
adminRouter.get("/", protect, admin, adminUser);

// @route POST /api/admin/users
// @desc Add a new user (admin only)
// @access Private/Admin
adminRouter.post("/", protect, admin, addNewUser);

// @route PUT /api/admin/users/:id
// @desc Update user info (admin only) -- Name, email and role
// @access Private/admin
adminRouter.put("/:id", protect, admin, updateUser);

// @route DELETE /api/admin/users/:id
// @desc Delete a user
// @access Private/Admin
adminRouter.delete("/:id", protect, admin, deleteUser);

export default adminRouter;
