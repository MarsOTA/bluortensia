import Link from "next/link";
import { Benefits, CTA, FAQSection, HeroMedia, HospitalitySection, IntroSection, PhotoCTA, ProductSection, RestaurantSection, faqs } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  const faqLd = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type":"Question", name, acceptedAnswer:{ "@type":"Answer", text } })) };
  const product = { "@context":"https://schema.org", "@type":"Product", name:"Ombrellone macramè Mirto BluOrtensia", brand:{"@type":"Brand", name:"BluOrtensia"}, material:"Cotone naturale lavorato macramè", description:"Ombrellone artigianale per trasformare beach club, hotel, ville e ristoranti sul mare in spazi outdoor riconoscibili e fotografabili." };
  return <main><JsonLd data={faqLd}/><JsonLd data={product}/>
    <section className="container-pad grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(480px,560px)] lg:gap-14 lg:py-24">
      <div className="hero-copy max-w-[760px]"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-sage">OMBRELLONI ARTIGIANALI MEDITERRANEI</p><h1 className="heading max-w-[720px] text-[42px] leading-[1.02] sm:text-5xl md:text-[56px] lg:text-[72px] lg:leading-[0.98]">Ombrelloni artigianali per outdoor memorabili</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-ink/75">Trasformiamo beach club, hotel, ville e ristoranti in spazi più scenografici, riconoscibili e fotografabili.</p><div className="mt-9 flex flex-wrap gap-4"><CTA label="Invia una foto del tuo outdoor" /><Link href="/contatti" className="btn btn-ghost">Richiedi una proposta</Link></div></div>
      <HeroMedia />
    </section>
    <IntroSection />
    <ProductSection />
    <HospitalitySection />
    <RestaurantSection />
    <Benefits />
    <PhotoCTA />
    <FAQSection />
  </main>;
}
