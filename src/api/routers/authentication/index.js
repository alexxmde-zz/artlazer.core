import express from 'express';
import controller from './controller';

const prefix = '/authentication';
const router = express.Router();
router.post('/', new controller().authenticate);

export default {
  prefix,
  router
};

