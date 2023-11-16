const imagedelivery = (url: string) => {
  return `https://imagedelivery.net/jhi2XPYSyyyjQKL_zc893Q/${url}/public`;
};
const HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost";
const PORT = process.env.NEXT_PUBLIC_API_PORT || 3000;
const URL =
  process.env.NODE_ENV === "development"
    ? `${HOST}:${PORT}`
    : "https://service-worker-api.vercel.app";

console.log("isDevelopment", URL);

export const CLASS_INFO = [
  {
    courseName: "프로그래밍 기초",
    instructorName: "김영수",
    courseCode: "C101",
    courseDescription: "프로그래밍의 기초를 배우는 수업입니다.",
    courseSchedule: "월, 수, 금 10:00 AM - 12:00 PM",
    startDate: "2023-01-16",
    endDate: "2023-03-24",
    creationDate: "2023-01-10",
    courseThumbnail: imagedelivery("70289684-e162-4336-f465-9976c78efe00"),
    contents: {
      images: [
        `${URL}/1.png`,
        `${URL}/2.png`,
        `${URL}/3.png`,
        `${URL}/4.png`,
        `${URL}/5.png`,
        `${URL}/6.png`,
        `${URL}/7.png`,
        `${URL}/8.png`,
        `${URL}/9.png`,
        `${URL}/10.png`,
        `${URL}/11.png`,
      ],
      videos: [`${URL}/testVideo.mp4`],
      htmls: [
        `${URL}/testIframe.html`,
        `${URL}/testIframe2.html`,
        `${URL}/testIframe3.html`,
        // `${URL}/t/e/s/t/index.html`,
      ],
      pdf: [`${URL}/HR_VueGuide.pdf`],
    },
  },
  {
    courseName: "웹 디자인 입문",
    instructorName: "이지은",
    courseCode: "WD201",
    courseDescription: "웹 디자인의 기초를 배우는 수업입니다.",
    courseSchedule: "화, 목 2:00 PM - 4:00 PM",
    startDate: "2023-02-05",
    endDate: "2023-04-12",
    creationDate: "2023-01-20",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
    contents: {
      images: [`${URL}/1.png`, `${URL}/2.png`, `${URL}/3.png`],
      videos: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
      pdf: [],
    },
  },
  {
    courseName: "데이터 분석 실무",
    instructorName: "박성준",
    courseCode: "DA301",
    courseDescription: "실무에서 활용하는 데이터 분석 기술을 학습합니다.",
    courseSchedule: "수, 금 9:00 AM - 11:00 AM",
    startDate: "2023-03-10",
    endDate: "2023-05-18",
    creationDate: "2023-02-15",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
    contents: {
      images: [`${URL}/1.png`],
      videos: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
      pdf: [],
    },
  },
  {
    courseName: "영어 회화 수업",
    instructorName: "Sarah Johnson",
    courseCode: "E101",
    courseDescription: "일상적인 영어 회화 능력을 향상시키는 수업입니다.",
    courseSchedule: "월, 수 4:00 PM - 6:00 PM",
    startDate: "2023-02-20",
    endDate: "2023-04-26",
    creationDate: "2023-01-30",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
    contents: {
      images: [
        "https://ssl.pstatic.net/melona/libs/1470/1470132/df1523c6b0ade7192c84_20231031145502709_8.jpg",
      ],
    },
  },

  {
    courseName: "금융 투자 전략",
    instructorName: "이재영",
    courseCode: "FI401",
    courseDescription: "금융 시장에서의 투자 전략을 학습합니다.",
    courseSchedule: "화, 목 6:30 PM - 8:30 PM",
    startDate: "2023-03-15",
    endDate: "2023-05-23",
    creationDate: "2023-02-10",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
    contents: {
      images: [
        "https://ssl.pstatic.net/melona/libs/1471/1471132/a4f30a12ce0779bd9e07_20231103120727767.jpg",
      ],
    },
  },
  {
    courseName: "사진촬영 기술",
    instructorName: "박지원",
    courseCode: "P201",
    courseDescription: "다양한 사진 촬영 기술을 익히는 수업입니다.",
    courseSchedule: "토, 일 10:00 AM - 12:00 PM",
    startDate: "2023-02-25",
    endDate: "2023-04-30",
    creationDate: "2023-02-01",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
  },
  {
    courseName: "요리 마스터 클래스",
    instructorName: "이지영",
    courseCode: "CUL501",
    courseDescription: "세계 각국의 요리를 마스터하는 수업입니다.",
    courseSchedule: "목, 토 6:00 PM - 8:00 PM",
    startDate: "2023-03-05",
    endDate: "2023-05-13",
    creationDate: "2023-02-05",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
  },
  {
    courseName: "스포츠 마케팅",
    instructorName: "홍성민",
    courseCode: "SM301",
    courseDescription: "스포츠 관련 마케팅 전략을 학습합니다.",
    courseSchedule: "수, 금 3:00 PM - 5:00 PM",
    startDate: "2023-02-10",
    endDate: "2023-04-18",
    creationDate: "2023-01-25",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
  },
  {
    courseName: "인공지능 기초",
    instructorName: "김재환",
    courseCode: "AI201",
    courseDescription: "인공지능의 기초 이론과 응용을 다루는 수업입니다.",
    courseSchedule: "월, 수 1:30 PM - 3:30 PM",
    startDate: "2023-03-01",
    endDate: "2023-05-09",
    creationDate: "2023-02-03",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
  },
  {
    courseName: "영화 제작 기술",
    instructorName: "이미영",
    courseCode: "FILM401",
    courseDescription: "영화 제작에 필요한 기술과 기법을 학습합니다.",
    courseSchedule: "토, 일 2:30 PM - 4:30 PM",
    startDate: "2023-03-08",
    endDate: "2023-05-14",
    creationDate: "2023-02-08",
    courseThumbnail: imagedelivery("f92dc5f6-e421-4d85-1310-6cddf408fe00"),
  },
];
