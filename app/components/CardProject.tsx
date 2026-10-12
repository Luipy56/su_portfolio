import Image from "next/image";
import { ImageModal } from "./ImageModal";
import { ImageAnimation } from "./ImageAnimation";
import { useTranslations } from "next-intl";

interface CardProjectProps {
  id: string;
  alt?: string;
  title: string;
  description: string;
  year?: number;
  hasAnimation?: boolean;
}

export const CardProject = ({
  id,
  alt = "Imagen del proyecto",
  title,
  description,
  year,
  hasAnimation = false,
}: CardProjectProps) => {
  const t = useTranslations("card");
  const projectImageSrc = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    src: `/images/proyectos/proyecto${id}/proyecto${id}${i + 1}.webp`,
    alt: t("imagenGeneric", { n: i + 1 }),
  }));

  return (
    <div className="bg-[#f5efe6] text-zinc-800 p-4 sm:p-8 rounded-lg flex flex-col gap-4 sm:gap-8  ">
      <div className="flex gap-4 sm:gap-8">
        <div className="font-yanone">
          <div className="shrink-0 w-24 sm:w-32 relative">
            <Image
              src={`/images/proyectos/proyecto${id}.webp`}
              alt={alt}
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 ">
          <h2 className="text-xl sm:text-4xl font-semibold">{title}</h2>
          <p className=" text-md sm:text-2xl font-yanone">{description}</p>
        </div>
      </div>

      <ImageModal
        images={projectImageSrc}
        renderModal={
          hasAnimation
            ? (img) => (
                <div onClick={(e) => e.stopPropagation()}>
                  <ImageAnimation src={img.src} />
                </div>
              )
            : undefined
        }
      />
    </div>
  );
};
