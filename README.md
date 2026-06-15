# BluOrtensia Next.js website

Sito web BluOrtensia realizzato da zero con Next.js App Router, Tailwind CSS e GSAP. Non usa WordPress, PHP, Elementor o WooCommerce.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- SEO metadata per pagina
- JSON-LD per Organization, Product, FAQ e ContactPage

## Pagine incluse

- `/` Home
- `/beach-club` Ombrelloni per beach club
- `/hotel` Ombrelloni per hotel
- `/ville` Ombrelloni per ville
- `/giardini` Ombrelloni per giardini
- `/ristoranti-sul-mare` Ombrelloni per ristoranti sul mare
- `/forte-dei-marmi` Ombrelloni Forte dei Marmi
- `/puglia` Ombrelloni Puglia
- `/sardegna` Ombrelloni Sardegna
- `/costa-smeralda` Ombrelloni Costa Smeralda
- `/sicilia` Ombrelloni Sicilia
- `/contatti` Contatti

## Installazione

```bash
npm install
```

## Sviluppo locale

```bash
npm run dev
```

Apri `http://localhost:3000` nel browser.

## Build produzione

```bash
npm run build
npm run start
```

## Deploy

Consigliato deploy su Vercel:

1. Collega il repository a Vercel.
2. Framework preset: Next.js.
3. Build command: `npm run build`.
4. Output gestito automaticamente da Next.js.
5. Configura eventuali variabili ambiente future nel pannello Vercel.

## Personalizzazioni consigliate

- Sostituire il numero WhatsApp in `lib/site.ts`.
- Aggiornare `siteUrl` in `lib/site.ts` con il dominio definitivo.
- Aggiungere fotografie reali degli ombrelloni BluOrtensia quando disponibili.
