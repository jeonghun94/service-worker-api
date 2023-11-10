// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CLASS_INFO } from "@/constants";

interface Course {
  courseName: string;
  instructorName: string;
  courseCode: string;
  courseDescription: string;
  courseSchedule: string;
  startDate: string;
  endDate: string;
  creationDate: string;
  courseThumbnail: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Course[]>
) {
  console.log(process.env.NEXT_PUBLIC_API_PORT || 3000);
  res.status(200).json(CLASS_INFO);
}
