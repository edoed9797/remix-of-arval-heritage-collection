import pFrame from "@/assets/p-frame.jpg";
import pVase from "@/assets/p-vase.jpg";
import pCutlery from "@/assets/p-cutlery.jpg";
import pBowl from "@/assets/p-bowl.jpg";
import pCandle from "@/assets/p-candle.jpg";
import pTray from "@/assets/p-tray.jpg";
import occWedding from "@/assets/occ-wedding.jpg";
import occBirth from "@/assets/occ-birth.jpg";
import occHome from "@/assets/occ-home.jpg";
import occReligious from "@/assets/occ-religious.jpg";

export type Product = {
  slug: string;
  name: string;
  line: string;
  price: number;
  image: string;
  lifestyle: string;
  category: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "cornice-perlata",
    name: "Cornice Perlata",
    line: "Argento 925 · 13×18 cm",
    price: 185,
    image: pFrame,
    lifestyle: occWedding,
    category: "Cornici",
    badge: "Più regalato",
  },
  {
    slug: "vaso-scanalato",
    name: "Vaso Scanalato",
    line: "Argento laminato · h 26 cm",
    price: 320,
    image: pVase,
    lifestyle: occHome,
    category: "Complementi",
  },
  {
    slug: "servizio-posate-milano",
    name: "Servizio Posate Milano",
    line: "24 pezzi · finitura satinata",
    price: 640,
    image: pCutlery,
    lifestyle: occHome,
    category: "Posateria",
    badge: "Lista nozze",
  },
  {
    slug: "coppa-valenza",
    name: "Coppa Valenza",
    line: "Argento 925 · Ø 24 cm",
    price: 410,
    image: pBowl,
    lifestyle: occWedding,
    category: "Tavola",
  },
  {
    slug: "candelieri-novecento",
    name: "Candelieri Novecento",
    line: "Coppia · h 22 cm",
    price: 275,
    image: pCandle,
    lifestyle: occHome,
    category: "Complementi",
  },
  {
    slug: "vassoio-ovale-inciso",
    name: "Vassoio Ovale Inciso",
    line: "Argento 925 · 38 cm",
    price: 495,
    image: pTray,
    lifestyle: occHome,
    category: "Tavola",
    badge: "Nuovo",
  },
  {
    slug: "cornice-battesimo",
    name: "Cornice Battesimo",
    line: "Argento 925 · 10×15 cm",
    price: 120,
    image: pFrame,
    lifestyle: occBirth,
    category: "Nascita",
  },
  {
    slug: "icona-sacra-maria",
    name: "Icona Sacra Maria",
    line: "Laminato argento · 16 cm",
    price: 95,
    image: pFrame,
    lifestyle: occReligious,
    category: "Sacro",
  },
];

export const occasions = [
  { title: "Matrimonio", copy: "Liste nozze e regali che restano", image: occWedding, span: "lg:col-span-7" },
  { title: "Nascita", copy: "Il primo argento di una vita", image: occBirth, span: "lg:col-span-5" },
  { title: "Casa", copy: "Oggetti quotidiani, gesti preziosi", image: occHome, span: "lg:col-span-5" },
  { title: "Sacro", copy: "Battesimo, comunione, cresima", image: occReligious, span: "lg:col-span-7" },
];

export const categories = [
  "Argenteria",
  "Cornici",
  "Posateria",
  "Complementi d'arredo",
  "Regali di nozze",
  "Articoli sacri",
  "Gioielli",
  "Idee regalo",
];

export const giftGuides = [
  { title: "Regali sotto €50", note: "12 selezioni" },
  { title: "Regali sotto €100", note: "24 selezioni" },
  { title: "Matrimonio", note: "Lista nozze" },
  { title: "Laurea", note: "18 selezioni" },
  { title: "Battesimo", note: "16 selezioni" },
  { title: "Casa", note: "30 selezioni" },
];
