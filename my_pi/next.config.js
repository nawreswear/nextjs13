/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images:{ 
    domains:["fakestoreapi.com","api.lorem.space"], 
    } 
}

module.exports = nextConfig
