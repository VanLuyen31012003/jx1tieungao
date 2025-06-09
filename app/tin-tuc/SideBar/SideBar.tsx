import { SidebarLinks } from "@/app/types/api";
import Link from "next/link";



async function fetchBannerData(): Promise<SidebarLinks> {
  const response = await fetch("https://jx1tieungao.com/api/getlink", {
    //   const response = await fetch("http://localhost:3000/api/getlink", {
    cache: "no-store", // Đảm bảo dữ liệu luôn được fetch mới
  });
  const apiData: SidebarLinks = await response.json();
  return apiData;
}
export default async function SideBar() {
    const data = await fetchBannerData();

    return (
        <div className="md:flex hidden z-10 w-[12vw] h-[20vw] bg-[url('/assets/tintuc/aside.png')] hover:scale-105 duration-300  flex-col bg-contain fixed top-1/2 -translate-y-2/3 right-0">
            <Link href={data.napthe} className="text-[1.3vw] hover:scale-110 duration-300 hover:brightness-120 font-bold absolute top-[3.8vw] right-[2vw]"> NẠP THẺ</Link>
            <Link href={data.dangky} className="text-[1vw] hover:scale-110 duration-300 text-[#F2E19F] font-bold absolute top-[7.6vw] right-[2.4vw]"> ĐĂNG KÝ </Link>
            <Link href="/tin-tuc" className="text-[1vw] hover:scale-110 duration-300 text-[#F2E19F] font-bold absolute top-[10.2vw] right-[2.8vw]"> TIN TỨC</Link>
            <Link href={data.fanpage} className="text-[1vw] hover:scale-110 duration-300 text-[#F2E19F] font-bold absolute top-[12.8vw] right-[1.9vw]"> CỘNG ĐỒNG</Link>
            <Link href={data.fanpage} className="text-[1vw] hover:scale-110 duration-300 text-[#F2E19F] font-bold absolute top-[15.6vw] right-[2.6vw]"> FANPAGE</Link>
            </div>
        
        
    );
}