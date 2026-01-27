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
}
// @route POST /api/admin/users
// @desc Add a new user (admin only)
// @access Private/Admin

export const addNewUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    user = new User({ name, email, password, role: role || "customer" });
    await user.save();

    res.status(201).json({ message: "New user sucessfully created" });

    res.json(user);
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

    if (user) {
      user.name = req.body.name || user.name;

      user.email = req.body.email || user.email;

      user.role = req.body.role || user.role;
    }
    const updateUser = await user.save();

    res
      .status(201)
      .json({ message: `User update sucessfully`, user: updateUser });
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
      res.json({ message: "User deleted sucessfully" });
    }
    res.status(404).json({message:"User not found for delete"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
