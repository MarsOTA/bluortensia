import Image from "next/image";
import Link from "next/link";
import { navLinks, whatsappUrl } from "@/lib/site";

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-sand/30 bg-warm-white/85 backdrop-blur-xl">
    <div className="container-pad flex h-20 items-center justify-between gap-6">
      <Link href="/" className="flex items-center" aria-label="BluOrtensia home"><Image src="/bluortensia-logo.svg" alt="BluOrtensia" width={260} height={45} priority className="h-auto w-44 sm:w-56" /></Link>
      <nav className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink/70 lg:flex">
        {navLinks.map(([href,label]) => <Link key={href} href={href} className="hover:text-deep-blue">{label}</Link>)}
      </nav>
      <a className="btn btn-primary hidden sm:inline-flex" href={whatsappUrl}>WhatsApp</a>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="border-t border-sand/30 bg-cotton py-12">
    <div className="container-pad grid gap-8 md:grid-cols-3">
      <div><Image src="/bluortensia-logo.svg" alt="BluOrtensia" width={300} height={52} className="h-auto w-56" /><p className="mt-4 text-sm leading-7 text-ink/70">Ombrelloni crochet e macramé per outdoor mediterranei scenografici, riconoscibili e fotogenici.</p></div>
      <div><h3 className="heading text-sm">Destinazioni</h3><div className="mt-4 grid gap-2 text-sm text-ink/70"><Link href="/forte-dei-marmi">Forte dei Marmi</Link><Link href="/puglia">Puglia</Link><Link href="/sardegna">Sardegna</Link><Link href="/costa-smeralda">Costa Smeralda</Link><Link href="/sicilia">Sicilia</Link></div></div>
      <div><h3 className="heading text-sm">Contatti</h3><p className="mt-4 text-sm text-ink/70">Progetti su richiesta per beach club, hotel, ville, giardini e ristoranti sul mare.</p><a className="btn btn-ghost mt-5" href={whatsappUrl}>Richiedi proposta</a></div>
    </div>
  </footer>;
}
