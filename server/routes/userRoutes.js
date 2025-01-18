const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const jwtMiddleware = require("../config/jwtMiddleware");

const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login a user
router.post("/login", loginUser);

// Get user profile
router.get("/profile", jwtMiddleware, getUserProfile);

// Update user profile
router.put("/profile", jwtMiddleware, updateUserProfile);

module.exports = router;
