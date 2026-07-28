"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-1E07SV9Y6G";
const STORAGE_KEY = "creolab-aura-cookie-consent";

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "accepted") {
      setEnabled(true);
    }

    function onConsent(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setEnabled(detail === "accepted");
    }

    document.addEventListener("cookieconsent", onConsent);
    return () => document.removeEventListener("cookieconsent", onConsent);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
