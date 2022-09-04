/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    GRAPHCMS_URI: process.env.GRAPHCMS_URI,
  },
  images: {
    loader: "akamai",
    path: ""
  },
};

module.exports = nextConfig;
