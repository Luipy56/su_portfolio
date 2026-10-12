"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const subLinks = [
  { href: "/ilustraciones/proyectos", key: "proyectos" },
  { href: "/ilustraciones/libros", key: "libros" },
  { href: "/ilustraciones/carteles", key: "carteles" },
  { href: "/ilustraciones/logos", key: "logos" },
  { href: "/ilustraciones/animaciones", key: "animaciones" },
];

export const IllustrationsLinks = () => {
  const pathname = usePathname();
  const t = useTranslations("illustrationsNav");
  return (
    <nav className="flex gap-4 sm:gap-10  text-xl sm:text-2xl ">
      {subLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href
              ? "font-semibold text-red-600 "
              : "text-zinc-800 hover:text-red-600"
          } transition-colors`}
        >
          {t(link.key)}
        </Link>
      ))}
    </nav>
  );
};
