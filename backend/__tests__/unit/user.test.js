import User from '../../src/app/models/User';
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
      .toThrowError();
  });
  it('Should only be able to user valid credentials'){
    
  }
});
