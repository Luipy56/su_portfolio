"use client";

import { Carousel } from "@/app/components/Carousel";
import { libros } from "@/app/data";
import { CardBook } from "@/app/components/CardBook";
import { useTranslatedLibros } from "@/app/i18n/useTranslatedData";

const LibrosPage = () => {
  const translate = useTranslatedLibros();
  const translatedLibros = libros.map((l) => translate(l));

  return (
    <Carousel
      items={translatedLibros}
      renderItem={(libro) => (
        <CardBook
          key={libro.id}
          title={libro.title}
          description={libro.description}
          year={libro.year}
          id={libro.id}
          author={libro.author}
          illustrator={libro.illustrator}
        />
      )}
    />
  );
};

export default LibrosPage;
