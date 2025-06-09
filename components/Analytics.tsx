"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
    }
  }

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID!;

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
  }, [pathname]);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  );
}
