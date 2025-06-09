import React from "react";
import Layout from "@/components/Layout";
import Banner from "./Banner/Banner";
import Footer from "../Footer/Footer";

const fetchDataBySlug = async (slug: string) => {
  if (!slug) return null;

  try {
    const response = await fetch(
      `${process.env.BASE_URL_WP}/posts?slug=${slug}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Lỗi khi gọi API: ${response.statusText}`);
    }

    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu:", error);
    return null;
  }
};

// Update Props type to make both params and searchParams Promises
type Props = {
  params: Promise<{ slug: string }>;
};

// Update generateMetadata to handle async params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params; // Resolve the params Promise
  const slug = resolvedParams.slug;

  if (!slug) return { title: "Tin tức chi tiết" };

  const data = await fetchDataBySlug(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jx1tieungao.net";

  return {
    title: data?.title?.rendered || "Tin tức chi tiết",
    description: data?.excerpt?.rendered || "Tin tức mới nhất về JX1 Tiếu Ngạo",
    alternates: {
      canonical: `${siteUrl}/tin-tuc/${slug}`,
    },
    metadataBase: new URL(siteUrl),
  };
}

const NewsDetailPage = async ({ params }: Props) => {
  const resolvedParams = await params; // Resolve the params Promise
  const slug = resolvedParams.slug;

  if (!slug) {
    return (
      <Layout>
        <Banner />
        <div className="text-center text-red-500 text-xl py-10">
          Không tìm thấy bài viết!
        </div>
        <Footer />
      </Layout>
    );
  }

  const post = await fetchDataBySlug(slug);

  const sanitizeContent = (html: string) => {
    if (!html) return "";
    return html.replace(/<hr\s*[^>]*>/g, "<br>");
  };

  if (!post) {
    return (
      <Layout>
        <Banner />
        <div className="text-center text-red-500 text-xl py-10">
          Không tìm thấy bài viết!
        </div>
        <Footer />
      </Layout>
    );
  }

  return (
    <>
      <Banner />
      <div className="md:hidden flex justify-center bg-[#f7f7f7]">
        <div className="relative md:top-[-350px] bg-event-block bg-contain bg-top bg-no-repeat text-[#444444] p-4 w-full md:max-w-[750px] min-h-[500px] h-full">
          <div
            className="p-9 headerfont1 animate-fadeIn"
            dangerouslySetInnerHTML={{
              __html: `<div class="p-4 text-2xl font-bold text-center">${post.title.rendered.replace(/&#8211;/g, "–").replace(/&amp;/g, "&")}</div>${sanitizeContent(
                post.content.rendered || ""
              )}`,
            }}
          ></div>
        </div>
      </div>
      <div className="bg-[url('/assets/image/Page_sukien/bg-nen2.png')] bg-cover ">
        <div className="hidden md:flex sm:bg-library-banner-main bg-no-repeat bg-center bg-cover mt-[-30px] w-full sm:h-[700px]"></div>
        <div className="flex justify-center bg-[url('/assets/image/Page_sukien/mayfooter.png')] bg-contain bg-no-repeat bg-bottom">
          <div className="hidden md:flex justify-center">
            <div className="z-20 -mt-[800px] bg-event-block-bangdang lg:min-w-[1000px] bg-contain bg-top bg-no-repeat text-[#444444] p-4 w-full md:max-w-[1000px] md:min-h-[900px] h-full">
              <div
                className="md:p-[145px] pt-[41px] pr-[40px] pl-[40px] animate-fadeIn headerfont1"
                dangerouslySetInnerHTML={{
                  __html: `<div class="p-4 text-xs md:text-2xl font-bold text-center md:top-[-470px] z-50">${post?.title.rendered.replace(/&#8211;/g, "–").replace(/&amp;/g, "&")}</div>${sanitizeContent(
                    post.content.rendered.replace(/&#8211;/g, "–").replace(/&amp;/g, "&") || ""
                  )}`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetailPage;