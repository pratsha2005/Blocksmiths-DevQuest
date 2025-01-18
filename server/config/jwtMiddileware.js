const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Check for Authorization header and the token
  const token = req.header("Authorization") && req.header("Authorization").split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Verify token using JWT secret from environment variables
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach the user info to the request object for further processing
    req.user = verified;
    next();
  } catch (err) {
    // Handle invalid or expired token error
    res.status(401).json({ message: "Unauthorized: Invalid or expired token", details: err.message });
  }
};
