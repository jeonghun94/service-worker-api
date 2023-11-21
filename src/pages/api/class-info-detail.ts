// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CLASS_INFO } from "@/constants";

interface Course {
  courseCode: string;
  courseName: string;
  instructorName: string;
  courseDescription: string;
  startDate: string;
  courseThumbnail: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Course[]>
) {
  console.log(req.query);
  res
    .status(200)
    .json(
      CLASS_INFO.filter((course) => course.courseCode === req.query.courseCode)
    );
}
