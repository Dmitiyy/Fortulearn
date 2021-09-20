import {Schema, model} from 'mongoose';
import validator from 'validator';

const teacherSchema = new Schema({
  type: {
    type: String,
    required: [true, 'User must have a type']
  },
  yourCourses: {
    type: Array,
    default: []
  },
  progress: {
    type: Object,
    default: {}
  },
  description: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: [true, 'User must have a name']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'User must have an email'],
    validate: [validator.isEmail, 'Please provide your valid email']
  },
  password: {
    type: String,
    required: [true, 'User must have a password'],
    minLength: 8,
    select: false
  },
  gifts: {
    type: Array,
    default: []
  },
  photo: {
    type: String,
    default: 'https://res.cloudinary.com/dvoxg4dxb/image/upload/v1628408605/Fortulearn/avatar_yeflbf.png'
  },
  accomplishments: {
    type: Array,
    default: []
  }
});

const Teacher = model('Teacher', teacherSchema);
export default Teacher;