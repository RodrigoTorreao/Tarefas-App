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
    console.log(response);
    expect(response.status).toBe(201);
  });
});
