import { verifyToken } from '../utils/jwt.utils.js';
import User from '../models/User.model.js';

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization||req.cookies.token ? `Bearer ${req.cookies.token}` : null;
    const bearerToken = authHeader && authHeader.startsWith('Bearer ')
      ? authHeader.split(' ')[1]
      : null;
    const cookieToken = req.cookies && req.cookies.token ? req.cookies.token : null;
    const token = bearerToken || cookieToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Please log in to access this route.',
      });
    }

    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found. Please log in again.',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token. Please log in again.',
    });
  }
};

export default authenticate;
