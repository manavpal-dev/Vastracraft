// Controllers is used for writing the actual code.
// ### Frontend (React) → API Route (Express) → Controller (Logic) → Database (MongoDB) ##

import Order from "../models/Order.js";

//@route GET /api/orders/my-orders
//@desc Get logged-in user's orders
//@access Private
export const myOrder = async (req, res) => {
  try {
    // Find orders for the authenticatied user
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    }); // sort by most recent orders

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route GET /api/orders/:id
// @desc Get order details by Id
// @access Private
export const orderDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Return the full order details
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"});
  }
};
