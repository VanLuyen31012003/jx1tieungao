import { SidebarLinks } from "@/app/types/api";
import BannerClient from "./BannerClient";
async function fetchBannerData(): Promise<SidebarLinks> {
  const response = await fetch("https://jx1tieungao.com/api/getlink", {
    //   const response = await fetch("http://localhost:3000/api/getlink", {    cache: "no-store", // Đảm bảo dữ liệu luôn được fetch mới
  });
  const apiData: SidebarLinks = await response.json();
  return apiData;
}

export default async function Banner() {
  // Fetch data ở server component
  const data = await fetchBannerData();
  
  // Render client component và truyền data dưới dạng props
  return <BannerClient bannerData={data} />;
}