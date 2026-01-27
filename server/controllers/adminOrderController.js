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
    const order = await Order.findById(req.params.id);
    // console.log("checking orders details in admin : ", order);
    if (order) {
      order.status = req.body.status || order.status;
      order.isDelivered =
        req.body.status === "Delivered" ? true : order.isDelivered;
      order.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : order.deliveredAt;

      const updateOrder = await order.save();
      res.json(updateOrder);
    } else {
      res.status(404).json({ message: "Product not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
// @route DELETE /api/admin/orders/:id
// @desc Delete an order
// @access Private/Admin
export const deleteOrder = async (req,res) => {
  try {
    const order = await Order.findById(req.params.id);

    if(order){
      await order.deleteOne();
      res.json({message: "Order removed Sucessfully"});
    }
    res.status(404).json({message:"Order not found"});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Server Error"});
  }
}