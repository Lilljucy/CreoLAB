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
  return localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return "pending";
}

export default function CookieBanner({ locale }: { locale: Locale }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = getDict(locale);

  function choose(value: string) {
    localStorage.setItem(STORAGE_KEY, value);
    document.dispatchEvent(new CustomEvent("cookieconsent", { detail: value }));
  }

  if (consent !== null) return null;

  return (
    <div className="glass fixed bottom-5 left-1/2 z-50 flex w-[calc(100%-2.5rem)] max-w-2xl -translate-x-1/2 flex-col items-center gap-4 rounded-2xl p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <p className="text-sm text-[var(--text-muted)]">
        {t.cookie.text}{" "}
        <Link href={`/${locale}/privatnost`} className="text-[var(--text)] underline">
          {t.cookie.privacyLinkText}
        </Link>
        .
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          type="button"
          onClick={() => choose("rejected")}
          className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface-2)]"
        >
          {t.cookie.reject}
        </button>
        <button type="button" onClick={() => choose("accepted")} className="inline-flex btn-cta px-5 py-2.5 text-sm">
          {t.cookie.accept}
        </button>
      </div>
    </div>
  );
}
