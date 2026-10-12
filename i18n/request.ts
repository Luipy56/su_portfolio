import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "es";

  const supportedLocale = ["es", "ca"].includes(locale) ? locale : "es";

  try {
    const messages = (await import(`../messages/${supportedLocale}.json`)).default;
    return { locale: supportedLocale, messages };
  } catch {
    const messages = (await import("../messages/es.json")).default;
    return { locale: "es", messages };
  }
});
