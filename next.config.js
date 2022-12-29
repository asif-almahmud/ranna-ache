/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "munchiesprod.s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "munchiesprod.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "api.lorem.space",
      },
    ],
    // domains: [
    //   "images.unsplash.com",
    //   "munchiesprod.s3.ap-southeast-1.amazonaws.com",
    // ],
  },
};

module.exports = nextConfig;
