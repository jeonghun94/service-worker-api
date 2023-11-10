/** @type {import('next').NextConfig} */
const Cors = require("micro-cors");

// CORS 미들웨어를 생성하고 옵션을 설정합니다.
const cors = Cors({
  allowMethods: ["GET", "POST", "PUT", "DELETE"], // 허용할 HTTP 메소드
  allowHeaders: ["Content-Type"], // 허용할 헤더
});
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_PORT: process.env.NEXT_PUBLIC_API_PORT,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
  },

  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "/api/:path*",
    },
  ],
  headers: async () => {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,PUT,POST,DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,PUT,POST,DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
