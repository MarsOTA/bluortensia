import type { Metadata } from "next";
import { Cormorant_SC, Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/Layout";
import { Animations } from "@/components/Animations";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/site";

const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "BluOrtensia | Ombrelloni artigianali mediterranei", template: "%s" },
  description: "Ombrelloni artigianali crochet e macramé per beach club, hotel, ville e outdoor mediterranei di lusso.",
  openGraph: { title: "BluOrtensia", description: "Outdoor scenografici con ombrelloni artigianali crochet e macramé.", url: siteUrl, siteName: "BluOrtensia", locale: "it_IT", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "BluOrtensia", url: siteUrl, description: "Brand di ombrelloni artigianali crochet e macramé per spazi outdoor mediterranei." };
  return <html lang="it" className={`${cormorant.variable} ${inter.variable}`}><body><JsonLd data={organization} /><Animations /><Header />{children}<Footer /></body></html>;
}
