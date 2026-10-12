import Image from "next/image";
import { ImageModal } from "./ImageModal";
import { useTranslations } from "next-intl";

interface CardBookProps {
  id: string;
  alt?: string;
  title: string;
  description: string;
  year?: number;
  author?: string;
  illustrator?: string;
}
export const CardBook = ({
  id,
  alt = "Portada del libro",
  title,
  description,
  year,
  author,
  illustrator,
}: CardBookProps) => {
  const t = useTranslations("card");
  const bookImageSrc = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    src: `/images/libros/libro${id}/libro${id}${i + 1}.webp`,
    alt: t("imagenGeneric", { n: i + 1 }),
  }));

  return (
    <div className="bg-[#f5efe6] text-zinc-800 p-4 rounded-lg flex flex-col gap-4  ">
      <div className="flex gap-4">
        <div className="  font-yanone">
          <div className="shrink-0 w-24 sm:w-32 relative ">
            <Image
              src={`/images/libros/libro${id}.webp`}
              alt={alt}
              width={200}
              height={200}
              className="rounded-lg object-cover "
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="text-xl sm:text-3xl font-semibold">{title}</h2>
          <div className="font-yanone text-sm sm:text-lg">
            <p>{t("autora")}: {author}</p>
            <div className="flex justify-between">
              <p>{t("ilustradora")}: {illustrator}</p>
              <p>({year})</p>
            </div>
          </div>
        </div>
      </div>
      <p className=" text-md sm:text-xl font-yanone">{description}</p>
      <ImageModal images={bookImageSrc} />
    </div>
  );
};
