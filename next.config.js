/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
      },
    ];
  }
};

module.exports = nextConfig;
