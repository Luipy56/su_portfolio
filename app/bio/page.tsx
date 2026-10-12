import Image from "next/image";
import { useTranslations } from "next-intl";
const Bio = () => {
  const t = useTranslations("bio");
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="bg-[#f5efe6] rounded-2xl flex flex-col gap-2 mx-6 sm:mx-8 p-6 md:p-8 text-lg sm:text-xl font-yanone text-zinc-800">
        <div>
          <Image
            src="/images/bio/sulogotexto.webp"
            alt={t("logoAlt")}
            width={100}
            height={100}
          />
        </div>
        <p>{t("paragraph1")}</p>
        <p>{t("paragraph2")}</p>
        <p></p>
        <p></p>
      </main>
      <div className="flex justify-end sticky bottom-0 pointer-events-none">
        <Image
          src="/images/bio/susinfondo.webp"
          alt={t("bottomRightAlt")}
          width={300}
          height={300}
          className="object-contain w-32 sm:w-64 md:w-80 h-auto "
        />
      </div>
    </div>
  );
};
export default Bio;
