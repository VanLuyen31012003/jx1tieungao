import { TiHomeOutline } from "react-icons/ti";
import { TiGift } from "react-icons/ti";
import { MdOutlineSupportAgent } from "react-icons/md";
import Link from "next/link";
import { SidebarLinks } from "@/app/types/api";

async function fetchBannerData(): Promise<SidebarLinks | undefined> {
  try {
    const response = await fetch("https://jx1tieungao.com/api/getlink", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("API error");
    return await response.json();
  } catch {
    return undefined;
  }
}

export default async function Banner() {
  const data = await fetchBannerData();

  // fallback nếu api lỗi
  const groupfb = data?.groupfb || "#";
  const napthe = data?.napthe || "#";
  const appstore = data?.appstore || "#";
  const chplay = data?.chplay || "#";
  const apkdownload = data?.apkdownload || "#";

  return (
    <div className="bg-[url('/assets/home/banner.jpg')] bg-cover min-h-screen bg-center flex flex-col justify-between">
      <div className="bg-white opacity-85 h-[6vw] inset-3 flex justify-between px-[6vw]">
        <div className="bg-[url('/assets/home/logo.png')] w-[8vw] bg-contain bg-no-repeat h-[6vw] translate-y-1/3"></div>
        <ul className="flex justify-around text-[#424242] gap-[2vw] items-center text-[1vw] font-bold">
          <Link href="/">
            <li className="flex gap-[0.3vw] hover:text-red-600 items-center justify-center text-center">
              <TiHomeOutline size={24} /> TRANG CHỦ
            </li>
          </Link>
          <Link href="/tin-tuc">
            <li className="flex gap-[0.3vw] hover:text-red-600 items-center justify-center">
              <TiGift size={24} /> TIN TỨC
            </li>
          </Link>
          <Link href={groupfb}>
            <li className="flex gap-[0.3vw] hover:text-red-600 items-center justify-center">
              <MdOutlineSupportAgent size={24} /> HỖ TRỢ
            </li>
          </Link>
        </ul>
      </div>

      {/* Desktop buttons */}
      <div className="flex relative bg-[url('/assets/home/bannerabove.png')] p-5  bg-contain bg-no-repeat bg-center gap-2 justify-center items-center">
        <Link
          href={napthe}
          className="transition duration-300 hover:brightness-110 bg-[url('/assets/home/button.png')] bg-[length:565%_685%] bg-[position:399%_15%] w-[180px] aspect-[18/13]"
        ></Link>
        <div className="flex flex-col justify-center items-center gap-y-2.5 w-[180px] aspect-[18/13]">
          <Link
            href={appstore}
            className="transition duration-300 hover:brightness-110 bg-[url('/assets/home/button.png')] bg-[length:422%_1503%] bg-[position:80%_40.2%] w-full aspect-[18/6]"
          ></Link>
          <Link
            href={chplay}
            className="transition duration-300 hover:brightness-110 bg-[url('/assets/home/button.png')] bg-[length:424%_1303%] bg-[position:80%_48%] w-full aspect-[18/6]"
          ></Link>
        </div>
        <Link
          href={apkdownload}
          className="transition duration-300 hover:brightness-110 bg-[url('/assets/home/button.png')]  bg-[length:565%_685%] bg-[position:399%_15%] w-[180px] aspect-[18/13]"
        ></Link>
      </div>
    </div>
  );
}
