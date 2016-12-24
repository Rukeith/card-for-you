import 'babel-polyfill';
import Koa from 'koa';
import mongoose from 'mongoose';
import logger from 'koa-logger';
import Router from 'koa-router';
import parser from 'koa-bodyparser';
import config from './config/env.json';
const app = new Koa();
const api = new Router();
api.prefix('/api');

import userRouter from './routes/index.js';
userRouter(api);

app
  .use(logger()) // Logs http information.
  .use(parser())  // Parses json body requests.
  .use(api.routes())
  .use(api.allowedMethods({throw: true}))
  .use(async (ctx, next) => ctx.body = 'Hello World');

const port = config[process.env.NODE_ENV] ? config[process.env.NODE_ENV].port : 3000;
app.listen(port, () => console.info(`Listening on port ${port} ....`));

process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception Error : ${err}`);
});

process.on('unhandleRejection', (reason, p) => {
  console.error(`Unhandled Rejection at: Promise ${p} reason: ${reason}`);
});

export default app;
