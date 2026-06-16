import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Benefits, CTA, FAQSection, InternalLinks, faqs } from "@/components/Sections";
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
    <section className="container-pad py-16 md:py-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sage">BluOrtensia per {page.audience}</p><h1 className="heading max-w-5xl text-5xl leading-tight md:text-7xl">{page.h1}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">{page.body}</p><div className="mt-8"><CTA /></div></section>
    <section className="container-pad reveal py-16"><div className="card grid gap-8 p-8 md:grid-cols-3 md:p-12"><div className="md:col-span-2"><h2 className="heading text-4xl">Una trasformazione scenica per {page.audience}</h2><p className="mt-5 leading-8 text-ink/70">BluOrtensia non comunica un semplice ombrellone: costruisce un'identità outdoor fatta di ombra leggera, texture naturale, artigianalità e riconoscibilità fotografica. Il risultato è un ambiente più memorabile per ospiti, clienti e contenuti digitali.</p></div><div className="rounded-[1.5rem] bg-sage/10 p-6"><h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-deep-blue">Ideale per</h3><p className="mt-3 leading-7 text-ink/70">Allestimenti stagionali, restyling soft, nuove aperture e aree outdoor che necessitano una firma visiva distintiva.</p></div></div></section>
    {isGeo && <section className="container-pad reveal py-16"><h2 className="heading text-4xl">Progetti locali e contesto mediterraneo</h2><p className="mt-5 max-w-3xl leading-8 text-ink/70">Per {page.audience}, il progetto considera luce, vento, materiali architettonici e immagine della destinazione. La palette naturale BluOrtensia si integra con spiagge, pietra chiara, verde mediterraneo e hospitality premium.</p></section>}
    <Benefits />
    <section className="container-pad reveal py-16"><h2 className="heading text-4xl">Collegamenti utili</h2><p className="mt-5 leading-8 text-ink/70">Esplora altre applicazioni e destinazioni BluOrtensia.</p><div className="mt-8"><InternalLinks /></div></section>
    <FAQSection />
  </main>;
}
