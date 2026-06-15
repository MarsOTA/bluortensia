export const siteUrl = "https://www.bluortensia.com";
export const whatsappUrl = "https://wa.me/393000000000?text=Ciao%20BluOrtensia%2C%20vorrei%20informazioni%20sugli%20ombrelloni%20artigianali";

export const navLinks = [
  ["/beach-club", "Beach club"],
  ["/hotel", "Hotel"],
  ["/ville", "Ville"],
  ["/giardini", "Giardini"],
  ["/ristoranti-sul-mare", "Ristoranti"],
  ["/contatti", "Contatti"],
] as const;

export const pageData = {
  "beach-club": { title: "Ombrelloni per beach club | BluOrtensia", description: "Ombrelloni artigianali crochet e macramé per beach club: scenografie riconoscibili, fotogeniche e mediterranee per stabilimenti premium.", h1: "Ombrelloni artigianali per beach club", audience: "beach club", body: "Trasformiamo file di ombrelloni in una firma visiva coerente, pensata per lettini, passerelle, lounge e contenuti social." },
  hotel: { title: "Ombrelloni per hotel di lusso | BluOrtensia", description: "Parasol crochet e macramé per hotel, resort e boutique hospitality che desiderano terrazze, piscine e spiagge più memorabili.", h1: "Ombrelloni artigianali per hotel", audience: "hotel", body: "Un dettaglio artigianale che valorizza arrival experience, piscina, beach area e suite outdoor con eleganza leggera." },
  ville: { title: "Ombrelloni per ville sul mare | BluOrtensia", description: "Coperture e ombrelloni artigianali per ville private, giardini mediterranei e dimore al mare dal carattere esclusivo.", h1: "Ombrelloni artigianali per ville sul mare", audience: "ville", body: "Per pergole leggere, bordi piscina e terrazze panoramiche: una presenza scenica naturale, non un semplice accessorio." },
  giardini: { title: "Ombrelloni per giardini mediterranei | BluOrtensia", description: "Ombrelloni crochet e macramé per giardini, patio e outdoor living con stile mediterraneo, cotone naturale e trama ariosa.", h1: "Ombrelloni artigianali per giardini", audience: "giardini", body: "Il giardino diventa una stanza estiva: ombra filtrata, texture materiche e una palette che dialoga con pietra, verde e lino." },
  "ristoranti-sul-mare": { title: "Ombrelloni per ristoranti sul mare | BluOrtensia", description: "Ombrelloni artigianali per dehors e ristoranti sul mare: atmosfera riconoscibile, premium e fotogenica per tavoli outdoor.", h1: "Ombrelloni artigianali per ristoranti sul mare", audience: "ristoranti sul mare", body: "Creiamo un paesaggio ordinato e memorabile per pranzi vista mare, aperitivi e cene estive all'aperto." },
  "forte-dei-marmi": { title: "Ombrelloni Forte dei Marmi | BluOrtensia", description: "Ombrelloni artigianali per beach club, ville e hotel a Forte dei Marmi: stile mediterraneo elegante e riconoscibile.", h1: "Ombrelloni artigianali a Forte dei Marmi", audience: "Forte dei Marmi", body: "Per contesti raffinati della Versilia, BluOrtensia porta una scenografia chiara, naturale e fotografabile su spiagge, ville e hotel." },
  puglia: { title: "Ombrelloni Puglia | BluOrtensia", description: "Ombrelloni crochet e macramé per masserie, beach club, hotel e ville in Puglia con palette naturale e stile mediterraneo.", h1: "Ombrelloni artigianali in Puglia", audience: "Puglia", body: "Calce bianca, pietra, ulivi e mare: la trama artigianale BluOrtensia nasce per armonizzarsi con l'estetica pugliese." },
  sardegna: { title: "Ombrelloni Sardegna | BluOrtensia", description: "Ombrelloni artigianali per beach club, hotel e ville in Sardegna: coperture fotogeniche in stile mediterraneo naturale.", h1: "Ombrelloni artigianali in Sardegna", audience: "Sardegna", body: "Per coste, resort e ville private, progettiamo ombra scenica che rispetta luce, vento e paesaggio naturale." },
  "costa-smeralda": { title: "Ombrelloni Costa Smeralda | BluOrtensia", description: "Ombrelloni artigianali premium per Costa Smeralda: beach club, hotel e ville con outdoor riconoscibile e fotogenico.", h1: "Ombrelloni artigianali in Costa Smeralda", audience: "Costa Smeralda", body: "Una proposta discreta e luxury per outdoor iconici: texture in cotone, profili morbidi e identità visiva immediata." },
  sicilia: { title: "Ombrelloni Sicilia | BluOrtensia", description: "Ombrelloni crochet e macramé per hotel, beach club, ville e ristoranti in Sicilia con eleganza mediterranea artigianale.", h1: "Ombrelloni artigianali in Sicilia", audience: "Sicilia", body: "Tra agrumi, pietra chiara e blu profondo, BluOrtensia aggiunge una trama scenografica alle aree outdoor siciliane." },
};

export type PageKey = keyof typeof pageData;
