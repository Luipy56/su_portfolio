import type { Metadata } from "next";
import { Geist_Mono, Amatic_SC, Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { NextIntlClientProvider } from "next-intl";

const amaticSC = Amatic_SC({
  variable: "--font-amatic-sc",
  subsets: ["latin"],
  weight: "400",
});

const yanone = Yanone_Kaffeesatz({
  variable: "--font-yanone",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Susana Subirana - Portfolio",
  description:
    "Ilustraciones y diseño gráfico de Susana Subirana. Diseño web y desarrollo por David Botello Chércoles",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <NextIntlClientProvider>
      <html
        lang="es"
        className={`${amaticSC.variable} ${geistMono.variable} ${yanone.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col items-center gap-12 sd:gap-8   bg-[#f5efe6aa] text-red-600">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
};

export default RootLayout;
