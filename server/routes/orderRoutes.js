import express from "express"
import { protect } from "../middleware/authMiddleware.js";
import { myOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

//@route GET /api/orders/my-orders
//@desc Get logged-in user's orders
//@access Private
orderRouter.get("/api/orders/",protect, myOrder);

export default orderRouter;
