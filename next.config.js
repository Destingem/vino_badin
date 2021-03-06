/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["138.68.106.100", "206.189.56.129"],
  },
  serverRuntimeConfig: {
    alfa: process.env.NODE_TLS_REJECT_UNAUTHORIZED='0',
  },
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
  siteUrl: "https://www.vinarstvibadin.cz" || 'https://vinarstvibadin.cz',
  generateRobotsTxt: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
}

module.exports = nextConfig
