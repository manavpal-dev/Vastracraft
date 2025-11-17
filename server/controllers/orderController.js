// Controllers is used for writing the actual code.
// ### Frontend (React) → API Route (Express) → Controller (Logic) → Database (MongoDB) ##

import Order from "../models/Order";

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
    res.status(500).json({message:"Server Error"});
  }
};


