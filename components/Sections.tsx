import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export const faqs = [
  [
    "Come capisco quale ombrellone è adatto al mio spazio?",
    "Il modo più semplice è inviarci una foto dell'area outdoor, le misure indicative e il tipo di utilizzo. Da lì valutiamo proporzioni, colore, densità della trama e soluzione più coerente con il contesto.",
  ],
  [
    "Posso usare una struttura di ombrellone già esistente?",
    "Sì, quando la struttura è adeguata possiamo progettare un telo artigianale su misura. Chiediamo diametro, altezza, foto della ferramenta e dettagli tecnici per evitare adattamenti imprecisi.",
  ],
  [
    "La trama aperta è indicata per zone ventilate?",
    "La lavorazione aperta lascia passare più aria rispetto a un telo compatto e rende l'effetto visivo più leggero. In presenza di vento importante consigliamo sempre valutazione tecnica, fissaggi corretti e gestione responsabile dell'apertura.",
  ],
  [
    "Realizzate progetti per hotel, beach club e ristoranti?",
    "Sì. Lavoriamo per spazi hospitality che vogliono un dettaglio riconoscibile: file di ombrelloni sulla spiaggia, piscine di hotel, terrazze private, dehors e lounge vista mare.",
  ],
];

export function ParasolArt() {
  return <div className="hero-parasol relative mx-auto min-h-[420px] w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-sand/40 bg-cotton shadow-[0_40px_120px_rgba(49,89,107,0.16)]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(143,182,200,.22),transparent_35%),linear-gradient(135deg,rgba(220,199,163,.26),transparent_45%)]" />
    <div className="absolute left-8 top-8 rounded-full border border-sand/50 bg-warm-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-deep-blue">spazio immagine</div>
    <div className="absolute bottom-10 left-8 right-8 rounded-[2rem] bg-warm-white/88 p-6 backdrop-blur">
      <p className="font-heading text-3xl uppercase tracking-[0.12em] text-deep-blue">Crochet, luce, ombra</p>
      <p className="mt-3 text-sm leading-7 text-ink/70">Placeholder per una grande immagine lifestyle BluOrtensia: ombrellone artigianale, mare chiaro, lettini in lino, dettaglio delle frange mosse dal vento.</p>
    </div>
    <div className="absolute left-1/2 top-20 h-64 w-1 -translate-x-1/2 bg-beige/80" />
    <div className="absolute left-1/2 top-16 h-44 w-[22rem] -translate-x-1/2 rounded-t-full border border-sand bg-cotton/95 shadow-2xl" />
    <div className="absolute left-1/2 top-16 h-44 w-[22rem] -translate-x-1/2 rounded-t-full bg-[repeating-linear-gradient(90deg,rgba(185,159,124,.28)_0_1px,transparent_1px_34px)]" />
    <div className="absolute left-1/2 top-56 flex -translate-x-1/2 gap-4 text-3xl text-beige"><span>⌁</span><span>⌁</span><span>⌁</span><span>⌁</span><span>⌁</span></div>
  </div>;
}

export function CTA({ label = "Invia una foto del tuo outdoor" }) { return <a href={whatsappUrl} className="btn btn-primary">{label}</a>; }

export function ImagePlaceholder({ label, title, text }: { label: string; title: string; text: string }) {
  return <article className="image-reveal group min-h-[360px] overflow-hidden rounded-[2.25rem] border border-sand/40 bg-cotton shadow-[0_28px_90px_rgba(49,89,107,0.09)]">
    <div className="flex h-56 items-start justify-between bg-gradient-to-br from-warm-white via-sand/20 to-soft-blue/20 p-6">
      <span className="rounded-full bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-deep-blue">{label}</span>
      <span className="text-5xl text-sand transition group-hover:rotate-6">✺</span>
    </div>
    <div className="p-7"><h3 className="font-heading text-3xl uppercase tracking-[0.11em] text-deep-blue">{title}</h3><p className="mt-4 text-sm leading-7 text-ink/70">{text}</p></div>
  </article>;
}

export function AtmosphereGrid() {
  const scenes = [
    ["Beach club", "File di ombrelloni che diventano una firma visiva", "Una spiaggia ordinata, luminosa, riconoscibile già da una foto dall'alto: il crochet ammorbidisce le linee e rende premium anche la zona lettini."],
    ["Hotel pool", "Piscine e resort con un dettaglio memorabile", "Accanto ad acqua, pietra chiara e tessili naturali, l'ombrellone BluOrtensia crea ombra filtrata e una quinta elegante per ospiti e contenuti social."],
    ["Villa terrace", "Terrazze private con atmosfera da estate italiana", "Per ville al mare, patii e bordi piscina: una presenza leggera, artigianale, pensata per dialogare con lino, cotto, ulivi e bouganville."],
    ["Restaurant dehors", "Tavoli vista mare più intimi e fotografabili", "Il dehors acquista calore senza appesantirsi: frange, nodi e trama aperta creano un segno riconoscibile durante pranzo, aperitivo e cena."],
  ];
  return <section className="container-pad reveal py-24"><div className="max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Atmosfere</p><h2 className="heading text-4xl md:text-5xl">Quattro modi di rendere indimenticabile l'ombra</h2></div><div className="mt-12 grid gap-6 md:grid-cols-2">{scenes.map(([label,title,text]) => <ImagePlaceholder key={label} label={label} title={title} text={text} />)}</div></section>;
}

export function Benefits() {
  const items = [
    ["Lavorazione artigianale", "Ogni telo nasce da mani esperte: nodi, ritmo e frange non sono decorazioni casuali, ma una trama pensata per dare carattere allo spazio."],
    ["Cotone naturale", "Una materia calda e tattile, perfetta per contesti mediterranei dove il lusso non deve sembrare rigido, ma spontaneo e vissuto."],
    ["Trama aperta antivento", "La lavorazione lascia respirare l'aria e crea un'ombra leggera. È ideale per un effetto scenico arioso, con installazione sempre proporzionata al luogo."],
    ["Effetto scenografico", "Da elemento funzionale a punto focale: l'ombrellone diventa una piccola architettura estiva che cambia la percezione di lettini, tavoli e terrazze."],
    ["Identità fotografabile", "Un dettaglio riconoscibile aiuta ospiti e clienti a ricordare il tuo spazio, fotografarlo e associarlo a un'esperienza precisa."],
    ["Soluzione per hospitality premium", "Pensata per beach club, hotel e ristoranti che non cercano una fornitura anonima, ma un linguaggio visivo coerente con il proprio posizionamento."],
  ];
  return <section className="container-pad reveal py-24"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Perché BluOrtensia</p><h2 className="heading max-w-3xl text-4xl md:text-5xl">Dettagli concreti, non promesse generiche</h2></div><CTA label="Richiedi una proposta per il tuo spazio" /></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(([item, text]) => <div className="card p-7" key={item}><div className="mb-5 h-11 w-11 rounded-full border border-sand bg-warm-white text-center leading-10 text-sage">✦</div><h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-deep-blue">{item}</h3><p className="mt-4 text-sm leading-7 text-ink/70">{text}</p></div>)}</div></section>;
}

export function ProductSection() {
  return <section className="container-pad reveal py-24"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Prodotto</p><h2 className="heading text-4xl md:text-5xl">Telo artigianale o ombrellone completo, progettato sul tuo outdoor</h2><p className="mt-6 leading-8 text-ink/70">BluOrtensia può lavorare su strutture già esistenti o proporre una soluzione completa. Per una proposta corretta chiediamo sempre misure, fotografie e contesto d'uso: spiaggia, piscina, terrazza, giardino o dehors.</p></div><div className="grid gap-4 sm:grid-cols-2"><div className="card p-7"><h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-deep-blue">Telo artigianale</h3><p className="mt-4 text-sm leading-7 text-ink/70">Copertura crochet/macramé su misura per valorizzare una struttura adatta già presente.</p></div><div className="card p-7"><h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-deep-blue">Ombrellone completo</h3><p className="mt-4 text-sm leading-7 text-ink/70">Soluzione coordinata per nuovi allestimenti, aperture stagionali e restyling outdoor.</p></div><div className="card p-7 sm:col-span-2"><h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-deep-blue">Misure e foto prima di tutto</h3><p className="mt-4 text-sm leading-7 text-ink/70">Diametro, altezza, base, vento, colore dell'ambiente e fotografie ci permettono di consigliare modello, tonalità e installazione senza improvvisare.</p></div></div></div></section>;
}

export function PhilosophySection() {
  return <section className="container-pad reveal py-24"><div className="rounded-[2.75rem] border border-sand/40 bg-deep-blue p-8 text-white md:p-16"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-sand">Posizionamento</p><h2 className="font-heading text-4xl uppercase leading-tight tracking-[0.12em] md:text-6xl">Non vendiamo ombrelloni. Disegniamo il dettaglio che fa ricordare il tuo spazio.</h2><p className="mt-7 max-w-3xl leading-8 text-white/75">Il nostro lavoro comincia dalla percezione: cosa vede l'ospite quando arriva, cosa fotografa, quale dettaglio associa al tuo beach club, hotel, villa o ristorante. L'ombra diventa racconto, non solo funzione.</p></div></section>;
}

export function PhotoCTA() {
  return <section className="container-pad py-24"><div className="card grid gap-8 bg-cotton p-8 md:grid-cols-[1fr_0.8fr] md:p-14"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">Primo passo</p><h2 className="heading text-4xl md:text-5xl">Mandaci una foto del tuo spazio</h2><p className="mt-6 leading-8 text-ink/70">Guardando il tuo outdoor possiamo suggerire modello, colore, proporzioni e tipo di installazione. Una foto racconta subito luce, materiali, vento, vista e stile del luogo.</p></div><div className="flex items-center md:justify-end"><CTA label="Invia una foto del tuo outdoor" /></div></div></section>;
}

export function FAQSection() { return <section className="container-pad reveal py-24"><div className="max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sage">FAQ</p><h2 className="heading text-4xl md:text-5xl">Domande prima di immaginare il progetto</h2></div><div className="mt-8 grid gap-4">{faqs.map(([q,a]) => <details key={q} className="card p-6"><summary className="cursor-pointer font-heading text-xl uppercase tracking-[0.1em] text-deep-blue">{q}</summary><p className="mt-4 leading-7 text-ink/70">{a}</p></details>)}</div></section>; }

export function InternalLinks() { const links = [["/beach-club","Beach club"],["/hotel","Hotel"],["/ville","Ville"],["/giardini","Giardini"],["/ristoranti-sul-mare","Ristoranti sul mare"],["/forte-dei-marmi","Forte dei Marmi"],["/puglia","Puglia"],["/sardegna","Sardegna"],["/costa-smeralda","Costa Smeralda"],["/sicilia","Sicilia"]]; return <div className="flex flex-wrap gap-3">{links.map(([href,label]) => <Link className="btn btn-ghost" key={href} href={href}>{label}</Link>)}</div>; }
