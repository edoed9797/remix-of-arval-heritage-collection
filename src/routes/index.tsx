import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gift, Landmark, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, giftGuides, occasions, products } from "@/data/catalog";
import hero from "@/assets/hero-silver.jpg";
import heritage from "@/assets/heritage.jpg";
import bannerGift from "@/assets/banner-gift.jpg";
import occWedding from "@/assets/occ-wedding.jpg";
import occHome from "@/assets/occ-home.jpg";
import occBirth from "@/assets/occ-birth.jpg";
import occReligious from "@/assets/occ-religious.jpg";
import pVase from "@/assets/p-vase.jpg";
import pTray from "@/assets/p-tray.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arval Argenti Valenza — L'argento racconta emozioni dal 1967" },
      {
        name: "description",
        content:
          "Boutique storica di argenteria a Valenza: regali di nozze, nascita, laurea, articoli sacri e complementi d'arredo in argento, con confezione regalo.",
      },
      { property: "og:title", content: "Arval Argenti Valenza — L'argento racconta emozioni dal 1967" },
      {
        property: "og:description",
        content: "Oggetti in argento che diventano ricordi. Artigianato italiano dal 1967.",
      },
    ],
  }),
  component: Home,
});

const usps = [
  { icon: Sparkles, title: "Made in Italy", copy: "Lavorazioni artigianali di Valenza" },
  { icon: Landmark, title: "Dal 1967", copy: "Tre generazioni di argentieri" },
  { icon: Gift, title: "Confezione regalo", copy: "Inclusa, con incisione su richiesta" },
];

const instagram = [occWedding, occHome, occBirth, occReligious, pVase, pTray];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header overlay />

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[36rem] w-full overflow-hidden">
        <img
          src={hero}
          alt="Vaso, candeliere e vassoio in argento su tavola in lino"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/25 to-transparent" />
        <div className="shell relative flex h-full items-end pb-20 md:items-center md:pb-0">
          <div className="max-w-2xl rise">
            <p className="eyebrow text-white/70">Argenteria artistica · Valenza</p>
            <h1 className="display-xl mt-6 text-white">
              L'argento racconta
              <br />
              emozioni dal 1967.
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/80">
              Oggetti che diventano ricordi. Selezionati, incisi e confezionati a mano nella nostra
              boutique.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/collezioni" className="btn-base bg-white text-ink hover:bg-white/85">
                Scopri le collezioni
              </Link>
              <Link to="/collezioni" className="btn-base btn-ghost-light">
                Idee regalo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="border-b border-border">
        <div className="shell grid gap-10 py-14 sm:grid-cols-3 md:py-16">
          {usps.map((u) => (
            <div key={u.title} className="flex min-w-0 items-start gap-4">
              <u.icon className="mt-1 h-5 w-5 shrink-0 text-silver-deep" strokeWidth={1.2} />
              <div className="min-w-0">
                <p className="font-display text-xl text-ink">{u.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{u.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP BY OCCASION */}
      <section className="shell py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="eyebrow">Regalare</p>
            <h2 className="display-lg mt-5 max-w-2xl text-ink">
              Ogni occasione merita
              <br className="hidden sm:block" /> il suo argento.
            </h2>
          </div>
          <Link to="/collezioni" className="link-quiet text-[0.7rem] tracking-[0.2em] uppercase">
            Tutte le occasioni
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {occasions.map((o) => (
            <Link
              key={o.title}
              to="/collezioni"
              className={`media-card group relative block aspect-[4/5] sm:aspect-[16/10] ${o.span}`}
            >
              <img
                src={o.image}
                alt={o.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-7 bottom-7">
                <h3 className="font-display text-3xl text-white md:text-4xl">{o.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
                  {o.copy}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" strokeWidth={1.3} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-8">
        <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
          <div className="min-w-0">
            <p className="eyebrow">Più amati</p>
            <h2 className="display-md mt-4 text-ink">I nostri best seller</h2>
          </div>
          <Link to="/collezioni" className="link-quiet shrink-0 text-[0.7rem] tracking-[0.2em] uppercase">
            Vedi tutto
          </Link>
        </div>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 md:px-10 xl:px-16">
          {products.slice(0, 6).map((p) => (
            <div key={p.slug} className="w-[76vw] shrink-0 snap-start sm:w-[42vw] lg:w-[26vw] xl:w-[22rem]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="shell grid items-center gap-12 py-28 md:py-36 lg:grid-cols-12">
        <div className="media-card lg:col-span-7">
          <img
            src={heritage}
            alt="Artigiano argentiere al lavoro negli anni Sessanta"
            loading="lazy"
            width={1200}
            height={1408}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="eyebrow">Dal 1967</p>
          <h2 className="display-lg mt-5 text-ink">La nostra storia</h2>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">
            Nata a Valenza, città dell'oreficeria italiana, Arval seleziona e lavora l'argento da
            oltre cinquant'anni. Ogni oggetto passa dalle mani dei nostri artigiani: martellatura,
            lucidatura, incisione. Nulla è industriale, tutto è pensato per durare più di chi lo
            riceve.
          </p>
          <Link to="/storia" className="btn-base btn-outline mt-10">
            Scopri Arval
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="shell">
        <p className="eyebrow">Categorie</p>
        <h2 className="display-md mt-4 text-ink">Esplora la maison</h2>
        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link key={c} to="/collezioni" className="group">
              <div className="media-card aspect-square">
                <img
                  src={products[i % products.length]!.image}
                  alt={c}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 font-display text-xl text-ink">{c}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* LUXURY BANNER */}
      <section className="relative mt-28 h-[70vh] min-h-[26rem] overflow-hidden md:mt-36">
        <img
          src={bannerGift}
          alt="Confezione regalo in argento con nastro di seta"
          loading="lazy"
          width={1920}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/45 to-transparent" />
        <div className="shell relative flex h-full items-center">
          <div className="max-w-lg">
            <h2 className="display-lg text-white">The beauty of giving.</h2>
            <p className="mt-6 text-white/80">
              Confezione firmata Arval, biglietto scritto a mano, incisione dedicata.
            </p>
            <Link to="/collezioni" className="btn-base btn-ghost-light mt-9">
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="shell py-28 md:py-36">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
          <div className="min-w-0">
            <p className="eyebrow">Novità</p>
            <h2 className="display-md mt-4 text-ink">Nuovi arrivi</h2>
          </div>
          <Link to="/collezioni" className="link-quiet shrink-0 text-[0.7rem] tracking-[0.2em] uppercase">
            Tutta la collezione
          </Link>
        </div>
        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => (
            <ProductCard key={p.slug + "-new"} product={p} />
          ))}
        </div>
      </section>

      {/* GIFT GUIDE */}
      <section className="bg-sand/70 py-24">
        <div className="shell">
          <p className="eyebrow">Gift guide</p>
          <h2 className="display-md mt-4 text-ink">Non sapete cosa regalare?</h2>
          <div className="no-scrollbar mt-12 flex gap-5 overflow-x-auto pb-2">
            {giftGuides.map((g) => (
              <Link
                key={g.title}
                to="/collezioni"
                className="group flex w-[17rem] shrink-0 flex-col justify-between rounded-2xl bg-background p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="font-display text-2xl leading-tight text-ink">{g.title}</p>
                <span className="mt-14 flex items-center gap-2 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                  {g.note}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.4} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="shell py-28">
        <div className="text-center">
          <p className="eyebrow">@arvalargenti</p>
          <h2 className="display-md mt-4 text-ink">Il nostro diario d'argento</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-6">
          {instagram.map((src, i) => (
            <a key={i} href="#" className="media-card aspect-square">
              <img src={src} alt="Post Instagram Arval" loading="lazy" className="h-full w-full object-cover" />
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
