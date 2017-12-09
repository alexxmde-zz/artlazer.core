import mongoose from 'mongoose';

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
    required: true
  }
});

export default mongoose.model('User', schema);
