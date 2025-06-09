import Layout from "@/components/Layout";
import Banner from "@/components/TrangChu/Banner/Banner";
import Event from "@/components/TrangChu/Event/Event";
import Footer from "./tin-tuc/Footer/Footer";

export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jx1tieungao.com";
  
  return {
    title: "JX1 Tiếu Ngạo Mobile",
    description: "Game Mobile Kiếm Hiệp",
    icons: {
      icon: "/assets/tintuc/icon-app.png",
    },
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: 'JX1 Tiếu Ngạo Mobile',
      description: 'Game Mobile Kiếm Hiệp',
      images: [
        {
          url: '/assets/home/banner.jpg', // Sửa đường dẫn từ "asset" thành "assets"
          width: 1920,
          height: 1080,
          alt: 'Tiếu Ngạo',
        },
      ],
    },
  };
}

const HomePage = () => {
  return (
      <Layout>
      <Banner />
      <Event />
      <Footer/>
    </Layout>
    
  );
};

export default HomePage;
