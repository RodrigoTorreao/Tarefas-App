/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import express from 'express';
import { config } from 'dotenv';
import userRouter from './app/controllers/user.js';

config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use('/user', userRouter);
  }
}
const app = new App().express;
export default app;
