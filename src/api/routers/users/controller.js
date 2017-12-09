import userModel from '../../models/user';
import { standardQuery, standardPersist, standardSingleQuery } from '../../utils/utils.js';

const idParam = 'userId';

export default class UserController {

  async persistUser (req, res) {
    standardPersist(idParam, userModel, req, res);
  }

  async getUser (req, res) {
    standardSingleQuery(idParam, userModel, req, res);
  }

  async getUsers (req, res) {
    standardQuery(userModel, req, res);
  }

  async deleteUser (req, res) {
  }

}
