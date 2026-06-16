import Link from "next/link";
import { AtmosphereGrid, Benefits, CTA, FAQSection, HeroMedia, InternalLinks, PhilosophySection, PhotoCTA, ProductSection, faqs } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  const faqLd = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type":"Question", name, acceptedAnswer:{ "@type":"Answer", text } })) };
  const product = { "@context":"https://schema.org", "@type":"Product", name:"Ombrelloni artigianali BluOrtensia", brand:{"@type":"Brand", name:"BluOrtensia"}, material:"Cotone naturale lavorato crochet e macramé", description:"Teli artigianali e ombrelloni completi per trasformare beach club, hotel, ville e ristoranti sul mare in spazi outdoor riconoscibili e fotografabili." };
  return <main><JsonLd data={faqLd}/><JsonLd data={product}/>
    <section className="container-pad grid min-h-[82vh] items-center gap-14 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
      <div className="hero-copy"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-sage">Ombra artigianale per luoghi da ricordare</p><h1 className="heading text-5xl leading-[0.98] md:text-7xl">Ombrelloni artigianali per beach club, hotel e ville sul mare</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-ink/75">BluOrtensia crea teli crochet e macramé, ombrelloni completi e soluzioni su misura per dare al tuo outdoor una firma calda, mediterranea e immediatamente fotografabile.</p><div className="mt-9 flex flex-wrap gap-4"><CTA /><Link href="/contatti" className="btn btn-ghost">Richiedi una proposta</Link></div><p className="mt-6 max-w-xl text-sm leading-7 text-ink/55">Beach club, hotel, ville, giardini e ristoranti sul mare: ogni progetto parte da foto, misure e atmosfera del luogo.</p></div>
      <HeroMedia />
    </section>
    <PhilosophySection />
    <section className="container-pad reveal py-24"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Prima della forma</p><h2 className="heading text-4xl md:text-5xl">Il prodotto nasce dall'atmosfera che vuoi far vivere</h2></div><div className="grid gap-5 md:grid-cols-2"><div className="card p-7"><h3 className="font-heading text-3xl uppercase tracking-[0.12em] text-beige">Prima</h3><p className="mt-4 leading-7 text-ink/70">Ombrelloni funzionali, corretti ma anonimi. Lo spazio resta gradevole, però non lascia un'immagine precisa nella memoria degli ospiti.</p></div><div className="card border-soft-blue/50 p-7"><h3 className="font-heading text-3xl uppercase tracking-[0.12em] text-deep-blue">Dopo</h3><p className="mt-4 leading-7 text-ink/70">Una presenza morbida e artigianale che cambia fotografie, arrivi, tavoli, lettini e percezione del brand outdoor.</p></div></div></div></section>
    <AtmosphereGrid />
    <ProductSection />
    <Benefits />
    <section className="container-pad reveal py-24"><div className="max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Percorsi</p><h2 className="heading text-4xl md:text-5xl">Scegli il contesto più vicino al tuo progetto</h2><p className="mt-5 leading-8 text-ink/70">Abbiamo organizzato le pagine per esigenze reali: hospitality, ville private, giardini, dehors e destinazioni mediterranee ad alta vocazione estetica.</p></div><div className="mt-8"><InternalLinks /></div></section>
    <PhotoCTA />
    <FAQSection />
  </main>;
}
