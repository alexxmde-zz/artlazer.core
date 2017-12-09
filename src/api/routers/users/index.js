import express from 'express';
import UsersController from './controller';
import validateJwt from '../../middlewares/validateJwt';

const prefix = '/users';

const controller = new UsersController();
const router = express.Router();

router.use(validateJwt);

router.post('/', controller.persistUser);
router.get('/', controller.getUsers);
router.put('/:userId', controller.persistUser);
router.get('/:userId', controller.getUser);

export default { 
  prefix,
  router
};

