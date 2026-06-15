import Link from "next/link";
import { Benefits, CTA, FAQSection, InternalLinks, ParasolArt, faqs } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/site";

export default function Home() {
  const faqLd = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type":"Question", name, acceptedAnswer:{ "@type":"Answer", text } })) };
  const product = { "@context":"https://schema.org", "@type":"Product", name:"Ombrelloni artigianali BluOrtensia", brand:{"@type":"Brand", name:"BluOrtensia"}, description:"Coperture e ombrelloni crochet e macramé per trasformare spazi outdoor in scenografie mediterranee fotogeniche." };
  return <main><JsonLd data={faqLd}/><JsonLd data={product}/>
    <section className="container-pad grid min-h-[78vh] items-center gap-12 py-16 lg:grid-cols-2">
      <div><p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sage">Mediterranean outdoor couture</p><h1 className="heading text-5xl leading-tight md:text-7xl">Ombrelloni artigianali per beach club, hotel e ville sul mare</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">Non semplici coperture: BluOrtensia crea una trasformazione scenica, riconoscibile e fotogenica per spazi outdoor di lusso.</p><div className="mt-8 flex flex-wrap gap-4"><CTA /><Link href="/contatti" className="btn btn-ghost">Richiedi progetto</Link></div></div>
      <ParasolArt />
    </section>
    <section className="container-pad reveal py-20"><div className="card grid gap-10 p-8 md:grid-cols-2 md:p-12"><div><h2 className="heading text-4xl">Prodotto e atmosfera</h2><p className="mt-5 leading-8 text-ink/70">Ogni ombrellone unisce cotone, nodi e frange per creare ombra filtrata, texture naturale e un'immagine immediatamente associabile al luogo.</p></div><div className="rounded-[2rem] bg-gradient-to-br from-soft-blue/20 via-cotton to-sand/30 p-8"><h3 className="font-heading text-3xl uppercase tracking-[0.12em] text-deep-blue">Scenografia, non accessorio</h3><p className="mt-4 leading-8 text-ink/70">Il valore è nella percezione: arrivi, fotografie, tavoli e lettini diventano parte di un racconto mediterraneo premium.</p></div></div></section>
    <section className="container-pad reveal py-20"><h2 className="heading text-4xl">Prima e dopo</h2><div className="mt-8 grid gap-5 md:grid-cols-2"><div className="card p-8"><h3 className="font-heading text-3xl uppercase text-beige">Prima</h3><p className="mt-4 text-ink/70">Ombra funzionale, poco carattere visivo, spazi simili a molti altri.</p></div><div className="card border-soft-blue/50 p-8"><h3 className="font-heading text-3xl uppercase text-deep-blue">Dopo</h3><p className="mt-4 text-ink/70">Un landmark morbido e fotografabile che rende riconoscibile beach club, hotel, villa o ristorante.</p></div></div></section>
    <Benefits />
    <section className="container-pad reveal py-20"><h2 className="heading text-4xl">Per chi progettiamo</h2><p className="mt-5 max-w-3xl leading-8 text-ink/70">Beach club, hotel, ville, giardini e ristoranti sul mare trovano in BluOrtensia un linguaggio outdoor coerente con ospitalità premium e paesaggi mediterranei.</p><div className="mt-8"><InternalLinks /></div></section>
    <section className="container-pad reveal py-20"><h2 className="heading text-4xl">Località e progetti SEO</h2><p className="mt-5 leading-8 text-ink/70">Realizziamo progetti per destinazioni iconiche come <Link href="/forte-dei-marmi" className="text-deep-blue underline">Forte dei Marmi</Link>, <Link href="/puglia" className="text-deep-blue underline">Puglia</Link>, <Link href="/sardegna" className="text-deep-blue underline">Sardegna</Link>, <Link href="/costa-smeralda" className="text-deep-blue underline">Costa Smeralda</Link> e <Link href="/sicilia" className="text-deep-blue underline">Sicilia</Link>.</p></section>
    <FAQSection />
    <section className="container-pad py-20"><div className="card bg-deep-blue p-10 text-white md:p-14"><h2 className="font-heading text-4xl uppercase tracking-[0.12em]">Trasforma il tuo outdoor in un'immagine memorabile</h2><p className="mt-5 max-w-2xl text-white/75">Raccontaci luogo, misure e atmosfera desiderata: prepariamo una proposta BluOrtensia su misura.</p><div className="mt-8"><CTA label="Scrivici su WhatsApp" /></div></div></section>
  </main>;
}
