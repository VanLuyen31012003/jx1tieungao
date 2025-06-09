// app/sitemap.xml/route.ts

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jx1tieungao.com'; // Domain chính thức của trang
  
  // Các URL tĩnh
  const staticPaths = [
    '/', // Trang chủ
    '/tin-tuc', // Trang tin tức
    '/su-kien/danh-sach', // Danh sách sự kiện
  ];
  
  // Lấy danh sách tin tức và sự kiện từ API WordPress
  let dynamicPaths: string[] = [];
  
  // Định nghĩa kiểu dữ liệu WordPress post để tránh lỗi TypeScript
interface WordPressPost {
    id: number;
    slug: string;
    date: string;
    modified: string;
    title: { rendered: string };
  }
  
  try {
    // Lấy bài viết tin tức (category ID 4)
    const newsRes = await fetch(`${process.env.BASE_URL_WP || 'https://cms.jx1tieungao.com/wp-json/wp/v2'}/posts?categories=4&per_page=100`);
    if (newsRes.ok) {
      const newsPosts = await newsRes.json() as WordPressPost[];
      const newsPaths = newsPosts.map((post) => `/tin-tuc/${post.slug}`);
      dynamicPaths = [...dynamicPaths, ...newsPaths];
    }
    
    // Lấy bài viết sự kiện (category ID 3)
    const eventRes = await fetch(`${process.env.BASE_URL_WP || 'https://cms.jx1tieungao.com/wp-json/wp/v2'}/posts?categories=3&per_page=100`);
    if (eventRes.ok) {
      const eventPosts = await eventRes.json() as WordPressPost[];
      const eventPaths = eventPosts.map((post) => `/tin-tuc/${post.slug}`);
      dynamicPaths = [...dynamicPaths, ...eventPaths];
    }
  } catch (error) {
    console.error('Error fetching dynamic paths for sitemap:', error);
  }
  
  // Kết hợp URL tĩnh và động
  const allPaths = [...staticPaths, ...dynamicPaths];
  
  // Tạo các thẻ URL cho sitemap
  const urls = allPaths.map(
    (path) => `
      <url>
        <loc>${siteUrl}${path}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${path === '/' ? '1.0' : '0.8'}</priority>
      </url>
    `
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      ${urls.join('\n')}
    </urlset>
  `;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
