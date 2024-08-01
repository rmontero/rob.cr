/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
      },
    ];
  },
  experimental: {
    metadataBase: new URL('https://rob.cr'),
  },
};

module.exports = nextConfig;
