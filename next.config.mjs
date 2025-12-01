/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    qualities: [20, 75, 100],
  },
};

export default nextConfig;
