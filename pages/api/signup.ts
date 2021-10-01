import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import connectToDatabase from '../../utils/connectToDatabase';
import bcrypt from 'bcrypt';
import Student from '../../models/Student';
import Teacher from '../../models/Teacher';

export const getNewToken = (id: string) => {
  const token = jwt.sign({id}, process.env.JWT_SECRET as string, {
      expiresIn: '7d'
  });

  return token;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      
      const {name, email, password, type} = req.body;

      let user: any = {};
      let token: string = '';

      const renderUser = async (man: typeof Student | typeof Teacher): Promise<any> => {
        const pass = await bcrypt.hash(password, 12);
        user = await man.create({name, email, password: pass, type});
        token = getNewToken(user.id);
      };
      
      if (type === 'Student') {await renderUser(Student)} 
      else if (type === 'Teacher') {await renderUser(Teacher)};

      res.status(201).json({status: 'success', body: {user, token}});
    } catch (err) {
      const {message}: any = err;
      res.status(500).json({status: 'fail', body: message})
    };
  }
}