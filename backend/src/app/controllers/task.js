/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express';
import taskService from '../services/taskService.js';
import { authenticateToken } from '../utils/token.js';

const router = Router();

router.post('/create', authenticateToken, async (req, res, prox) => {
  try {
    const newTask = await taskService.create({ id: req.user.id, ...req.body });
    res.status(201).json(newTask);
  } catch (err) {
    prox(err);
  }
});

router.get('/get-task', authenticateToken, async (req, res, prox) => {
  try {
    const tasks = await taskService.getTask(req.user);
    res.status(200).json(tasks);
  } catch (err) {
    prox(err);
  }
});

router.put('/update-task', authenticateToken, async (req, res, prox) => {
  try {
    const tasks = await taskService.updateTask({ id: req.user.id, ...req.body });
    res.status(200).json(tasks);
  } catch (err) {
    prox(err);
  }
});

export default router;
