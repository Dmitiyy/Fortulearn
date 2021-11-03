import { NextApiRequest, NextApiResponse } from "next";
import Teacher from "../../models/Teacher";
import connectToDatabase from "../../utils/connectToDatabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const teacher = await Teacher.find({email: req.body.email});

      res.status(200).json({status: 'success', data: teacher});
    } catch (err) {
      res.status(500).json({status: 'fail', data: 'Error inside the server'});
    }
  }
}