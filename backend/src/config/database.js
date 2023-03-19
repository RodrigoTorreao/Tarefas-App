// eslint-disable-next-line import/no-import-module-exports
import { config } from 'dotenv';

config();

export default {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  storage: './__tests__/database.sqlite',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
