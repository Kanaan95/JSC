import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_NAME } from "@/lib/constants";
import { getPayloadClient } from "@/lib/payload";
import type {
  FooterSettingsGlobal,
  SiteSettingsGlobal,
} from "@/lib/payload-types";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jscnice.fr"),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Jeunesse Saint Charbel Nice — communauté catholique de jeunes, enracinée dans la tradition maronite libanaise, ouverte à tous sur la Côte d'Azur.",
  icons: {
    icon: "/assets/logos/flamme-croix-marine-transparent.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const payload = await getPayloadClient();
  const [siteSettings, footerSettings] = await Promise.all([
    payload.findGlobal({ slug: "site-settings" }) as Promise<SiteSettingsGlobal>,
    payload.findGlobal({ slug: "footer-settings" }) as Promise<FooterSettingsGlobal>,
  ]);
  const polesSectionEnabled = siteSettings.polesSectionEnabled === true;

  return (
    <html lang="fr" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-body">
        <Header polesSectionEnabled={polesSectionEnabled} />
        <main className="flex-1">{children}</main>
        <Footer
          siteSettings={siteSettings}
          footerSettings={footerSettings}
          polesSectionEnabled={polesSectionEnabled}
        />
      </body>
    </html>
  );
}
