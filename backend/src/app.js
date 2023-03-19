/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import express from 'express';
// import routes from './routes';
import User from './app/models/User.js';

class App {
  constructor() {
    this.express = express();
    // this.middlewares();
    this.routes();
  }

  /*
  middlewares() {
    this.express.use(express.json());
  }
*/
  routes() {
  }
}
const app = new App().express;
export default app;
