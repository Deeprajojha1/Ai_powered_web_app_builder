import jwt from 'jsonwebtoken';
// Genrate token for a user
export const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};
// verify the token
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};