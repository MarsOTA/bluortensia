import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export const faqs = [
  ["Cosa rende riconoscibile un ombrellone BluOrtensia?", "La lavorazione crochet e macramé crea una silhouette scenografica e una trama fotografabile che trasforma l'area outdoor in un segno distintivo del brand."],
  ["Sono adatti a contesti ventilati?", "La trama aperta favorisce il passaggio dell'aria e rende la copertura più leggera rispetto a superfici compatte, pur richiedendo sempre installazione professionale e valutazione del sito."],
  ["Realizzate coperture e ombrelloni completi?", "Sì, possiamo fornire coperture artigianali o soluzioni complete, in base a misure, basi, struttura esistente e obiettivi estetici del progetto."],
  ["Per quali attività sono pensati?", "Sono pensati per beach club, hotel, ville, giardini, ristoranti sul mare e spazi hospitality che vogliono un outdoor memorabile."],
];

export function ParasolArt() {
  return <div className="hero-parasol relative mx-auto aspect-square max-w-md rounded-full bg-soft-blue/10 p-8">
    <div className="absolute left-1/2 top-16 h-72 w-1 -translate-x-1/2 bg-beige" />
    <div className="absolute left-1/2 top-10 h-48 w-80 -translate-x-1/2 rounded-t-full border border-sand bg-cotton shadow-2xl" />
    <div className="absolute left-1/2 top-10 h-48 w-80 -translate-x-1/2 rounded-t-full bg-[radial-gradient(circle_at_50%_0%,rgba(143,182,200,.35),transparent_55%)]" />
    <div className="absolute left-1/2 top-56 flex -translate-x-1/2 gap-3 text-3xl text-sand"><span>⌁</span><span>⌁</span><span>⌁</span><span>⌁</span><span>⌁</span></div>
  </div>;
}

export function CTA({ label = "Parla con BluOrtensia su WhatsApp" }) { return <a href={whatsappUrl} className="btn btn-primary">{label}</a>; }

export function Benefits() {
  const items = ["Handmade", "Cotone naturale", "Trama aperta", "Wind-friendly", "Fotogenico", "Stile mediterraneo"];
  return <section className="container-pad reveal py-20"><h2 className="heading text-4xl">Benefici</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <div className="card p-6" key={item}><div className="mb-4 h-10 w-10 rounded-full bg-sage/15 text-center leading-10 text-sage">✦</div><h3 className="font-heading text-2xl uppercase tracking-[0.12em] text-deep-blue">{item}</h3><p className="mt-3 text-sm leading-7 text-ink/70">Una qualità pensata per elevare lo spazio, renderlo riconoscibile e migliorare l'esperienza visiva degli ospiti.</p></div>)}</div></section>;
}

export function FAQSection() { return <section className="container-pad reveal py-20"><h2 className="heading text-4xl">Domande frequenti</h2><div className="mt-8 grid gap-4">{faqs.map(([q,a]) => <details key={q} className="card p-6"><summary className="cursor-pointer font-heading text-xl uppercase tracking-[0.1em] text-deep-blue">{q}</summary><p className="mt-4 leading-7 text-ink/70">{a}</p></details>)}</div></section>; }

export function InternalLinks() { const links = [["/beach-club","Beach club"],["/hotel","Hotel"],["/ville","Ville"],["/giardini","Giardini"],["/ristoranti-sul-mare","Ristoranti sul mare"],["/puglia","Puglia"],["/sardegna","Sardegna"]]; return <div className="flex flex-wrap gap-3">{links.map(([href,label]) => <Link className="btn btn-ghost" key={href} href={href}>{label}</Link>)}</div>; }
