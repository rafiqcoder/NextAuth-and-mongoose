/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    MONGO_URI: "mongodb+srv://nextauth:nextauth@cluster0.kwehlhs.mongodb.net/",
    NEXTAUTH_SECRET: "rafiqcoder",
  }
};

module.exports = nextConfig;
