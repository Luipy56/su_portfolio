import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/dist/client/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations("header");
  return (
    <header className="w-full relative  flex items-center gap-2 sm:gap-4 justify-center">
      <Link
        href="/bio"
        className=" absolute top-2 left-2 bg-[#e6ded2] rounded-lg p-1  "
      >
        <Image
          src="/images/home/susulogo.webp"
          alt={t("logoAlt")}
          width={20}
          height={20}
          className="rounded-lg object-cover "
        />
      </Link>

      <NavBar />

      <div className="absolute top-2 right-2">
        <LanguageSwitcher />
      </div>
    </header>
  );
};
export default Header;
