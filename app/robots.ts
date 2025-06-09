// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://jx1tieungao.com/sitemap.xml',
    host: 'https://jx1tieungao.com',
  };
}
