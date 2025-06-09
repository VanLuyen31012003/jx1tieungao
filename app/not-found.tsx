import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background với overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/assets/tintuc/background.jpg')", // Thay đổi đường dẫn đến hình nền
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
        }}
      ></div>

     

      {/* Nội dung chính */}
      <div className="z-20 text-center px-4 py-10 max-w-2xl relative">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/assets/tintuc/icon-app.png"
            alt="Jx1 tiếu ngạo mobile Logo"
            width={120}
            height={120}
            className="mx-auto animate-bounce drop-shadow-lg "
            priority
          />
        </div>

        {/* Số 404 với hiệu ứng */}
        <h1 className="text-6xl md:text-8xl font-bold text-red-600 mb-6 relative">
          <span className="opacity-80">404</span>
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent top-1/2 -translate-y-1/2"></div>
        </h1>

        {/* Khung nội dung */}
        <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/30 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
            JX1 Tiếu Ngạo Mobile - Không tìm thấy trang
          </h2>
                  <p className="text-gray-300 text-lg mb-4">
                      Thật tiếc, trang bạn tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
        </div>

        {/* Nút quay về */}
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-md 
                   font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 
                   border-2 border-yellow-500/50 relative group"
        >
          <span className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md blur opacity-30 
                       group-hover:opacity-100 transition duration-500"></span>
          <span className="relative flex items-center justify-center">
            {/* Icon nếu có sẵn, nếu không thì bỏ đoạn Image này */}
            <Image
              src="/assets/tintuc/icon-app.png"
              alt="Icon"
              width={24}
              height={24}
              className="mr-2"
              priority
            />
            Quay Về Trang Chủ
          </span>
        </Link>

        {/* Phần trang trí viền */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-yellow-500/60"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-yellow-500/60"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-yellow-500/60"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-yellow-500/60"></div>
      </div>

      {/* Phần trang trí phía dưới */}
      <div className="absolute bottom-4 text-center text-gray-400 text-xs z-20">
        <p>© {new Date().getFullYear()} JX1 Tiếu Ngạo Mobile</p>
      </div>
    </div>
  );
}