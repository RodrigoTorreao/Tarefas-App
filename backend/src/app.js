/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './app/controllers/user.js';
import taskRouter from './app/controllers/task.js';
import errorHandler from './app/utils/errorHandler.js';

config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

class App {
  constructor() {
    this.express = express();
    this.express.use(cors());
    this.middlewares();
    this.routes();
    this.express.use(errorHandler);
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.json());
  }

  routes() {
    this.express.use('/user', userRouter);
    this.express.use('/task', taskRouter);
  }
}
const app = new App().express;
export default app;
