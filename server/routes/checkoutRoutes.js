import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { checkoutFinalize, checkoutPage, updateCheckout } from "../controllers/checkoutController.js";

const checkoutRouter = express.Router();

// @route POST /api/checkout
// @desc Create a new checkout session
// @access Private
checkoutRouter.post("/",protect, checkoutPage);

// @route PUT /api/checkout/:id/pay
// @desc Update checkout to mark as paid after successful payment
// @access Private
checkoutRouter.put("/:id/pay", protect,updateCheckout);

// @route POST /api/checkout/:id/finalize
// @desc Finalize checkout and convert to an order after payment confirmation.
// @access Private
checkoutRouter.post("/:id/finalize",protect, checkoutFinalize);

export default checkoutRouter;
