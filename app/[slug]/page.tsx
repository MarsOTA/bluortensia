import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Benefits, CTA, FAQSection, ImagePlaceholder, InternalLinks, PhotoCTA, ProductSection, faqs } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { pageData, siteUrl, type PageKey } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return Object.keys(pageData).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pageData[slug as PageKey];
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/${slug}` }, openGraph: { title: page.title, description: page.description, url: `${siteUrl}/${slug}` } };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = pageData[slug as PageKey];
  if (!page) notFound();
  const isGeo = ["forte-dei-marmi", "puglia", "sardegna", "costa-smeralda", "sicilia"].includes(slug);
  const faqLd = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity: faqs.slice(0,3).map(([name, text]) => ({ "@type":"Question", name: `${name} (${page.audience})`, acceptedAnswer:{ "@type":"Answer", text } })) };
  return <main><JsonLd data={faqLd}/>
    <section className="container-pad grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="hero-copy"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sage">{page.eyebrow}</p><h1 className="heading max-w-5xl text-5xl leading-tight md:text-7xl">{page.h1}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-ink/75">{page.body}</p><div className="mt-8 flex flex-wrap gap-4"><CTA label="Richiedi una proposta per il tuo spazio" /><CTA label="Parla con BluOrtensia" /></div></div>
      <ImagePlaceholder label="immagine progetto" title={`Outdoor per ${page.audience}`} text="Placeholder per fotografie reali BluOrtensia: dettaglio della lavorazione, vista d'insieme e atmosfera del luogo prima dell'apertura agli ospiti." />
    </section>
    <section className="container-pad reveal py-20"><div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Intento del progetto</p><h2 className="heading text-4xl md:text-5xl">Un dettaglio artigianale che rende riconoscibile {page.audience}</h2><p className="mt-6 leading-8 text-ink/70">{page.proof} Non partiamo da un catalogo anonimo: guardiamo proporzioni, materiali, luce, colori già presenti e modo in cui le persone vivranno lo spazio.</p></div><div className="card p-8"><h3 className="font-heading text-3xl uppercase tracking-[0.12em] text-deep-blue">Cosa valutiamo</h3><ul className="mt-5 space-y-3 text-sm leading-7 text-ink/70"><li>• Misure e struttura esistente</li><li>• Esposizione a sole e vento</li><li>• Palette del luogo</li><li>• Numero di postazioni o tavoli</li><li>• Effetto desiderato nelle fotografie</li></ul></div></div></section>
    {isGeo && <section className="container-pad reveal py-20"><div className="card bg-warm-white p-8 md:p-12"><h2 className="heading text-4xl md:text-5xl">Ombra artigianale pensata per {page.audience}</h2><p className="mt-5 max-w-3xl leading-8 text-ink/70">Ogni destinazione ha una luce diversa. Per questo suggeriamo tonalità, ampiezza della frangia e presenza visiva in base al paesaggio: spiaggia, pietra, verde mediterraneo, piscina o terrazza panoramica.</p></div></section>}
    <ProductSection />
    <Benefits />
    <section className="container-pad reveal py-20"><h2 className="heading text-4xl md:text-5xl">Altre ispirazioni BluOrtensia</h2><p className="mt-5 max-w-3xl leading-8 text-ink/70">Confronta contesti, destinazioni e applicazioni per capire quale linguaggio outdoor è più vicino al tuo progetto.</p><div className="mt-8"><InternalLinks /></div></section>
    <PhotoCTA />
    <FAQSection />
  </main>;
}
