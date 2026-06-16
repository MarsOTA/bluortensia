import Image from "next/image";
import Link from "next/link";
import { brandAltText, brandAssets } from "@/lib/assets";
import { whatsappUrl } from "@/lib/site";

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-sand/30 bg-warm-white/95 backdrop-blur-xl">
    <div className="container-pad flex h-20 items-center justify-between gap-6">
      <Link href="/" className="flex shrink-0 items-center" aria-label="BluOrtensia home">
        <Image src={brandAssets.logo} alt={brandAltText.logo} width={190} height={34} priority className="h-auto w-40 sm:w-48" />
      </Link>
      <nav className="hidden items-center gap-12 font-heading text-lg text-deep-blue md:flex">
        <Link href="/" className="hover:text-beige">Home</Link>
        <Link href="/beach-club" className="hover:text-beige">Ombrelloni</Link>
        <Link href="/contatti" className="hover:text-beige">Contatti</Link>
      </nav>
      <a className="btn btn-primary hidden sm:inline-flex" href={whatsappUrl}>Richiedi preventivo</a>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="border-t border-sand/30 bg-cotton py-12">
    <div className="container-pad grid gap-8 md:grid-cols-3">
      <div><Image src={brandAssets.logo} alt={brandAltText.logo} width={190} height={33} className="h-auto w-48" /><p className="mt-4 text-sm leading-7 text-ink/70">Ombrelloni crochet e macramé per outdoor mediterranei scenografici, riconoscibili e fotogenici.</p></div>
      <div><h3 className="heading text-sm">Destinazioni</h3><div className="mt-4 grid gap-2 text-sm text-ink/70"><Link href="/forte-dei-marmi">Forte dei Marmi</Link><Link href="/puglia">Puglia</Link><Link href="/sardegna">Sardegna</Link><Link href="/costa-smeralda">Costa Smeralda</Link><Link href="/sicilia">Sicilia</Link></div></div>
      <div><h3 className="heading text-sm">Contatti</h3><p className="mt-4 text-sm text-ink/70">Progetti su richiesta per beach club, hotel, ville, giardini e ristoranti sul mare.</p><a className="btn btn-ghost mt-5" href={whatsappUrl}>Richiedi proposta</a></div>
    </div>
  </footer>;
}
