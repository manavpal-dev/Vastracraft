import express from "express";
import { userLogin, userProfile, userRegister } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

// @route POST /api/users/register
// @desc Register a new user
// @access Public
userRouter.post("/register", userRegister);

// @route Post /api/users/login
// @desc Authenticate user
// @access Public
userRouter.post("/login",userLogin);

// @route GET /api/users/profile
// @desc Get logged-in user's profile (Protected Route)
// @access Private
userRouter.get("/profile",protect,userProfile);

export default userRouter;