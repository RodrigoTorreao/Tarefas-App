/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../../src/app';
import userService from '../../src/app/services/userService.js';

describe('User', () => {
  it('Should create a new User', async () => {
    const response = await supertest(app)
      .post('/user/create')
      .send({
        user: {
          name: 'createUserTest',
          email: 'testemail',
          password: '123123',
        },
      });
    expect(response.status).toBe(201);
  });

  it('Should allow a existing user to login', async () => {
    await userService.create({
      name: 'loginUserTest',
      email: 'loginUserTest',
      password: '123123',
    });
    const response = await supertest(app)
      .post('/user/login')
      .send({
        user: {
          email: 'loginUserTest',
          password: '123123',
        },
      });
    expect(response.status).toBe(200);
  });
});

describe('User-view', () => {
  it('Should allow autheticated users', async () => {
    const token = await supertest(app)
      .post('/user/login')
      .send({
        user: {
          email: 'loginUserTest',
          password: '123123',
        },
      });
    const response = await supertest(app)
      .get('/user/me')
      .set('Authorization', `Bearer ${token.body}`);
    expect(response.status).toBe(200);
  });
});
