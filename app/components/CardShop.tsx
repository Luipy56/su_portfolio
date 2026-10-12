import Image from "next/image";
import { useTranslations } from "next-intl";

interface CardShopProps {
  src?: string;
  alt: string;
  title: string;
  description: string;

  resolution?: string;
}

export const CardShop = ({
  src,
  alt,
  title,
  description,

  resolution,
}: CardShopProps) => {
  const t = useTranslations("tienda");
  return (
    <div className="bg-[#f5efe6] min-h-full text-zinc-800 p-4 rounded-lg flex flex-col gap-4  ">
      {src && (
        <div className="relative w-full aspect-video">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="500px"
            className="rounded-lg object-cover"
          />
        </div>
      )}
      <h2 className="font-sans text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col flex-1 gap-6 justify-between ">
        <h3>{description}</h3>

        <div className="flex justify-between">
          <p>{t("price")}</p>

          <button className="rounded-lg px-4 py-1 bg-green-300">{t("buyButton")}</button>
        </div>
      </div>
    </div>
  );
};
