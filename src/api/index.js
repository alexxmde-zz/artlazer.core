import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import * as routers from './routers';

export default class Api {
  constructor () {
    this.express = express();
    this.middleware();
    this.routes();
    this.db();
  }

  middleware () {
    this.express.use(cors());
    this.express.use(bodyParser.json());
  }

  routes () {
    Object.values(routers).forEach(({ router, prefix }) => 
      this.express.use(prefix, router));
  }

  run () {
    this.express.listen(3000, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Listening on port 3000');
      }
    })
  }

  db () {
    mongoose.connect(process.env.DB_URL, { useMongoClient: true });
    mongoose.Promise = global.Promise;
    console.log('DB Connected');
  }
}
