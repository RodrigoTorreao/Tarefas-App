/* eslint-disable no-undef */
import userService from '../../src/app/services/userService.js';

describe('User', () => {
  it('Should Create a user', async () => {
    await userService.create({
      name: 'create_user',
      email: 'create-user',
      password: '123123',
    });
  });
});

describe('User-Login', () => {
  it('Should only allow existing users', async () => {
    expect(userService.login({
      email: 'unexsisting_user',
      password: '123',
    }))
      .rejects
      .toThrowError('user not found');
  });

  it('Should only not be able to use invalid credentials', async () => {
    await userService.create({
      name: 'existing-user',
      email: 'existing-user',
      password: '123123',
    });
    expect(userService.login({
      email: 'existing-user',
      password: '123',
    }))
      .rejects
      .toThrowError('invalid credentials');
  });

  it('Should be able to use valid credentials', async () => {
    await userService.create({
      name: 'valid-user',
      email: 'valid-user',
      password: '123123',
    });

    expect(userService.login({
      email: 'valid-user',
      password: '123123',
    }))
      .toBeDefined();
  });
});

describe('User-view', () => {
  it('Should exist the user', async () => {
    expect(userService.login({
      email: 'unexsisting_user',
      password: '123',
    }))
      .rejects
      .toThrowError('user not found');
  });
});
