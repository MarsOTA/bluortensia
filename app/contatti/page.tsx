import type { Metadata } from "next";
import { CTA, FAQSection, InternalLinks } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Contatti BluOrtensia | Ombrelloni artigianali", description: "Contatta BluOrtensia per ombrelloni artigianali crochet e macramé per beach club, hotel, ville, giardini e ristoranti sul mare.", alternates: { canonical: "/contatti" } };

export default function Contatti() {
  const contact = { "@context":"https://schema.org", "@type":"ContactPage", url: `${siteUrl}/contatti`, name:"Contatti BluOrtensia", mainEntity:{"@type":"Organization", name:"BluOrtensia", contactPoint:{"@type":"ContactPoint", contactType:"customer service", url: whatsappUrl}} };
  return <main><JsonLd data={contact}/><section className="container-pad py-16 md:py-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sage">Contatti</p><h1 className="heading max-w-5xl text-5xl leading-tight md:text-7xl">Raccontaci il tuo spazio outdoor</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">Invia misure, destinazione, quantità indicative e atmosfera desiderata. Ti aiuteremo a immaginare una trasformazione BluOrtensia coerente con il tuo luogo.</p><div className="mt-8"><CTA label="Avvia conversazione WhatsApp" /></div></section><section className="container-pad reveal py-16"><div className="card p-8 md:p-12"><h2 className="heading text-4xl">Informazioni utili per la proposta</h2><div className="mt-8 grid gap-5 md:grid-cols-3"><p className="rounded-3xl bg-sand/15 p-6">Tipologia: beach club, hotel, villa, giardino o ristorante.</p><p className="rounded-3xl bg-sage/15 p-6">Quantità, diametro, struttura esistente e condizioni di vento.</p><p className="rounded-3xl bg-soft-blue/15 p-6">Palette, fotografie del luogo e tempistiche desiderate.</p></div></div></section><section className="container-pad reveal py-16"><h2 className="heading text-4xl">Pagine correlate</h2><div className="mt-8"><InternalLinks /></div></section><FAQSection /></main>;
}
