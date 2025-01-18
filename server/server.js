const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors"); // Add colors package for console styling
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect to database
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));

const PORT = process.env.PORT || 5000;

// Connect to database before starting server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`.yellow.bold));
});
