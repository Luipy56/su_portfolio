"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

interface ImageModalProps {
  images: ImageItem[];
  renderModal?: (img: ImageItem) => React.ReactNode;
}

export const ImageModal = ({ images, renderModal }: ImageModalProps) => {
  const [selectedImg, setSelectedImg] = useState<ImageItem | null>(null);
  const t = useTranslations("imageModal");

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-video cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="rounded-lg object-cover hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImg(null)}
        >
          {renderModal ? (
            renderModal(selectedImg)
          ) : (
            <div className="relative w-[80vw] h-[80vh]">
              <Image
                src={selectedImg.src}
                alt={t("imagenAmpliada")}
                fill
                sizes="80vw"
                className="rounded-lg object-contain"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
