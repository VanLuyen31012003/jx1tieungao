"use client";

import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { PostResponse } from "@/app/types/api";
import Link from "next/link";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function Event() {
  const [activeType, setActiveType] = useState("su-kien");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [loading, setLoading] = useState(false);

  // Map giữa loại tin và category ID WordPress
  const categoryMap = {
    "su-kien": 3, // ID category "Sự kiện" trong WordPress
    "tin-tuc": 4  // ID category "Tin tức" trong WordPress
  };

  // Fetch dữ liệu từ API dựa trên loại được chọn
  const fetchPostsByCategory = async (type: string) => {
    setLoading(true);
    try {
      const categoryId = categoryMap[type as keyof typeof categoryMap];
      if (!categoryId) {
        console.error("Invalid category type");
        setPosts([]);
        return;
      }
      
      const apiUrl = `/api/post?category=${categoryId}`;
      const res = await fetch(apiUrl);
      
      if (!res.ok) throw new Error("Failed to fetch data");
      
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]); // Reset posts nếu có lỗi
    } finally {
      setLoading(false);
    }
  };

  // Gọi API khi loại tin được thay đổi
  useEffect(() => {
    fetchPostsByCategory(activeType);
  }, [activeType]);

  // Chuyển đổi dữ liệu API thành format newsItems
  const convertPostsToNewsItems = (posts: PostResponse[]) => {
    return posts.map(post => {
      // Loại bỏ các thẻ HTML trong tiêu đề
      const title = post.title?.rendered 
        ? post.title.rendered.replace(/<[^>]*>/g, '')
        : 'Không có tiêu đề';
        
      return {
        title: title,
        date: new Date(post.date).toLocaleDateString('vi-VN', {day: '2-digit', month: '2-digit', year: '2-digit'}),
        type: activeType, // Sử dụng activeType thay vì phân loại lại
        slug: post.slug,
        id: post.id
      };
    });
  };

  // Dữ liệu mẫu (sẽ bị ghi đè khi có dữ liệu từ API)
  const defaultNewsItems = [
    { title: "[Tính năng] Boss Tiểu Ngạo", date: "13-04-25", type: "su-kien", slug: "" },
    { title: "Event Tháng 4", date: "13-04-25", type: "su-kien", slug: "" },
    { title: "[Tính Năng] Tân Thủy Hoàng", date: "09-04-25", type: "su-kien", slug: "" },
    { title: "[Tính năng] Công Thành Chiến", date: "06-04-25", type: "su-kien", slug: "" },
    { title: "[Tính năng] Môn Phái", date: "09-02-25", type: "su-kien", slug: "" },
  ];

  // Sử dụng dữ liệu từ API nếu có, nếu không thì dùng dữ liệu mẫu
  const newsItems = posts.length > 0 ? convertPostsToNewsItems(posts) : defaultNewsItems;
  
  // Lọc tin tức dựa trên từ khóa tìm kiếm (không cần lọc theo loại vì đã lấy theo API)
  // Thêm function này vào đầu component Event
const removeVietnameseTones = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};

// Thay thế logic filter hiện tại
const filteredItems = newsItems.filter(item => {
  if (!searchQuery.trim()) return true;
  
  const searchText = removeVietnameseTones(searchQuery.toLowerCase().trim());
  const itemTitle = removeVietnameseTones(item.title.toLowerCase());
  
  // Tìm kiếm theo từng từ (split by space)
  const searchWords = searchText.split(/\s+/);
  
  return searchWords.every(word => 
    itemTitle.includes(word)
  );
});

  // Xử lý khi thay đổi loại tin tức
  const handleTypeChange = (type: string) => {
    if (type === activeType) return; // Tránh re-fetch không cần thiết
    
    flushSync(() => {
      setActiveType(type);
    });
  };

  // Xử lý khi thay đổi từ khóa tìm kiếm
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-[url('/assets/home/bgnen.jpg')] w-full py-8 md:py-0 min-h-[100vw] md:min-h-0 md:h-[40vw] bg-black bg-cover">
      {/* Tiêu đề */}
      <div className="mx-auto w-[90vw] md:w-[44vw] h-[20vw] md:h-[8vw] bg-[url('/assets/home/event.png')] text-[4vw] md:text-[2vw] text-[#289DB8] font-bold bg-contain bg-no-repeat flex items-center justify-center bg-center">
        TIN TỨC - SỰ KIỆN
      </div>

      {/* Nội dung chính */}
      <div className="mx-auto w-[90vw] gap-6 md:gap-0 flex flex-col md:flex-row">
        {/* Banner bên trái */}
        <div className="w-full md:w-1/2 h-[45vw] md:h-[28vw] bg-[url('/assets/home/eventslide.png')] bg-cover bg-center rounded-lg"></div>
        
        {/* Phần tin tức bên phải */}
        <div className="w-full md:w-1/2 md:h-[28vw] flex flex-col px-4 md:px-[2vw] text-[#424242]">
          {/* Header với tabs */}
          <div className="w-full h-[10vw] md:h-[3vw] flex gap-2 md:gap-[2vw]">
            <button 
              className={`text-[3vw] md:text-[1vw] w-[22vw] md:w-[5.2vw] h-[7vw] md:h-[2.2vw] font-medium rounded-xl md:rounded-2xl transition-colors ${activeType === "su-kien" ? "bg-[#8dcbe0] text-white" : "bg-transparent text-[#424242] border border-gray-300"}`}
              onClick={() => handleTypeChange("su-kien")}
            >
              Sự kiện
            </button>
            <button 
              className={`text-[3vw] md:text-[1vw] w-[22vw] md:w-[5vw] h-[7vw] md:h-[2.2vw] font-medium rounded-xl md:rounded-2xl transition-colors ${activeType === "tin-tuc" ? "bg-[#8dcbe0] text-white" : "bg-transparent text-[#424242] border border-gray-300"}`}
              onClick={() => handleTypeChange("tin-tuc")}
            >
              Tin tức
            </button>
          </div>

          {/* Danh sách tin tức */}
          <div className="w-full h-[50vw] md:h-[22vw] overflow-y-auto scroll-container  rounded-lg p-2">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <span className="text-[3vw] md:text-[1.2vw] text-gray-500">Đang tải...</span>
              </div>
            ) : filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/tin-tuc/${item.slug || '#'}`}
                  className="flex justify-between hover:text-red-700 hover:font-semibold items-center border-b border-[#424242] py-3 md:py-2"
                >
                  <span className="text-[2.8vw] md:text-[1vw] font-medium truncate max-w-[70%]">{item.title.replace(/&#8211;/g, "–").replace(/&amp;/g, "&")}</span>
                  <span className="text-[2.2vw] md:text-[0.9vw] font-normal">{item.date}</span>
                </Link>
              ))
            ) : (
              <div className="flex justify-center items-center h-full">
                <span className="text-[3vw] md:text-[1vw] text-gray-500">Không tìm thấy kết quả phù hợp</span>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Gõ tin tức hoặc sự kiện cần tìm"
              className="w-full px-2 md:px-[1vw] py-2 md:py-[0.6vw] pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-[2.8vw] md:text-base"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="absolute right-2 top-0 h-full flex items-center">
              <IoSearchCircleOutline className="text-gray-500 w-[8vw] h-[8vw] md:w-[35px] md:h-[35px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}