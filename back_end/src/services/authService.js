const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (name, email, password) => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email is already in use!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    return { message: "Successfully registered", user: newUser };
  } catch (error) {
    throw new Error(error.message);
  }
};

const login = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Incorrect email or password!");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Incorrect email or password!");
    }

    const token = jwt.sign({ userId: user._id, email: user.email, role: user.role }, 
      process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });

    return { message: "Successfully logged in", token, user };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { register, login };
