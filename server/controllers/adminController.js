import User from "../models/User.js";


// @route GET /api/admin/users
// @desc Get all users (Admin Only)
// @access Private/Admin
export const adminUser = async (req,res) =>{
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
    console.error(error);
    res.status(500).json({message: "Server Error"});
    }
}