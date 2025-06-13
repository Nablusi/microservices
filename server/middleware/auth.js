const JWT = require('jsonwebtoken');

const isLoggedin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1]; // Extract token

    const decoded = JWT.verify(token, process.env.JWT);
    req.currentUser = decoded; // Attach user data to request

    next(); // Continue to next middleware/route
  } catch (e) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = isLoggedin;
