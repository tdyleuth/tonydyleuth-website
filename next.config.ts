/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // VERY important for static export
  images: {
    unoptimized: true, // if you're using <Image>, this is needed for static export
  },
};

module.exports = nextConfig;