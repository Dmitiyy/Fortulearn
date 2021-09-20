import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import connectToDatabase from '../../utils/connectToDatabase';
import bcrypt from 'bcrypt';
import { getNewToken } from './signup';

const {Student, Teacher} = mongoose.models; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
  
      const {email, password} =  req.body;
      let user = await Student.findOne({email}).select('+password');
      
      if (!user) {
        user = await Teacher.findOne({email}).select('+password');
        if (!user) {
          return res.status(404).json({status: 'fail', data: "This user doesn't exist"});
        }
      }
  
      const checkingPasswords = await bcrypt.compare(password, user.password);
      if (!checkingPasswords) {
        return res.status(401).json({status: 'fail', data: 'Incorrect password'});
      }

      const token = getNewToken(user._id);
      res.status(200).json({status: 'success', data: user, token});
    } catch (err) {
      const {message}: any = err;
      res.status(500).json({status: 'fail', data: message});
    }
  }
}