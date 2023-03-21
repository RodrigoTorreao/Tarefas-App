/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../../src/app';
import userService from '../../src/app/services/userService.js';

describe('Tasks', () => {
  it('Should create a new task', async () => {
    await userService.create({
      name: 'createTaskTest',
      email: 'createTaskTest',
      password: '123123',
    });

    const token = await supertest(app)
      .post('/user/login')
      .send({
        user: {
          email: 'createTaskTest',
          password: '123123',
        },
      });

    const response = await supertest(app)
      .post('/task/create')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        name: 'createUserTest',
        task: 'testTask',

      });

    expect(response.status).toBe(201);
  });

  it('Should read a task', async () => {
    const token = await supertest(app)
      .post('/user/login')
      .send({
        user: {
          email: 'createTaskTest',
          password: '123123',
        },
      });

    const response = await supertest(app)
      .get('/task/get-task')
      .set('Authorization', `Bearer ${token.body}`);

    expect(response.status).toBe(200);
  });

  it('Should update a task', async () => {
    const token = await supertest(app)
      .post('/user/login')
      .send({
        user: {
          email: 'createTaskTest',
          password: '123123',
        },
      });

    const task = await supertest(app)
      .post('/task/create')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        name: 'UpdateTask',
        task: 'UpdateTask',

      });

    const updateTask = await supertest(app)
      .put('/task/update-task')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        taskId: task.body.id,
        name: 'UpdatedTask',
        task: 'UpdatedTask',

      });
    expect(updateTask.status).toBe(200);
  });
});
