import User from "../models/User.js";

// @route GET /api/admin/users
// @desc Get all users (Admin Only)
// @access Private/Admin
export const adminUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
// @route POST /api/admin/users
// @desc Add a new user (admin only)
// @access Private/Admin

export const addNewUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const user = await User.create({
      name,
      email,
      password,
      role: role || "customer",
    });

    res.status(201).json({
      message: "New user successfully created",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server Error" });
  }
};

// @route PUT /api/admin/users/:id
// @desc Update user info (admin only) -- Name, email and role
// @access Private/admin

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.role || user.role;

    const updatedUser = await user.save();

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route DELETE /api/admin/users/:id
// @desc Delete a user
// @access Private/Admin
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      await user.deleteOne();
      return res.json({ message: "User deleted successfully" });
    }

    res.status(404).json({ message: "User not found for delete" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
