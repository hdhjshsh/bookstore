const express = require("express");

const verifyToken = require("../middlewares/authMiddleware");
const adminCheck = require("../middlewares/adminMiddleware");

const User = require("../models/User");

const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/profile", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/all", verifyToken, adminCheck, async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
