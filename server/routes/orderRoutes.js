import express from "express"
import { protect } from "../middleware/authMiddleware.js";
import { myOrder, orderDetails } from "../controllers/orderController.js";

const orderRouter = express.Router();

//@route GET /api/orders/my-orders
//@desc Get logged-in user's orders
//@access Private
orderRouter.get("/my-orders",protect, myOrder);

// @route GET /api/orders/:id
// @desc Get order details by Id
// @access Private
orderRouter.get("/:id",protect,orderDetails);

export default orderRouter;
