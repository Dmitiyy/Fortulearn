import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../utils/connectToDatabase'

type Data = {
  status: string
  data: Object
}

const {Course, Student} = mongoose.models; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await connectToDatabase();
  
    const students = await Student.find();
    
    res.status(200).json({ status: 'success', data: students});
  } catch (err) {console.log(err)}
}