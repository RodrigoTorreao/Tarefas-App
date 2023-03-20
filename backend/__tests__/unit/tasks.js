import taskService from '../../src/app/services/taskService';

describe('Task', () => {
  it('Should Create a new task', async () => {
    const newTask = await taskService.create({
      name: 'create-task',
      task: 'create-task',
      id: 23,
    });
  });
});
