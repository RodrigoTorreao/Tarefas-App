import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.VIRTUAL,
  password_hash: DataTypes.STRING,
});

export default User;
