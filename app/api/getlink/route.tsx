// app/api/getlink/route.ts

import { NextResponse } from "next/server";
import { SidebarLinks } from "@/app/types/api"; // Kiểu dữ liệu bạn tự định nghĩa

const WORDPRESS_API = "https://cms.jx1tieungao.com/wp-json/acf/v3/pages/6";

export async function GET() {
  try {
    const res = await fetch(WORDPRESS_API, { cache: "no-store" }); // không cache
    if (!res.ok) {
      throw new Error("Failed to fetch from WordPress API");
    }

    const json = await res.json();

    const data: SidebarLinks = json.acf;
    // console.log("Data from WordPress API:", data); // Kiểm tra dữ liệu nhận được

    return NextResponse.json<SidebarLinks>(data);
  } catch (error) {
    console.error("Error fetching from WordPress API:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from WordPress" },
      { status: 500 }
    );
  }
}
