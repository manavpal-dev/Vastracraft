import Order from '../models/Order.js'

// @route GET /api/admin/orders
// @desc Get all order (Admin Only)
// @access Private/Admin

export const adminOrder = async(req,res)=>{
    try {
        const orders = await Order.find({}).populate("user", "name email");
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};