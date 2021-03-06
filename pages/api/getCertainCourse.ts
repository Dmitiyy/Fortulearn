import { NextApiRequest, NextApiResponse } from "next";
import Course from "../../models/Course";
import Teacher from "../../models/Teacher";
import connectToDatabase from "../../utils/connectToDatabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const course = await Course.find({_id: req.body.id});

      if (!course) {
        res.status(404).json({status: 'fail', data: 'Course not found'});
      }

      const teacher = await Teacher.find({email: course[0].author.email});

      if (!teacher) {
        res.status(404).json({status: 'fail', data: 'Teacher not found'});
      }

      res.status(200).json({status: 'success', data: {course, teacher}});
    } catch (err) {
      res.status(500).json({status: 'fail', data: 'Error inside the server'});
    }
  }
}