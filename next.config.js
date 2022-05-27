/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["138.68.106.100", "206.189.56.129"],
  },
  serverRuntimeConfig: {
    alfa: process.env.NODE_TLS_REJECT_UNAUTHORIZED='0',
  }
}

module.exports = nextConfig
