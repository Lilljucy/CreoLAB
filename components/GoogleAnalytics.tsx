"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

const GA_ID = "G-1E07SV9Y6G";
const STORAGE_KEY = "creolab-aura-cookie-consent";

function subscribe(callback: () => void) {
  document.addEventListener("cookieconsent", callback);
  return () => document.removeEventListener("cookieconsent", callback);
}

function getSnapshot() {
  return sessionStorage.getItem(STORAGE_KEY) === "accepted";
}

function getServerSnapshot() {
  return false;
}

export default function GoogleAnalytics() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

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
