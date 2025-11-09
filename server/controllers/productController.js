// Controllers is used for writing the actual code.
// ### Frontend (React) → API Route (Express) → Controller (Logic) → Database (MongoDB) ##

// @route POST /api/users/register
// @desc Register a new user
// @access Public

import productRouter from "../routes/productRoutes.js";
import Product from "../models/Product.js";

export const product = async (req, res) => {
  try {
    const { name, description, price, discountPrice, countInStock } = req.body;
  } catch (error) {}
};
