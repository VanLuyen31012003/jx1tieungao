import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("category") || "4"; // Mặc định category = 4 nếu không có

  try {
    const response = await fetch(`${process.env.BASE_URL_WP}/posts?categories=${categoryId}&per_page=100`);

    if (!response.ok) throw new Error("Lỗi khi gọi API WordPress");

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Lỗi proxy API:", error);
    return NextResponse.json({ error: "Không thể lấy dữ liệu" }, { status: 500 });
  }
}
