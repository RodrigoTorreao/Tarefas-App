/* eslint-disable no-undef */
import taskService from '../../src/app/services/taskService';

describe('Task', () => {
  it('Should Create a new task', async () => {
    await taskService.create({
      name: 'create-task',
      task: 'create-task',
      id: 24,
    });
  });
});

describe('Task read', () => {
  it('Should only allow a user to read his tasks', async () => {
    await taskService.create({
      name: 'read-task',
      task: 'read-task',
      id: 23,
    });
    await taskService.create({
      name: 'read-task2',
      task: 'read-task2',
      id: 23,
    });
    const tasks = await taskService.getTask({ id: 23 });

    expect(tasks.length).toBe(2);
  });
});
