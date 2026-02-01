import Order from "../models/Order.js";

// @route GET /api/admin/orders
// @desc Get all order (Admin Only)
// @access Private/Admin

export const adminOrder = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route PUT /api/admin/orders/:id
// @desc Update order status
// @access Private/Admin
export const updateAdminOrder = async (req, res) => {
  try {
    const allowedStatus = ["Processing", "Shipped", "Delivered", "Cancelled"];

    if (!allowedStatus.includes(req.body.status)) {
      return res.status(400).json({ message: "Invalid order status" });
    }

    const order = await Order.findById(req.params.id).populate("user", "name");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = req.body.status;
    order.isDelivered = req.body.status === "Delivered";
    order.deliveredAt = req.body.status === "Delivered" ? Date.now() : null;

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route DELETE /api/admin/orders/:id
// @desc Delete an order
// @access Private/Admin
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      await order.deleteOne();
      return res.json({ message: "Order removed successfully" });
    }
    res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
