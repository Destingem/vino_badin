import { getServerSideSitemapIndex ,getServerSideSitemap } from "next-sitemap";

const siteUrl = "https://vinatstvibadin.cz/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    additionalPaths: async (config) => [
      await config.transform(config, "/comments"),
    ],
   
  },
};