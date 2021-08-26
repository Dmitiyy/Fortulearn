import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../utils/connectToDatabase'

type Data = {
  status: string
  data: Object
}

const {Course} = mongoose.models; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await connectToDatabase();
  
    const data = {
      photo: 'test',
      name: 'test',
      description: 'test',
      participants: [0, 4],
      price: 7,
      author: 'test author',
      people: [
        {photo: 'test', name: 'test'},
        {photo: 'test', name: 'test'}
      ],
      schedule: [['Monday', '9am'], ['Sunday', '10pm']]
    }
  
    const course: Object = await Course.create(data);
    
    res.status(200).json({ status: 'success', data: course});
  } catch (err) {console.log(err)}
}