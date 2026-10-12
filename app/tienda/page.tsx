import { CardShop } from "../components/CardShop";
import { obras } from "../data";
import { useTranslations } from "next-intl";
import { useTranslatedObras } from "@/app/i18n/useTranslatedData";

const TiendaPage = () => {
  const t = useTranslations("tienda");
  const translate = useTranslatedObras();
  const translatedObras = obras.map((o) => translate(o));

  return (
    <main className="flex flex-col gap-4  justify-center py-4">
      <div className="mx-6 flex flex-col gap-2 text-2xl p-4 rounded-lg  bg-[#f5efe6] text-zinc-800">
        <h3 className="text-3xl font-bold ">{t("sectionTitle")}</h3>
        <p className="text-xl text-justify font-yanone">{t("description")}</p>
      </div>
      <section className=" rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 lg: gap-4 font-yanone mx-6 text-zinc-800">
        {translatedObras.map((obra) => (
          <CardShop
            src={obra.image}
            alt={""}
            title={obra.title}
            description={obra.description}
            resolution={obra.resolution}
            key={obra.id}
          />
        ))}
      </section>
    </main>
  );
};

export default TiendaPage;
