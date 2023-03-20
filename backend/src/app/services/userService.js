/* eslint-disable camelcase */
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const userService = {
  create: async (user) => {
    if (!user.email || !user.password || !user.name) {
      throw new Error('missing information');
    }
    const isRepeated = await User.findOne({
      where: {
        email: user.email,
      },
    });
    if (isRepeated) {
      throw new Error('user already exists');
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
      throw Error('user not found');
    }

    const match = await bcrypt.compare(data.password, user.password_hash);
    if (!match) {
      
    }
  },
};

export default userService;
