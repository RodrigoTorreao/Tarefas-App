import Tasks from '../models/Tasks.js';

const taskService = {
  create: async (data) => {
    const newTask = await Tasks.create({
      user_id: data.id,
      name: data.name,
      task: data.task,
    });
    return newTask.dataValues;
  },

  getTask: async (data) => {
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

  updateTask: async (data) => {
    const updatedTask = await Tasks.update(
      {
        name: data.name,
        task: data.task,
      },
      {
        where: {
          user_id: data.id,
          id: data.taskId,
        },
      },
    )
      .then(() => Tasks.findOne({
        where: {
          id: data.taskId,
        },
      }));
    return updatedTask.dataValues;
  },

};

export default taskService;
