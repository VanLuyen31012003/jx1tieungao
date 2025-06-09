import { TiHomeOutline } from "react-icons/ti";
import { TiGift } from "react-icons/ti";
import { MdOutlineSupportAgent } from "react-icons/md";
import Link from "next/link";
import { SidebarLinks } from "@/app/types/api";
async function fetchBannerData(): Promise<SidebarLinks> {
    const response = await fetch("https://jx1tieungao.com/api/getlink", {
        //   const response = await fetch("http://localhost:3000/api/getlink", {
  
      cache: "no-store", // Đảm bảo dữ liệu luôn được fetch mới
    });
    const apiData: SidebarLinks = await response.json();
  
    // Chuyển đổi dữ liệu từ API thành định dạng phù hợp với DataBanner[]
    return apiData
  }
export default async function Banner() {
    const data= await fetchBannerData();

    return (
        <div className="md:bg-[url('/assets/home/banner.jpg')] bg-[url('/assets/home/bannermobile.jpg')]    bg-cover min-h-[75vh] md:min-h-[60vh]  bg-top  md:bg-center flex flex-col justify-between">
            <div className="hidden bg-white opacity-85 h-[6vw] inset-3 md:flex justify-between px-[6vw]">
                <div className="bg-[url('/assets/home/logo.png')] w-[8vw] bg-contain bg-no-repeat h-[6vw] translate-y-1/3"></div>
                <ul className="flex justify-around text-[#424242] gap-[2vw] items-center text-[1vw] font-bold">
                    <Link href="/">  <li className="hover:text-red-600 flex gap-[0.3vw] items-center justify-center text-center">
                        <TiHomeOutline size={24} /> TRANG CHỦ
                    </li></Link>
                  
                    <Link href="/tin-tuc" >
                    <li className="hover:text-red-600 flex gap-[0.3vw] items-center justify-center">
                        <TiGift size={24} /> TIN TỨC
                        </li></Link>   
                        <Link href={data?.fanpage} >
                    <li className="hover:text-red-600 flex gap-[0.3vw] items-center justify-center">
                        <MdOutlineSupportAgent size={24} /> HỖ TRỢ
                        </li>
                        </Link>
                </ul>
            </div>
            {/* mobile */}
            <div className="md:hidden h-[10vw]  inset-3 flex flex-col justify-items-start px-[1vw] items-center  " >
                <div className="flex justify-between   w-full   items-center text-[#424242] text-[3vw] font-bold">
                    <div className="w-[60px] h-[60px] bg-[url('/assets/home/logo.png')] bg-contain   bg-no-repeat">                 
                    </div>
                    <div className="flex items-center -mt-6 justify-start   ">
                    <Link href={data?.groupfb} className="scale-50 max-w-[40px]">
                       <div className="transition duration-300     hover:brightness-110 bg-[url('/assets/home/button.png')] bg-[length:auto] bg-[-322px_-636px] w-[70px] h-[70px]"></div>
                    </Link>
                    <Link href={"/"} className="scale-50 max-w-[40px]">
                    <div className="transition duration-300    hover:brightness-110 bg-[url('/assets/home/button.png')] bg-[length:auto] bg-[-394px_-636px] w-[70px] h-[70px]"></div>
                    </Link>
                        <Link href={data?.napthe } className="scale-50 max-w-[90px]" >
                       <div className="transition duration-300   hover:brightness-110  bg-[url('/assets/home/button.png')] bg-[length:auto]  bg-[-820px_-504px] w-[170px] h-[70px]"></div>
                    </Link>
                    <Link href={data?.apkdownload} className="scale-50 max-w-[120px]" >
                    <div className="transition duration-300  hover:brightness-110 bg-[url('/assets/home/button.png')] bg-[length:auto] bg-[-648px_-504px] w-[170px] h-[70px]"></div>
                    </Link>
                    </div>                
                </div>
                <div className="flex justify-between w-[50%] items-start text-[#424242] text-sm font-bold">
                <Link href="/tin-tuc" >
                    <div className="flex  items-center justify-center">
                        <TiGift size={24} /> TIN TỨC
                        </div></Link> 
                        <Link href="https://www.facebook.com/jx1tieungaomobile/" >
                    <div className="flex  items-center justify-center">
                        <MdOutlineSupportAgent size={24} /> HỖ TRỢ
                        </div>
                        </Link>
                </div>
                
                 <div>
                
            </div>
                
            </div>
           
        </div>
    );
}
