import User from '../models/User.js';
import Tasks from '../models/Tasks.js';
const taskService = {
  create: async (data) => {
    const newTask = await Tasks.create({
      user_id: data.id,
      name: data.name,
      task: data.task,
    });
    return newTask;
  },
};

export default taskService;
