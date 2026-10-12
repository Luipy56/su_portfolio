"use client";

import { Carousel } from "@/app/components/Carousel";
import { CardBanner } from "@/app/components/CardBanner";
import { carteles } from "@/app/data";
import { useTranslatedCarteles } from "@/app/i18n/useTranslatedData";

const CartelesPage = () => {
  const translate = useTranslatedCarteles();
  const translatedCarteles = carteles.map((c) => translate(c));

  return (
    <Carousel
      items={translatedCarteles}
      renderItem={(cartel) => (
        <CardBanner
          key={cartel.id}
          title={cartel.title}
          description={cartel.description}
          year={cartel.year}
          id={cartel.id}
        />
      )}
    />
  );
};

export default CartelesPage;
