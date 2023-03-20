/* eslint-disable import/no-cycle */
/* eslint-disable object-shorthand */
/* eslint-disable global-require */

import Sequelize, { DataTypes } from 'sequelize';

import config from '../../config/database.js';

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {
  User: sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
  }),
  Tasks: sequelize.define('Tasks', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    task: DataTypes.STRING,
  }),

};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export {
  sequelize,
  db,
};
