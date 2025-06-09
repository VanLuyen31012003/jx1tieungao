"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Kiểu dữ liệu cho dữ liệu từ WordPress API
interface PostResponse {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  categories: number[];
}

// Kiểu dữ liệu cho tin tức hiển thị
interface NewsItem {
  title: string;
  date: string;
  type: string;
  slug?: string;
  id?: number;
}

export default function Event() {
    const [activeTap, setActiveTap] = useState("tin-tuc");
    const [posts, setPosts] = useState<PostResponse[]>([]);
    const [loading, setLoading] = useState(false);

    // Map giữa loại tin và category ID WordPress
    const categoryMap = {
      "tin-tuc": 4, // ID category "Tin tức" trong WordPress
      "su-kien": 3  // ID category "Sự kiện" trong WordPress
    };

    // Fetch dữ liệu từ API dựa trên loại tin
    const fetchPostsByCategory = async (type: string) => {
      setLoading(true);
      try {
        const categoryId = categoryMap[type as keyof typeof categoryMap] || 4; // Mặc định là tin tức
        const res = await fetch(`/api/post?category=${categoryId}`);
        
        if (!res.ok) throw new Error("Failed to fetch data");
        
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        setPosts([]); // Reset posts nếu có lỗi
      } finally {
        setLoading(false);
      }
    };

    // Chuyển đổi dữ liệu từ API thành format hiển thị
   // Chuyển đổi dữ liệu từ API thành format hiển thị
const convertPostsToNewsItems = (posts: PostResponse[]): NewsItem[] => {
    // Tạo một mảng mới để chứa các bài viết đã được xử lý
    const newsItems: NewsItem[] = [];
    
    posts.forEach(post => {
      const categories = post.categories || [];
      
      // Nếu bài viết thuộc category "Tin tức" (ID 4)
      if (categories.includes(4)) {
        newsItems.push({
          title: post.title?.rendered || 'Không có tiêu đề',
          date: new Date(post.date).toLocaleDateString('vi-VN', {day: '2-digit', month: '2-digit', year: '2-digit'}),
          type: 'tin-tuc',
          slug: post.slug,
          id: post.id
        });
      }
      
  
      if (categories.includes(3)) {
        newsItems.push({
          title: post.title?.rendered || 'Không có tiêu đề',
          date: new Date(post.date).toLocaleDateString('vi-VN', {day: '2-digit', month: '2-digit', year: '2-digit'}),
          type: 'su-kien',
          slug: post.slug,
          id: post.id
        });
      }
    });
    
    return newsItems;
  };

    // Gọi API khi loại tin thay đổi
    useEffect(() => {
      fetchPostsByCategory(activeTap);
    }, [activeTap]);

    // Dữ liệu mẫu sử dụng khi chưa có dữ liệu từ API
    const defaultItems: NewsItem[] = [
        
    ];

    // Sử dụng dữ liệu từ API nếu có, nếu không thì dùng dữ liệu mẫu
    const newsItems = posts.length > 0 ? convertPostsToNewsItems(posts) : defaultItems;

    return (
        <div className="w-full backdrop-brightness-110 backdrop-contrast-125 backdrop-saturate-125 h-[50vw] bg-cover bg-[url('/assets/tintuc/layer.jpg')] ">
            <div className=" relative w-full md:w-[70vw]  h-[50vw]   bg-[url('/assets/tintuc/bg-main-sub.jpg')] bg-no-repeat bg-cover  md:bg-contain mx-auto">
                <div className="w-full h-[6vw] flex items-center justify-center  mx-auto ">
                <div className=" w-[40vw] md:w-[30vw] h-[4vw]  mx-auto items-center flex justify-center gap-[1vw] ">
                    <Image src="/assets/tintuc/sidelefttitle.png" alt="" width={175} height={22} className="w-[12vw] md:w-[10vw]"/>
                    <div className=" text-[2.5vw] md:text-[1.8vw] text-white font-bold"> TIN TỨC</div>
                    <Image src="/assets/tintuc/siderighttitle.png" alt="" width={175} height={22} className="w-[12vw] md:w-[10vw]"/>
               </div>
                </div>
                <div className="w-full bg-[#215950] h-[5vw] flex items-center justify-center  mx-auto  ">
                    <div className="w-[30vw] h-[4vw]  mx-auto items-center flex justify-center gap-[1vw]">
                        <div
                        onClick={() => setActiveTap("tin-tuc")}
                        className={`cursor-pointer w-[13vw] md:w-[10vw] h-full flex items-center justify-center text-[2vw] md:text-[1vw]  font-bold text-center
                            ${activeTap === "tin-tuc"
                            ? "bg-[url('/assets/tintuc/tab-active.png')] bg-no-repeat bg-center bg-contain text-[#CF4914]"
                            : "text-white"
                            }
                        `}
                        >
                        Tin Tức
                        </div>
                        <div
                        onClick={() => setActiveTap("su-kien")}
                        className={`cursor-pointer w-[13vw] md:w-[10vw] h-full flex items-center justify-center text-[2vw] md:text-[1vw] font-bold text-center
                            ${activeTap === "su-kien"
                            ? "bg-[url('/assets/tintuc/tab-active.png')] bg-no-repeat bg-center bg-contain text-[#CF4914]"
                            : "text-white"
                            }
                        `}
                        >
                        Sự Kiện
                        </div>
                    </div>
                </div>  
                <div className="w-[80%] h-[38vw] mx-auto overflow-y-auto scroll-container">
                    {loading ? (
                        <div className="w-full h-[10vw] flex items-center justify-center text-black text-[1.5vw]">
                            Đang tải dữ liệu...
                        </div>
                    ) : newsItems.length > 0 ? (
                        newsItems.filter(item => item.type === activeTap).map((item, index) => (
                            <Link href={`/tin-tuc/${item.slug}`} key={index} className="w-full hover:text-red-700 h-[6vw] md:h-[4vw] border-b-10 border-b-2 border-[#808080] flex items-center justify-between px-[2vw] text-black font-medium text-[2vw] md:text-[1.2vw]">
                                <div className="w-full md:w-[80%] h-full flex items-center gap-[1vw]">
                                    <div>{item.title.replace(/&#8211;/g, "–").replace(/&amp;/g, "&")}</div>
                                </div>
                                <div>{item.date}</div>
                            </Link>
                        ))
                    ) : (
                        <div className="w-full h-[10vw] flex items-center justify-center text-white text-[1.5vw]">
                            Không tìm thấy dữ liệu
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}