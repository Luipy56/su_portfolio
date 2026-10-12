"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const locales = [
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
];

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = useCallback(
    (newLocale: string) => {
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
      router.refresh();
    },
    [router]
  );

  return (
    <div className="flex items-center gap-1 text-sm font-sans">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          className={`transition-colors ${
            locale === l.code
              ? "text-red-600 font-semibold"
              : "text-zinc-800 hover:text-red-600"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};
