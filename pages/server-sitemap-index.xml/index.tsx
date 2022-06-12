// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemapIndex } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemapIndex(ctx, [
    'https://138.68.106.100:1338/wp-json/wp/v2/',
  ])
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}