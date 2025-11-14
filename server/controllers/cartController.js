// Controllers is used for writing the actual code.
// ### Frontend (React) → API Route (Express) → Controller (Logic) → Database (MongoDB) ##

import Cart from "../models/Cart";
import Product from "../models/Product";
import User from "../models/User";

// helper function to get a cart by userId or guest id
const getCart = async (userId, guestId) =>{
    if(userId){
        return await Cart.findOne({user: userId});
    }else if(guestId){
        return await Cart.findOne({guestId});
    }
    return null;
}

// @route POST /api/cart
// @desc Add a product to the cart for a gues or logged in user
// @access Public
export const addProduct = async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {

    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ message: "Product not found" });

    //Determine if the user is logged in or gues
    let cart = await getCart(userId,guestId);

    //If the cart exists, update it 
    if(cart){
        const productIndex = cart.products.findIndex((p)=>
        p.productId.toString() === product && p.size === size && p.color === color
        );
    }

  } catch (error) {}
};
