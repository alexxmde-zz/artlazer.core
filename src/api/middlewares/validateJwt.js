import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  const crypToken = req.get('Authorization');
  if (!crypToken) {
   return res.status(500).json({ error: 'No token specified' });
  }

  try {
    jwt.verify(crypToken, process.env.SECRET);
    next();

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
