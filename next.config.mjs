/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    appName: process.env.APP_NAME
  },
};

export default nextConfig;
