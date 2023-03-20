/* eslint-disable camelcase */
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import CustomError from '../utils/customError.js';
import { generateAccessToken } from '../utils/token.js';

const userService = {
  create: async (user) => {
    if (!user.email || !user.password || !user.name) {
      throw new CustomError(400, 'missing information');
    }
    const isRepeated = await User.findOne({
      where: {
        email: user.email,
      },
    });
    if (isRepeated) {
      throw new CustomError(400, 'user already existis');
    }

    const password_hash = await bcrypt.hash(user.password, 8);

    const newUser = await User.create({
      name: user.name,
      email: user.email,
      password_hash,
    });
    return newUser;
  },

  login: async (data) => {
    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new CustomError(404, 'user not found');
    }
    const match = await bcrypt.compare(data.password, user.password_hash);
    if (!match) {
      throw new CustomError(401, 'invalid credentials');
    }

    const acessToken = generateAccessToken(user);
    return acessToken;
  },

  getUser: async (data) => {
    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new CustomError(404, 'user not found');
    }
    delete user.dataValues.password_hash;
    return user;
  },
};

export default userService;
