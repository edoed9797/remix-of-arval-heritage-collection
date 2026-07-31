import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/catalog";
import banner from "@/assets/banner-gift.jpg";

export const Route = createFileRoute("/collezioni")({
  head: () => ({
    meta: [
      { title: "Collezioni in argento — Arval Argenti Valenza" },
      {
        name: "description",
        content:
          "Cornici, posateria, vassoi, complementi d'arredo e articoli sacri in argento. Selezione Arval con confezione regalo e incisione.",
      },
      { property: "og:title", content: "Collezioni in argento — Arval Argenti Valenza" },
      {
        property: "og:description",
        content: "La selezione completa di argenteria artigianale della boutique di Valenza.",
      },
    ],
  }),
  component: Collezioni,
});

const quickFilters = ["Tutto", "Cornici", "Posateria", "Tavola", "Complementi", "Nascita", "Sacro"];

function Collezioni() {
  const [active, setActive] = useState("Tutto");
  const list = active === "Tutto" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="shell pt-36 pb-14 md:pt-44">
        <p className="eyebrow">Collezioni</p>
        <h1 className="display-lg mt-6 max-w-3xl text-ink">
          Argenteria artigianale, pensata per durare generazioni.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Ogni pezzo è selezionato nella nostra boutique di Valenza e può essere inciso e
          confezionato a mano.
        </p>
      </section>

      <section className="shell">
        <div className="media-card aspect-[21/8]">
          <img src={banner} alt="Confezione regalo Arval" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="shell py-14">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border pb-6">
          <div className="no-scrollbar flex min-w-0 gap-2 overflow-x-auto">
            {quickFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[0.7rem] tracking-[0.16em] uppercase transition-colors duration-300 ${
                  active === f ? "bg-ink text-primary-foreground" : "bg-muted text-charcoal hover:bg-secondary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="hidden shrink-0 items-center gap-2 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase sm:flex">
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.3} />
            Filtri
          </button>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contatti" className="btn-base btn-outline">
            Non trovate quello che cercate? Scriveteci
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
