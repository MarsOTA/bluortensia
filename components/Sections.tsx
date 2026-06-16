import Image from "next/image";
import Link from "next/link";
import { brandAltText, brandAssets } from "@/lib/assets";
import { whatsappUrl } from "@/lib/site";

export const faqs = [
  [
    "Come capisco quale ombrellone è adatto al mio spazio?",
    "Invia una foto dell'area outdoor, le misure indicative e il tipo di utilizzo. Da lì valutiamo proporzioni, colore, densità della trama e soluzione più coerente con il contesto.",
  ],
  [
    "Posso usare una struttura di ombrellone già esistente?",
    "Sì, quando la struttura è adeguata possiamo progettare un telo artigianale su misura. Chiediamo diametro, altezza, foto della ferramenta e dettagli tecnici per evitare adattamenti imprecisi.",
  ],
  [
    "La trama aperta è indicata per zone ventilate?",
    "La lavorazione aperta lascia passare più aria rispetto a un telo compatto e crea un'ombra leggera. In presenza di vento importante consigliamo sempre valutazione tecnica e fissaggi corretti.",
  ],
  [
    "Realizzate progetti per hotel, beach club e ristoranti?",
    "Sì. Lavoriamo per hospitality premium: file di ombrelloni sulla spiaggia, piscine di hotel, terrazze private, dehors e lounge vista mare.",
  ],
];

export function CTA({ label = "Invia una foto del tuo outdoor" }) { return <a href={whatsappUrl} className="btn btn-primary">{label}</a>; }

export function HeroMedia() {
  return <div className="hero-parasol relative w-full overflow-hidden rounded-[2rem] border border-sand/40 bg-cotton shadow-[0_34px_100px_rgba(49,89,107,0.16)] md:rounded-[2.75rem]">
    <Image
      src={brandAssets.heroDesktop}
      alt={brandAltText.heroDesktop}
      width={1280}
      height={980}
      priority
      sizes="(min-width: 1280px) 560px, (min-width: 768px) 48vw, 100vw"
      className="hidden aspect-[4/3] w-full object-cover md:block"
    />
    <Image
      src={brandAssets.heroMobile}
      alt={brandAltText.heroMobile}
      width={900}
      height={1200}
      priority
      sizes="100vw"
      className="aspect-[4/5] w-full object-cover object-center md:hidden"
    />
  </div>;
}

export function EditorialImage({ src, alt, label, title, text }: { src: string; alt: string; label: string; title: string; text: string }) {
  return <article className="image-reveal grid gap-8 overflow-hidden rounded-[2.25rem] border border-sand/40 bg-cotton p-4 shadow-[0_28px_90px_rgba(49,89,107,0.09)] md:grid-cols-2 md:p-5">
    <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-sand/10">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
    </div>
    <div className="flex flex-col justify-center p-4 md:p-8"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sage">{label}</p><h3 className="font-heading text-3xl uppercase leading-tight tracking-[0.11em] text-deep-blue md:text-4xl">{title}</h3><p className="mt-5 leading-8 text-ink/70">{text}</p></div>
  </article>;
}

export function IntroSection() {
  return <section className="container-pad reveal py-20 md:py-24"><div className="mx-auto max-w-5xl text-center"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Posizionamento</p><h2 className="font-heading text-4xl uppercase leading-tight tracking-[0.12em] text-deep-blue md:text-6xl">Non vendiamo ombrelloni. Disegniamo il dettaglio che fa ricordare il tuo spazio.</h2><p className="mx-auto mt-7 max-w-3xl leading-8 text-ink/70">Il valore di BluOrtensia è nella percezione: cosa vede l'ospite quando arriva, cosa fotografa, quale dettaglio associa al tuo beach club, hotel, villa o ristorante.</p></div></section>;
}

export function ProductSection() {
  return <section className="container-pad reveal py-20 md:py-24"><div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Modello Mirto</p><h2 className="heading max-w-3xl text-4xl leading-tight md:text-5xl">Telo artigianale o ombrellone completo, progettato sul tuo outdoor</h2><p className="mt-6 leading-8 text-ink/70">Mirto porta in outdoor una lavorazione macramè in cotone naturale: una trama scenografica, morbida e riconoscibile. Possiamo lavorare su strutture già esistenti o proporre una soluzione completa, partendo da misure e fotografie del luogo.</p><div className="mt-8 flex flex-wrap gap-4"><CTA label="Richiedi una proposta" /></div></div><div className="image-reveal overflow-hidden rounded-[2.25rem] border border-sand/40 bg-cotton shadow-[0_28px_90px_rgba(49,89,107,0.09)]"><div className="relative aspect-[4/5]"><Image src={brandAssets.productMirto} alt={brandAltText.productMirto} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" /></div></div></div></section>;
}

export function HospitalitySection() {
  return <section className="container-pad reveal py-20 md:py-24"><EditorialImage src={brandAssets.hotelPool} alt={brandAltText.hotelPool} label="Hotel e piscina" title="Una presenza elegante per aree lounge e hospitality" text="Accanto ad acqua, pietra chiara e tessili naturali, Mirto crea un'ombra filtrata e una quinta fotografabile per hotel, resort e pool club che vogliono un segno distintivo senza appesantire lo spazio." /></section>;
}

export function RestaurantSection() {
  return <section className="container-pad reveal py-20 md:py-24"><EditorialImage src={brandAssets.restaurant} alt={brandAltText.restaurant} label="Ristoranti sul mare" title="Dehors più intimi, caldi e riconoscibili" text="Sul mare, l'ombrellone deve proteggere senza chiudere la vista. La lavorazione macramè rende i tavoli più accoglienti e crea un'immagine memorabile dalla colazione alla cena." /></section>;
}

export function Benefits() {
  const items = [
    ["Lavorazione artigianale", "Nodi, ritmo e frange danno carattere allo spazio e raccontano una manifattura visibile."],
    ["Cotone naturale", "Una materia calda e tattile, coerente con pietra chiara, lino, legno e paesaggi mediterranei."],
    ["Trama aperta antivento", "La lavorazione lascia respirare l'aria e crea un'ombra leggera, con installazione sempre proporzionata al luogo."],
    ["Effetto scenografico", "Da semplice funzione a punto focale: l'ombrellone diventa una piccola architettura estiva."],
    ["Identità fotografabile", "Un dettaglio riconoscibile aiuta ospiti e clienti a ricordare, fotografare e condividere lo spazio."],
    ["Hospitality premium", "Pensato per beach club, hotel e ristoranti che cercano un linguaggio visivo non anonimo."],
  ];
  return <section className="container-pad reveal py-20 md:py-24"><div className="max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Benefici</p><h2 className="heading text-4xl md:text-5xl">Perché scegliere BluOrtensia</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(([item, text]) => <div className="card p-7" key={item}><h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-deep-blue">{item}</h3><p className="mt-4 text-sm leading-7 text-ink/70">{text}</p></div>)}</div></section>;
}

export function PhotoCTA() {
  return <section className="container-pad py-20 md:py-24"><div className="card grid gap-8 bg-deep-blue p-8 text-white md:grid-cols-[1fr_0.6fr] md:p-14"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sand">Primo passo</p><h2 className="font-heading text-4xl uppercase leading-tight tracking-[0.12em] md:text-5xl">Mandaci una foto del tuo outdoor</h2><p className="mt-6 max-w-2xl leading-8 text-white/75">Guardando il tuo spazio possiamo suggerire modello, colore, proporzioni e tipo di installazione. Una foto racconta subito luce, materiali, vento, vista e stile del luogo.</p></div><div className="flex items-center md:justify-end"><CTA label="Invia una foto del tuo outdoor" /></div></div></section>;
}

export function FAQSection() { return <section className="container-pad reveal py-20 md:py-24"><div className="max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">FAQ</p><h2 className="heading text-4xl md:text-5xl">Domande prima di immaginare il progetto</h2></div><div className="mt-8 grid gap-4">{faqs.map(([q,a]) => <details key={q} className="card p-6"><summary className="cursor-pointer font-heading text-xl uppercase tracking-[0.1em] text-deep-blue">{q}</summary><p className="mt-4 leading-7 text-ink/70">{a}</p></details>)}</div></section>; }

export function InternalLinks() { const links = [["/beach-club","Beach club"],["/hotel","Hotel"],["/ville","Ville"],["/giardini","Giardini"],["/ristoranti-sul-mare","Ristoranti sul mare"],["/forte-dei-marmi","Forte dei Marmi"],["/puglia","Puglia"],["/sardegna","Sardegna"],["/costa-smeralda","Costa Smeralda"],["/sicilia","Sicilia"]]; return <div className="flex flex-wrap gap-3">{links.map(([href,label]) => <Link className="btn btn-ghost" key={href} href={href}>{label}</Link>)}</div>; }
