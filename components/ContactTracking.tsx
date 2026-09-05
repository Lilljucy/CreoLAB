"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactTracking() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link || typeof window.gtag !== "function") return;

      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("mailto:")) {
        window.gtag("event", "kontakt_email", { link_url: href });
      } else if (href.startsWith("tel:")) {
        window.gtag("event", "kontakt_telefon", { link_url: href });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
