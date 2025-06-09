"use client";
import Link from "next/link";
import { useState } from "react";
import { SidebarLinks } from "@/app/types/api";

interface BannerClientProps {
  bannerData: SidebarLinks;
}

export default function BannerClient({ bannerData }: BannerClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:bg-[url('/assets/tintuc/background.jpg')] bg-[url('/assets/tintuc/m-background.jpg')] overflow-hidden md:min-h-[65vh] bg-cover min-h-[50vh] xl:min-h-screen bg-top md:bg-center flex flex-col justify-between">
      <div className="absolute md:block hidden opacity-45 bg-black h-[6vw] w-full"></div>
      <div className="relative hidden h-[6vw] inset-3 md:flex justify-between px-[6vw]">
        <div className="flex gap-[1vw]">
          <div className="bg-[url('/assets/home/logo.png')] w-[8vw] bg-contain bg-no-repeat h-[6vw] translate-y-1/3"></div>
          <div className="bg-[url('/assets/tintuc/rating.png')] w-[8vw] bg-contain bg-no-repeat h-[6vw]"></div>
        </div>
        <ul className="flex justify-around gap-[2vw] items-center text-[1vw] text-white font-semibold">
          <Link href="/">
            <li className="flex gap-[0.3vw] hover:text-[#DED38B] items-center justify-center text-center">
              TRANG CHỦ
            </li>
          </Link>
          <Link href="/tin-tuc">
            <li className="flex gap-[0.3vw] items-center justify-center text-[#DED38B]">
              TIN TỨC
            </li>
          </Link>
          <Link href={bannerData?.groupfb}>
            <li className="flex gap-[0.3vw] hover:text-[#DED38B] items-center justify-center">
              CỘNG ĐỒNG
            </li>
          </Link>
          <Link href={bannerData?.fanpage}>
            <li className="flex gap-[0.3vw] hover:text-[#DED38B] items-center justify-center">
              FANPAGE
            </li>
          </Link>
        </ul>
      </div>

      {/* mobile */}
      <div className="md:hidden flex items-center justify-between relative bg-[#21524d] h-12 bg-nav bg-top bg-cover bg-no-repeat">
        <div className="w-[60px] h-[60px] flex items-center justify-center">
          <button onClick={toggleMenu} className="p-2 flex flex-col justify-center items-center">
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
        
        <div className="w-[60px] h-[60px] bg-[url('/assets/tintuc/icon-app.png')] bg-no-repeat bg-contain"></div>
        
        <div className="flex items-center justify-around mx-auto">
          <a
            target="_blank"
            href={bannerData?.napthe || "https://napthe.inplay.vn/"}
            title="Hỗ trợ"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-bold !text-[#21524d]"
          >
            <div className="overflow-hidden w-full max-w-[76px]">
              <div className="bg-list-icon-mobile bg-cover bg-no-repeat bg-[position:0_-639px] w-[88px] h-[31px]"></div>
            </div>
          </a>
          <a
            target="_blank"
            href={bannerData?.appstore || "https://jx1tieungaomobile.com/download"}
            title="Tải game"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-bold !text-[#21524d]"
          >
            <div className="overflow-hidden w-full max-w-[76px]">
              <div className="bg-list-icon-mobile bg-cover bg-no-repeat bg-[position:0_-546px] w-[88px] h-[31px]"></div>
            </div>
          </a>
          <Link
            target="_blank"
            href='/'
            title="Trang chủ"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-bold !text-[#21524d]"
          >
            <div className="overflow-hidden w-full max-w-[45px]">
              <div className="bg-list-icon-mobile bg-cover bg-no-repeat bg-[position:0_-608px] w-[88px] h-[31px]"></div>
            </div>
          </Link>
          <a
            target="_blank"
            href={bannerData?.fanpage || "https://www.facebook.com/jx1tieungaomobile"}
            title="Fanpage"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-bold !text-[#21524d]"
          >
            <div className="overflow-hidden w-full max-w-[45px]">
              <div className="bg-list-icon-mobile bg-cover bg-no-repeat bg-[position:0_-578px] w-[88px] h-[30px]"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-12 left-0 w-full z-50 bg-[#21524d]/95 border-t border-[#0a3c38]">
          <ul className="flex flex-col text-white font-no">
            <li className="border-b border-[#0a3c38]">
              <Link href="/" className="block text-center py-4 text-white hover:bg-[#183f3b]">
                Trang chủ
              </Link>
            </li>
            <li className="border-b border-[#0a3c38]">
              <Link href="/tin-tuc" className="block text-center py-4 text-white hover:bg-[#183f3b]">
                Tin tức
              </Link>
            </li>
            <li className="border-b border-[#0a3c38]">
              <Link href={bannerData?.groupfb} className="block text-center py-4 text-white hover:bg-[#183f3b]">
                Cộng đồng
              </Link>
            </li>
            <li className="border-b border-[#0a3c38]">
              <Link href={bannerData?.fanpage || "https://www.facebook.com/jx1tieungaomobile"} className="block text-center py-4 text-white hover:bg-[#183f3b]">
                Fanpage
              </Link>
            </li>
            <li className="border-b border-[#0a3c38]">
              <a 
                href={bannerData?.fanpage}
                className="block text-center py-4 text-white hover:bg-[#183f3b]" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hỗ trợ
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* code cho bảng */}
      <div className="flex relative mb-[2vw] mx-auto w-[60vw] h-[24vw]  md:w-[30vw] md:h-[12vw] bg-contain bg-no-repeat bg-center gap-2 justify-center items-center">
        <Link href={bannerData.dangky} className=" w-[20vw] md:w-[10vw] hover:brightness-125 bg-[url('/assets/tintuc/btn-tai-game.png')] bg-contain bg-no-repeat bg-bottom h-full"></Link>
        <div className="w-[20vw] md:w-[10vw] h-full flex flex-col">
          <Link href={bannerData.appstore} className="w-[20vw] md:w-[10vw] hover:brightness-125  bg-[url('/assets/tintuc/button-ios.png')] bg-contain bg-no-repeat bg-bottom h-[8vw] md:h-[4vw]"></Link>
          <Link href={bannerData.chplay} className="w-[20vw] md:w-[10vw] hover:brightness-125 bg-[url('/assets/tintuc/button-android.png')] h-[8vw] md:h-[4vw] bg-contain bg-no-repeat bg-bottom"></Link>
          <Link href={bannerData.apkdownload} className="w-[20vw] md:w-[10vw] hover:brightness-125 bg-[url('/assets/tintuc/button-gialap.png')] h-[8vw] md:h-[4vw] bg-contain bg-no-repeat bg-bottom"></Link>
        </div>
        <Link href={bannerData.napthe} className="w-[20vw] md:w-[10vw] hover:brightness-125 bg-[url('/assets/tintuc/button-knb.png')] bg-contain bg-no-repeat bg-bottom h-full"></Link>
      </div>
    </div>
  );
}