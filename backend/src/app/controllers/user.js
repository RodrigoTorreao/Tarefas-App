/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express';
import userService from '../services/userService.js';
import { authenticateToken } from '../utils/token.js';

const router = Router();

router.post('/create', async (req, res, prox) => {
  try {
    const newUser = await userService.create(req.body.user);
    res.status(201).json(newUser);
  } catch (err) {
    prox(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const token = await userService.login(req.body.user);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
});

router.get('/me', authenticateToken, async (req, res, next) => {
  try {
    const me = await userService.getUser(req.user);
    res.status(200).json(me);
  } catch (err) {
    next(err);
  }
});

export default router;
