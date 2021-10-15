import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import connectToDatabase from "../../utils/connectToDatabase";
import Student from "../../models/Student";
import Teacher from "../../models/Teacher";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try { 
      await connectToDatabase();

      let token: string = '';
      let userId: string = '';
      let user: typeof Student | typeof Teacher;
      const requestHeadersAuth: string | undefined = req.headers.authorization;

      if (requestHeadersAuth && requestHeadersAuth.startsWith('Bearer')) {
        token = requestHeadersAuth.split(' ')[1];
      }

      if (token.length === 0) {
        return res.status(401).json({status: 'fail', data: 'You are not logged in'});
      }

      jwt.verify(token, process.env.JWT_SECRET as string, (err, res) => {
        userId = res?.id;
      });

      user = await Student.findById(userId);

      if (!user) {
        user = await Teacher.findById(userId);

        if (!user) {
          return res.status(401).json({status: 'fail', data: 'User no longer exists'});
        }
      }

      res.status(200).json({status: 'success', data: user});
    } catch (err: any) {
      res.status(500).json({status: 'fail', data: err.message})
    }
  }
}