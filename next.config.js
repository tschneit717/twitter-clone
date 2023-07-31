/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'images.unsplash.com', 'res.cloudinary.com', 'media.licdn.com'],
  },
  dir: './src'
}

module.exports = nextConfig
