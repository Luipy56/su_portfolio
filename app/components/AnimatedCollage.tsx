"use client";

import Image from "next/image";
import { Illustration, imagePool } from "../data";
import { getRandomImages } from "../functions";
import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { getImageAlt } from "../i18n/imageAlts";

export const AnimatedCollage = () => {
  const locale = useLocale();
  const [images, setImages] = useState<Illustration[]>([]);

  const [selectedImages, setSelectedImages] = useState<Illustration | null>(
    null,
  );

  const selectedImagesRef = useRef<Illustration | null>(null);

  useEffect(() => {
    selectedImagesRef.current = selectedImages;
  }, [selectedImages]);

  useEffect(() => {
    setImages(getRandomImages(imagePool, 9));

    const interval = setInterval(() => {
      if (!selectedImagesRef.current) {
        setImages(getRandomImages(imagePool, 9));
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Efecto para cerrar el visor al pulsar la tecla 'Escape'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImages(null);
      }
    };

    if (selectedImages) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImages]);

  if (images.length === 0) {
    return (
      <div className="grid grid-cols-3 gap-0 aspect-square w-full max-w-4xl mx-auto bg-stone-100 animate-pulse" />
    );
  }

  return (
    <>
      {/* 1. Cuadrícula de imágenes */}
      <div className="grid grid-cols-3 gap-2 aspect-square w-full max-w-4xl mx-auto border border-stone-200 overflow-hidden">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelectedImages(img)}
            className="relative aspect-square overflow-hidden group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-stone-400 focus:z-10"
          >
            <Image
              src={img.src}
              alt={getImageAlt(img.id, locale)}
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </button>
        ))}
      </div>

      {/* 2. Visor / Modal (Lightbox) */}
      {selectedImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImages(null)} // Cierra al hacer clic fuera de la imagen
        >
          {/* Botón de cerrar (X) */}
          <button
            onClick={() => setSelectedImages(null)}
            className="absolute top-6 right-6 text-white hover:text-stone-300 transition-colors focus:outline-none"
            aria-label="Cerrar visor"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Contenedor de la imagen ampliada */}
          <div
            className="relative w-full max-w-4xl h-[80vh] cursor-default"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic sobre la propia imagen
          >
            <Image
              src={selectedImages.src}
              alt={getImageAlt(selectedImages.id, locale)}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain select-none"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};
