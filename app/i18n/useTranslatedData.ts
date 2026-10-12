import { useTranslations } from "next-intl";

interface LibroData {
  id: string;
  title: string;
  description: string;
  year?: number;
  author?: string;
  illustrator?: string;
}

interface ProyectoData {
  id: string;
  title: string;
  description: string;
  year?: number;
  hasAnimation?: boolean;
}

interface CartelData {
  id: string;
  title: string;
  description: string;
  year?: number;
}

interface AnimacionData {
  id: string;
  title: string;
  description: string;
  year?: number;
  hasAnimation?: boolean;
  image?: string;
}

interface ObraData {
  id: string;
  title: string;
  description: string;
  resolution?: string;
  image?: string;
}

export function useTranslatedLibros() {
  const t = useTranslations("libros");
  return (libro: LibroData) => ({
    ...libro,
    title: t(`${libro.id}.title`),
    description: t(`${libro.id}.description`),
  }) as LibroData;
}

export function useTranslatedProyectos() {
  const t = useTranslations("proyectos");
  return (proyecto: ProyectoData) => ({
    ...proyecto,
    title: t(`${proyecto.id}.title`),
    description: t(`${proyecto.id}.description`),
  }) as ProyectoData;
}

export function useTranslatedCarteles() {
  const t = useTranslations("carteles");
  return (cartel: CartelData) => ({
    ...cartel,
    title: t(`${cartel.id}.title`),
    description: t(`${cartel.id}.description`),
  }) as CartelData;
}

export function useTranslatedAnimaciones() {
  const t = useTranslations("animaciones");
  return (animacion: AnimacionData) => ({
    ...animacion,
    title: t(`${animacion.id}.title`),
    description: t(`${animacion.id}.description`),
  }) as AnimacionData;
}

export function useTranslatedObras() {
  const t = useTranslations("obras");
  return (obra: ObraData) => ({
    ...obra,
    title: t(`${obra.id}.title`),
    description: t(`${obra.id}.description`),
  }) as ObraData;
}
