import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="w-full h-16 flex flex-col gap-1 items-center justify-center text-sm text-zinc-600 ">
      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/susanasubiranalopez/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
        </Link>
        <Link href="https://www.facebook.com/susanasubi" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
        </Link>
        <Link href="https://x.com/susiyole" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/susana-subirana-1b109930/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </Link>
        <Link href="mailto:susanasusana363@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
        </Link>
      </div>
      <p className="text-zinc-800 ">{t("copyright")}</p>
      <p className="text-xs text-[#dcd7ccdd] font-yanone ">{t("credit")}</p>
    </footer>
  );
};
