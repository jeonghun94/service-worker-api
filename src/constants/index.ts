const HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost";
const PORT = process.env.NEXT_PUBLIC_API_PORT || 3000;
const URL =
  process.env.NODE_ENV === "development"
    ? `${HOST}:${PORT}`
    : "https://service-worker-api.vercel.app";

export const CLASS_INFO = [
  {
    courseCode: "C",
    courseName: "C언어의 기초",
    instructorName: "덴니스 리치",
    courseDescription: "프로그래밍의 기초를 배우는 수업입니다.",
    startDate: "2023-11-20",
    courseThumbnail: `${URL}/1.png`,
    contents: {
      images: [`${URL}/1.png`, `${URL}/2.png`, `${URL}/3.png`],
      videos: [`${URL}/testVideo.mp4`],
      htmls: [`${URL}/test/01.html`, `${URL}/test/02.html`],
      pdf: [`${URL}/HR_VueGuide.pdf`],
    },
  },
  {
    courseCode: "NODE",
    courseName: "Node.js 교과서",
    instructorName: "라이언 달",
    courseDescription: "영화 제작에 필요한 기술과 기법을 학습합니다.",
    startDate: "2023-11-21",
    courseThumbnail: `${URL}/2.png`,
    contents: {
      htmls: [`${URL}/test/01.html`, `${URL}/test/02.html`],
    },
  },
  {
    courseCode: "PYTHON",
    courseName: "점프 투 파이썬",
    instructorName: "귀도 반 로썸",
    courseDescription: "세계 각국의 요리를 마스터하는 수업입니다.",
    startDate: "2023-11-22",
    courseThumbnail: `${URL}/3.png`,
    contents: {
      htmls: [`${URL}/test/01.html`, `${URL}/test/02.html`],
    },
  },

  {
    courseCode: "JS",
    courseName: "모던 자바스크립트",
    instructorName: "브렌던 아이크",
    courseDescription: "실무에서 활용하는 데이터 분석 기술을 학습합니다.",
    startDate: "2023-11-21",
    courseThumbnail: `${URL}/4.png`,
    contents: {
      images: [`${URL}/1.png`],
      videos: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
    },
  },
  {
    courseCode: "SWIFT",
    courseName: "Swift 프로그래밍",
    instructorName: "애플",
    courseDescription: "일상적인 영어 회화 능력을 향상시키는 수업입니다.",
    startDate: "2023-11-23",
    courseThumbnail: `${URL}/5.png`,
    contents: {
      images: [`${URL}/1.png`],
    },
  },

  {
    courseCode: "DINO",
    courseName: "디노",
    instructorName: "라이언 달",
    courseDescription: "금융 시장에서의 투자 전략을 학습합니다.",
    startDate: "2023-11-25",
    courseThumbnail: `${URL}/6.png`,
    contents: {
      images: [`${URL}/1.png`],
    },
  },
  {
    courseCode: "DJANGO",
    courseName: "쉽게 배우는 Django ",
    instructorName: "시모나 비어조니",
    courseDescription: "다양한 사진 촬영 기술을 익히는 수업입니다.",
    startDate: "2023-11-26",
    courseThumbnail: `${URL}/7.png`,
  },

  {
    courseCode: "VUE",
    courseName: "Vue.js 시작하기",
    instructorName: "에반 유",
    courseDescription: "스포츠 관련 마케팅 전략을 학습합니다.",
    startDate: "2023-11-27",
    courseThumbnail: `${URL}/8.png`,
  },
  {
    courseCode: "REACT",
    courseName: "React.js 마스터 클래스",
    instructorName: "페이스북",
    courseDescription: "인공지능의 기초 이론과 응용을 다루는 수업입니다.",
    startDate: "2023-11-28",
    courseThumbnail: `${URL}/9.png`,
  },
  {
    courseCode: "JAVA",
    courseName: "자바의 정석",
    instructorName: "제임스 고슬링",
    courseDescription: "웹 디자인의 기초를 배우는 수업입니다.",
    startDate: "2023-11-29",
    courseThumbnail: `${URL}/10.png`,
    contents: {
      images: [`${URL}/1.png`, `${URL}/2.png`, `${URL}/3.png`],
      videos: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
    },
  },
];
