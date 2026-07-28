"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDict, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "creolab-aura-cookie-consent";

export default function CookieBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const t = getDict(locale);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function choose(value: string) {
    localStorage.setItem(STORAGE_KEY, value);
    document.dispatchEvent(new CustomEvent("cookieconsent", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

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
          className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
        >
          {t.cookie.reject}
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="rounded-full bg-gradient-to-br from-[#93c5fd] to-[#e0f2fe] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
        >
          {t.cookie.accept}
        </button>
      </div>
    </div>
  );
}
