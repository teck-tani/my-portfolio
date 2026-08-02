import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
  images: {
    // Vercel Hobby 플랜의 이미지 최적화 변환 한도를 넘기면 /_next/image 가
    // 402(OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED)를 반환해 모든 이미지가 깨진다.
    // public/ 정적 파일을 그대로 서빙해 한도와 무관하게 만든다.
    unoptimized: true,
  },
};

export default nextConfig;
