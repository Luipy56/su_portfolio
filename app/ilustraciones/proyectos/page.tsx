"use client";

import { Carousel } from "@/app/components/Carousel";
import { CardProject } from "@/app/components/CardProject";
import { proyectos } from "@/app/data";
import { useTranslatedProyectos } from "@/app/i18n/useTranslatedData";

const ProyectosPage = () => {
  const translate = useTranslatedProyectos();
  const translatedProyectos = proyectos.map((p) => translate(p));

  return (
    <Carousel
      items={translatedProyectos}
      renderItem={(proyecto) => (
        <CardProject
          key={proyecto.id}
          title={proyecto.title}
          description={proyecto.description}
          year={proyecto.year}
          id={proyecto.id}
          hasAnimation={proyecto.hasAnimation}
        />
      )}
    />
  );
};

export default ProyectosPage;
