export interface Course {
  courseCode: string;
  courseName: string;
  instructorName: string;
  courseDescription: string;
  startDate: string;
  courseThumbnail: string;
  contents?: {
    images?: string[];
    videos?: string[];
    htmls?: string[];
    pdf?: string[];
  };
}
