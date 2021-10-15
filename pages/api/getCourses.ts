import { NextApiRequest, NextApiResponse } from "next";
import data from "../../components/testData";
import Course from "../../models/Course";
import connectToDatabase from "../../utils/connectToDatabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const {type, limit, page} = req.body;

      if (!limit || !type || !page) {
        return res.status(400).json({status: 'fail', data: 'Bad request'});
      }

      const response = await Course.find({type: req.body.type})
      .limit(req.body.limit)
      .skip((req.body.page - 1) * req.body.limit)
      .sort({createdAt: 'desc'});

      const pages = await Course.find({type: req.body.type}).countDocuments();
    
      res.json({status: 'success', data: {response, pages: Math.ceil(pages / limit)}});

      // let a = await Course.create(...data); 

      // res.json({data: a});
    } catch ({message}: any) {
      res.status(500).json({status: 'fail', data: message});
    }
  }
}