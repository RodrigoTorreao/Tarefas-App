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
  getTask: async (data) => {
    console.log(data);
    const allTasks = await Tasks.findAll({
      where: {
        user_id: data.id,
      },
    });
    const tasks = [];
    allTasks.forEach((task) => {
      tasks.push(task.dataValues);
    });
    return tasks;
  },
};

export default taskService;
