
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⬅ Skip ESLint check in production builds
  },
};

module.exports = nextConfig;
