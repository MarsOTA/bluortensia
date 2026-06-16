import Image from "next/image";
import Link from "next/link";
import { Benefits, CTA, FAQSection, HospitalitySection, PhotoCTA, ProductSection, RestaurantSection, faqs } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { brandAltText, brandAssets } from "@/lib/assets";

export default function Home() {
  const faqLd = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type":"Question", name, acceptedAnswer:{ "@type":"Answer", text } })) };
  const product = { "@context":"https://schema.org", "@type":"Product", name:"Ombrellone macramè Mirto BluOrtensia", brand:{"@type":"Brand", name:"BluOrtensia"}, material:"Cotone naturale lavorato macramè", description:"Ombrellone artigianale per trasformare beach club, hotel, ville e ristoranti sul mare in spazi outdoor riconoscibili e fotografabili." };
  return <main><JsonLd data={faqLd}/><JsonLd data={product}/>
    <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-warm-white">
      <Image src={brandAssets.heroDesktop} alt={brandAltText.heroDesktop} fill priority sizes="100vw" className="hidden object-cover object-center md:block" />
      <Image src={brandAssets.heroMobile} alt={brandAltText.heroMobile} fill priority sizes="100vw" className="object-cover object-center md:hidden" />
      <div className="absolute inset-0 bg-gradient-to-r from-warm-white via-warm-white/92 to-warm-white/10 md:via-warm-white/82" />
      <div className="container-pad relative flex min-h-[calc(100vh-5rem)] items-center py-16">
        <div className="hero-copy max-w-[650px] rounded-[2rem] bg-warm-white/70 p-6 shadow-[0_30px_100px_rgba(49,89,107,0.10)] backdrop-blur-sm md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-sage md:text-sm">OMBRELLONI ARTIGIANALI MEDITERRANEI</p>
          <h1 className="heading max-w-[650px] text-[42px] leading-[1.02] sm:text-5xl md:text-[58px] lg:text-[68px] lg:leading-[0.98]">Mirto – l'ombrellone artigianale che trasforma il tuo outdoor</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-ink/78 md:text-lg">Telo in cotone naturale lavorato a mano, effetto macramè decorativo e atmosfera mediterranea per beach club, hotel, ville e ristoranti.</p>
          <div className="mt-9 flex flex-wrap gap-4"><CTA label="Invia una foto del tuo outdoor" /><Link href="/contatti" className="btn btn-ghost bg-warm-white/80">Richiedi una proposta</Link></div>
        </div>
      </div>
    </section>
    <section className="container-pad -mt-8 relative z-10"><div className="card grid items-center gap-6 p-5 md:grid-cols-[auto_1fr_auto] md:p-6"><div className="flex h-20 w-20 items-center justify-center rounded-full border border-soft-blue/50 bg-white"><span className="text-3xl text-deep-blue">☂</span></div><div><h2 className="font-heading text-3xl uppercase tracking-[0.12em] text-deep-blue">Mirto completo</h2><p className="mt-2 text-sm text-ink/65">Telo artigianale macramè + proposta per struttura coordinata o già esistente.</p></div><CTA label="Ordina il tuo Mirto" /></div></section>
    <ProductSection />
    <HospitalitySection />
    <RestaurantSection />
    <Benefits />
    <PhotoCTA />
    <FAQSection />
  </main>;
}
