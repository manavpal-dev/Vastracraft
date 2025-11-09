// Controllers is used for writing the actual code.
// ### Frontend (React) → API Route (Express) → Controller (Logic) → Database (MongoDB) ##

// @route POST /api/users/register
// @desc Register a new user
// @access Public

import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Registration logic
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();

    // Create JWT Payload
    const payload = { user: { id: newUser._id, role: newUser.role } };

    // Sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "8h" },
      (err, token) => {
        if (err) throw err;

        // Send the user and token in response
        res.status(201).json({
          user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

// @route Post /api/users/login
// @desc Authenticate user
// @access Public

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await existingUser.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    // Create JWT Payload
    const payload = { user: { id: existingUser._id, role: existingUser.role } };

    // Sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "8h" },
      (err, token) => {
        if (err) throw err;

        // Send the user and token in response
        res.json({
          user: {
            _id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error login");
  }
};

// @route GET /api/users/profile
// @desc Get logged-in user's profile (Protected Route)
// @access Private
export const userProfile = async (req, res) => {
  res.json(req.user);
};
