import {Schema, model} from 'mongoose';

const courseSchema = new Schema({
  photo: {
    type: String,
    required: [true, 'Course must have an own photo']
  },
  name: {
    type: String,
    required: [true, 'Course must have a name']
  },
  description: {
    type: String,
    required: [true, 'Course must have a description']
  },
  participants: {
    type: Array,
    default: [0, 0]
  },
  price: {
    type: Number,
    required: [true, 'Course must have a price']
  },
  author: {
    type: Object,
    default: {photo: '', name: '', status: ''}
  },
  people: {
    type: Array,
    default: []
  },
  schedule: {
    type: Array,
    default: []
  },
  type: {
    type: String,
    enum: {
      values: ['business', 'development', 'finance', 'music']
    },
    required: [true, 'Course must have a type']
  }
});

const Course = model('Course', courseSchema);