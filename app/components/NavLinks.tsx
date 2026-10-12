"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export const NavLinks = () => {
  const pathname = usePathname();
  const t = useTranslations("nav");

  const links = [
    { href: "/", label: t("inicio") },
    { href: "/ilustraciones/proyectos", label: t("ilustracion") },
    { href: "/bio", label: t("bio") },
    { href: "/tienda", label: t("tienda") },
  ];

  return (
    <nav className="flex gap-6 md:gap-12 justify-center">
      {links.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={`transition-colors ${
              isActive
                ? "font-semibold text-red-600 border-b border-red-600 bg-[#f5efe6]"
                : "text-zinc-800 hover:text-red-600"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
