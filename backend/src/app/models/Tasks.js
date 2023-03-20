import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Tasks = sequelize.define('Tasks', {
  user_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  task: DataTypes.STRING,
});

export default Tasks;
