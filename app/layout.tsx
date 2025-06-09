import "./css/style.css";
import "./css/globals.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@/components/Analytics";

const roboto = Roboto({
  subsets: ["latin"], // Tùy chỉnh theo ngôn ngữ bạn cần
  weight: ["400", "700"], // Các độ đậm bạn muốn sử dụng
  variable: "--font-roboto", // Tùy chọn biến CSS
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
    
      <body>
        <>{children}</>
        <Analytics/>
      </body>
    </html>
  );
}
