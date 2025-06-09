import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full bg-[#0C1117] flex justify-center items-center py-6 md:py-10 md:h-[20vw]">
            <div className="w-[95%] md:w-[80%] flex flex-col md:flex-row md:justify-end items-center md:h-[16vw]">
                {/* Logo */}
                <div className="w-[100px]  h-[100px] md:w-[10vw] md:h-auto relative  md:mb-0">
                    <Image 
                        src={'/assets/tintuc/icon-app.png'} 
                        alt="JX1 Tiếu Ngạo Logo" 
                        width={192} 
                        height={192} 
                        className="md:w-full md:h-full w-[80%] H-[80%] object-contain"
                    />
                </div>
                
                {/* Divider line - hidden on mobile */}
                <div className="hidden md:block md:w-[0.3vw] md:h-[50%] md:ml-[1vw]">
                    <Image 
                        src={'/assets/tintuc/line_footer.png'} 
                        alt="" 
                        width={7} 
                        height={303} 
                        className="w-full h-full" 
                    />
                </div>
                
                {/* Text content */}
                <div className="flex flex-col justify-center md:justify-end md:h-[50%] items-center md:items-start md:ml-[2vw] space-y-1 text-center md:text-left w-[90%] md:w-auto">
                    <h1 className="text-base md:text-lg text-[#F0BB35] leading-tight font-['Times_New_Roman']">
                        JX1 Tiếu Ngạo Mobile
                    </h1>
                    <p className="text-[#FCE6CB] text-xs md:text-sm leading-tight font-['Times_New_Roman']">
                        JX1 Tiếu Ngạo Mobile | Game Mobile Kiếm Hiệp 2024 | Phiên Bản Cày Cuốc | Đồ Xanh - Hiệp Cốt - Nhu Tình - Định Quốc - An Bang - Hoàng Kim Môn Phái
                    </p>
                    <p className="text-[#FCE6CB] text-xs md:text-sm leading-tight font-['Times_New_Roman']">
                        Website: https://jx1tieungao.com
                    </p>
                </div>
            </div>
        </div>
    );
}