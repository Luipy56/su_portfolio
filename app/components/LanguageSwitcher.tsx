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
    <div className="flex items-center border border-1 rounded-sm border-zinc-300 gap-1 text-md font-sans">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          className={`px-1 transition-colors ${
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
