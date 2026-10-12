"use client";

import { CardAnimation } from "@/app/components/CardAnimation";
import { Carousel } from "@/app/components/Carousel";
import { animaciones } from "@/app/data";
import { useTranslatedAnimaciones } from "@/app/i18n/useTranslatedData";

const AnimacionesPage = () => {
  const translate = useTranslatedAnimaciones();
  const translatedAnimaciones = animaciones.map((a) => translate(a));

  return (
    <Carousel
      items={translatedAnimaciones}
      renderItem={(animacion) => (
        <CardAnimation
          key={animacion.id}
          title={animacion.title}
          description={animacion.description}
          id={animacion.id}
        />
      )}
    />
  );
};

export default AnimacionesPage;
