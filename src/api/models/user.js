import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const schema = mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: isEmail,
      message: '{VALUE} is not a valid e-mail address'
    }
  }
});

export default mongoose.model('User', schema);
