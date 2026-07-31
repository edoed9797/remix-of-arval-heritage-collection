import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Gift, Heart, PenLine, Truck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/prodotto/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Prodotto non disponibile — Arval" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Arval Argenti Valenza` },
        { name: "description", content: `${product.name}. ${product.line}. Argenteria artigianale Arval dal 1967, con confezione regalo inclusa.` },
        { property: "og:title", content: `${product.name} — Arval Argenti Valenza` },
        { property: "og:description", content: `${product.line} — argenteria artigianale di Valenza.` },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const gallery = [product.lifestyle, product.image, product.lifestyle, product.image];
  const [zoom, setZoom] = useState(false);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const recent = products.filter((p) => p.slug !== product.slug).slice(2, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="shell pt-32 md:pt-40">
        <nav className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          <Link to="/" className="link-quiet">Home</Link> ·{" "}
          <Link to="/collezioni" className="link-quiet">{product.category}</Link>
        </nav>

        <div className="mt-8 grid gap-14 lg:grid-cols-12">
          {/* Gallery */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setZoom((z) => !z)}
                className={`media-card block ${i === 0 ? "sm:col-span-2 aspect-[4/3]" : "aspect-square"}`}
              >
                <img
                  src={src}
                  alt={`${product.name} — immagine ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`h-full w-full object-cover transition-transform duration-700 ${zoom && i === 0 ? "scale-125" : ""}`}
                />
              </button>
            ))}
          </div>

          {/* Sticky purchase panel */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">{product.category}</p>
              <h1 className="display-md mt-4 text-ink">{product.name}</h1>
              <p className="mt-3 text-sm text-muted-foreground">{product.line}</p>
              <p className="mt-8 text-2xl font-light text-ink">€ {product.price}</p>

              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                Realizzato in argento con finitura lucidata a mano nei laboratori di Valenza.
                Ogni pezzo riporta il punzone Arval e viene consegnato nella confezione della maison.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button className="btn-base btn-solid flex-1">Aggiungi al carrello</button>
                <button aria-label="Wishlist" className="btn-base btn-outline">
                  <Heart className="h-4 w-4" strokeWidth={1.4} />
                </button>
              </div>

              <ul className="mt-10 space-y-4 border-t border-border pt-8 text-sm text-charcoal">
                <li className="flex items-start gap-3">
                  <Gift className="mt-0.5 h-4 w-4 shrink-0 text-silver-deep" strokeWidth={1.3} />
                  Confezione regalo Arval inclusa
                </li>
                <li className="flex items-start gap-3">
                  <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-silver-deep" strokeWidth={1.3} />
                  Incisione personalizzata su richiesta
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-4 w-4 shrink-0 text-silver-deep" strokeWidth={1.3} />
                  Spedizione assicurata in 48h · resi entro 30 giorni
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <section className="shell py-28">
        <h2 className="display-md text-ink">Potrebbero interessarvi</h2>
        <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="shell pb-10">
        <p className="eyebrow">Visti di recente</p>
        <div className="no-scrollbar mt-8 flex gap-6 overflow-x-auto pb-2">
          {recent.map((p) => (
            <Link
              key={p.slug}
              to="/prodotto/$slug"
              params={{ slug: p.slug }}
              className="flex w-64 shrink-0 items-center gap-4"
            >
              <div className="media-card h-20 w-20 shrink-0">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-lg text-ink">{p.name}</p>
                <p className="text-xs text-muted-foreground">€ {p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
