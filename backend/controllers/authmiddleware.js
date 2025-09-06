const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();
const key = process.env.JWT_KEY

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(" ")[1];
  console.log(authHeader)
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, key, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }
    console.log(user)
    req.user = user; 
    next();          
  });
}

module.exports = authenticateToken