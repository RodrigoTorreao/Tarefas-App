import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const generateAccessToken = (user) => jwt.sign({ name: user.name, email: user.email, id: user.id }, process.env.TOKEN_SECRET, { expiresIn: '1800s' });

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;

    next();
  });
};
export {
  generateAccessToken,
  authenticateToken,
};
