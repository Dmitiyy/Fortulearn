import {Schema, model} from 'mongoose';
import validator from 'validator';

const studentSchema = new Schema({
  type: {
    type: String,
    required: [true, 'User must have a type']
  },
  selectedCourses: {
    type: Array,
    default: []
  },
  progress: {
    type: Object,
    default: {}
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
  conferences: {
    type: Number,
    default: 0
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

const Student = model('Student', studentSchema);
export default Student;