import userModel from '../../models/user';

export default class UserController {
  async persistUser (req, res) {
    const { body: user } = req;
    try {
      await userModel.create(user);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}
