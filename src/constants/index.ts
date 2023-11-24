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
    startDate: "2023-11-24",
    courseThumbnail: `${URL}/1.png`,
    contents: {
      images: [`${URL}/1.png`, `${URL}/2.png`, `${URL}/3.png`],
      videos: [`${URL}/testVideo.mp4`],
      htmls: [`${URL}/test/1-1.html`, `${URL}/test/2-1.html`],
      pdf: [`${URL}/HR_VueGuide.pdf`],
    },
  },
  {
    courseCode: "NODE",
    courseName: "Node.js 교과서",
    instructorName: "라이언 달",
    courseDescription: "영화 제작에 필요한 기술과 기법을 학습합니다.",
    startDate: "2023-11-25",
    courseThumbnail: `${URL}/2.png`,
    contents: {
      htmls: [`${URL}/test/2-1.html`],
    },
  },
  {
    courseCode: "PYTHON",
    courseName: "점프 투 파이썬",
    instructorName: "귀도 반 로썸",
    courseDescription: "세계 각국의 요리를 마스터하는 수업입니다.",
    startDate: "2023-11-26",
    courseThumbnail: `${URL}/3.png`,
    contents: {
      htmls: [`${URL}/test/3-1.html`, `${URL}/test/3-2.html`],
    },
  },

  {
    courseCode: "JS",
    courseName: "모던 자바스크립트",
    instructorName: "브렌던 아이크",
    courseDescription: "실무에서 활용하는 데이터 분석 기술을 학습합니다.",
    startDate: "2023-11-27",
    courseThumbnail: `${URL}/4.png`,
    contents: {
      images: [`${URL}/1.png`],
      htmls: [`${URL}/test/4-1.html`, `${URL}/test/4-2.html`],
    },
  },
  {
    courseCode: "SWIFT",
    courseName: "Swift 프로그래밍",
    instructorName: "애플",
    courseDescription: "일상적인 영어 회화 능력을 향상시키는 수업입니다.",
    startDate: "2023-11-28",
    courseThumbnail: `${URL}/5.png`,
    contents: {
      images: [`${URL}/1.png`],
      htmls: [`${URL}/test/5-1.html`, `${URL}/test/5-2.html`],
    },
  },

  {
    courseCode: "DINO",
    courseName: "디노",
    instructorName: "라이언 달",
    courseDescription: "금융 시장에서의 투자 전략을 학습합니다.",
    startDate: "2023-11-29",
    courseThumbnail: `${URL}/6.png`,
    contents: {
      htmls: [`${URL}/test/1-1.html`, `${URL}/test/1-2.html`],
    },
  },
  {
    courseCode: "DJANGO",
    courseName: "쉽게 배우는 Django ",
    instructorName: "시모나 비어조니",
    courseDescription: "다양한 사진 촬영 기술을 익히는 수업입니다.",
    startDate: "2023-11-30",
    courseThumbnail: `${URL}/7.png`,
    contents: {
      htmls: [`${URL}/test/3-1.html`],
    },
  },

  {
    courseCode: "VUE",
    courseName: "Vue.js 시작하기",
    instructorName: "에반 유",
    courseDescription: "스포츠 관련 마케팅 전략을 학습합니다.",
    startDate: "2023-11-31",
    courseThumbnail: `${URL}/8.png`,
    contents: {
      htmls: [`${URL}/test/4-1.html`],
    },
  },
  {
    courseCode: "REACT",
    courseName: "React.js 마스터 클래스",
    instructorName: "페이스북",
    courseDescription: "인공지능의 기초 이론과 응용을 다루는 수업입니다.",
    startDate: "2023-12-01",
    courseThumbnail: `${URL}/9.png`,
    contents: {
      htmls: [`${URL}/test/5-1.html`],
    },
  },
  {
    courseCode: "JAVA",
    courseName: "자바의 정석",
    instructorName: "제임스 고슬링",
    courseDescription: "웹 디자인의 기초를 배우는 수업입니다.",
    startDate: "2023-12-02",
    courseThumbnail: `${URL}/10.png`,
    contents: {
      htmls: [`${URL}/test/3-1.html`],
    },
  },
];
