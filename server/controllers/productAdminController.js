import Product from '../models/Product.js';


// @route GET /api/admin/products
// @desc Get all products (Admin Only)
// @access Private/Admin
export const adminProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}