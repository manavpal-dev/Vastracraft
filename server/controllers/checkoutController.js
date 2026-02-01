// Controllers is used for writing the actual code.
// ### Frontend (React) → API Route (Express) → Controller (Logic) → Database (MongoDB) ##

import Cart from "../models/Cart.js";
import Checkout from "../models/Checkout.js";
import Order from "../models/Order.js";

// @route POST /api/checkout
// @desc Create a new checkout session
// @access Private
export const checkoutPage = async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod, totalPrice } =
    req.body;

  if (!checkoutItems || checkoutItems.length === 0) {
    return res.status(404).json({ message: "No items in checkout" });
  }
  try {
    // Create a new checkout session
    const newCheckout = await Checkout.create({
      user: req.user._id,
      checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "Pending",
      isPaid: false,
    });
    console.log(`Checkout created for user: ${req.user._id}`);
    res.status(201).json(newCheckout);
  } catch (error) {
    console.error("Error Creating checkout session: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route PUT /api/checkout/:id/pay
// @desc Update checkout to mark as paid after successful payment
// @access Private
export const updateCheckout = async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;

  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (paymentStatus === "paid") {
      checkout.isPaid = true;
      checkout.paymentStatus = paymentStatus;
      checkout.paymentDetails = paymentDetails;
      checkout.paidAt = Date.now();

      await checkout.save();

      res.status(200).json(checkout);
    } else {
      res.status(400).json({ message: "Invalid Payment Status" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route POST /api/checkout/:id/finalize
// @desc Finalize checkout and convert to an order after payment confirmation.
// @access Private
export const checkoutFinalize = async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    // 🔥 Prevent duplicate orders
    const existingOrder = await Order.findOne({ checkout: checkout._id });
    if (existingOrder) {
      return res.status(200).json(existingOrder);
    }

    if (checkout.isPaid && !checkout.isFinalized) {
      const finalOrder = await Order.create({
        checkout: checkout._id, // link checkout
        user: checkout.user,
        orderItems: checkout.checkoutItems, // ✅ FIXED
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: checkout.totalPrice,
        isPaid: true,
        paidAt: checkout.paidAt,
        isDelivered: false,
        paymentStatus: "paid",
        paymentDetails: checkout.paymentDetails,
      });

      checkout.isFinalized = true;
      checkout.finalizedAt = Date.now();
      await checkout.save();

      await Cart.findOneAndDelete({ user: checkout.user });

      res.status(201).json(finalOrder);
    } else {
      res.status(400).json({ message: "Checkout not paid or already finalized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
