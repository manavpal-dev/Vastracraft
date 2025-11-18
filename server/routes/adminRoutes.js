import express from "express"
import { admin, protect } from "../middleware/authMiddleware.js";
import { adminUser } from "../controllers/adminController.js";

const adminRouter = express.Router();

// controller api

// @route GET /api/admin/users
// @desc Get all users (Admin Only)
// @access Private/Admin
adminRouter.get("/",protect,admin,adminUser);

export default adminRouter;