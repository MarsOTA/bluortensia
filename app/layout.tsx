import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/Layout";
import { Animations } from "@/components/Animations";
import { JsonLd } from "@/components/JsonLd";
import { brandAssets } from "@/lib/assets";
import { siteUrl } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "BluOrtensia | Ombrelloni artigianali mediterranei", template: "%s" },
  description: "Ombrelloni artigianali crochet e macramé per beach club, hotel, ville e outdoor mediterranei di lusso.",
  openGraph: { title: "BluOrtensia", description: "Outdoor scenografici con ombrelloni artigianali crochet e macramé.", url: siteUrl, siteName: "BluOrtensia", locale: "it_IT", type: "website", images: [brandAssets.logo] },
  icons: { icon: brandAssets.logo },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "BluOrtensia", url: siteUrl, description: "Brand di ombrelloni artigianali crochet e macramé per spazi outdoor mediterranei." };
  return <html lang="it"><body><JsonLd data={organization} /><Animations /><Header />{children}<Footer /></body></html>;
}
