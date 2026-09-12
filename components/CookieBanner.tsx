"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { getDict, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "creolab-aura-cookie-consent";

function subscribe(callback: () => void) {
  document.addEventListener("cookieconsent", callback);
  return () => document.removeEventListener("cookieconsent", callback);
}

function getSnapshot() {
  return sessionStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return "pending";
}

export default function CookieBanner({ locale }: { locale: Locale }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = getDict(locale);

  function choose(value: string) {
    sessionStorage.setItem(STORAGE_KEY, value);
    document.dispatchEvent(new CustomEvent("cookieconsent", { detail: value }));
  }

  if (consent !== null) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-inner">
        <p>
          {t.cookie.text}{" "}
          <Link href={`/${locale}/privatnost`}>{t.cookie.privacyLinkText}</Link>.
        </p>
        <div className="cookie-actions">
          <button type="button" className="btn btn-outline btn-sm" onClick={() => choose("rejected")}>
            {t.cookie.reject}
          </button>
          <button type="button" className="btn btn-solid btn-sm" onClick={() => choose("accepted")}>
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
