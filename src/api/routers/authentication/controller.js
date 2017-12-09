import userModel from '../../models/user';
import jwt from 'jsonwebtoken';

export default class AuthenticationController {
  async authenticate (req, res) {
    const { username, password } = req.body;
    try { 
      const user = await userModel.findOne({ username, password });

      if (!user) {
        return res.status(500).json({ message: 'Username/password do not match' });
      }

      const token = jwt.sign(user.toObject(), process.env.SECRET);
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.json({ error: error.message });
    }
  }
}
