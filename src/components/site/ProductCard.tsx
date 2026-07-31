import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link to="/prodotto/$slug" params={{ slug: product.slug }} className="block">
        <div className="media-card relative aspect-[4/5]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={900}
            height={1100}
            className="h-full w-full object-cover"
          />
          <img
            src={product.lifestyle}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 rounded-full bg-background/85 px-3 py-1.5 text-[0.6rem] tracking-[0.18em] uppercase backdrop-blur">
              {product.badge}
            </span>
          )}
          <button
            aria-label="Aggiungi alla wishlist"
            onClick={(e) => e.preventDefault()}
            className="absolute top-3.5 right-4 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-charcoal opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100 hover:text-ink"
          >
            <Heart className="h-4 w-4" strokeWidth={1.3} />
          </button>
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              onClick={(e) => e.preventDefault()}
              className="btn-base w-full bg-background/92 py-3.5 text-ink backdrop-blur hover:bg-ink hover:text-primary-foreground"
            >
              Aggiungi
            </button>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
          <h3 className="font-display truncate text-xl text-ink">{product.name}</h3>
          <span className="shrink-0 text-sm text-charcoal">€ {product.price}</span>
        </div>
        <p className="mt-1 text-xs tracking-wide text-muted-foreground">{product.line}</p>
      </Link>
    </article>
  );
}
