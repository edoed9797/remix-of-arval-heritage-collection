import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { Logo } from "./Logo";

const menu: { label: string; to: string; columns?: { title: string; items: string[] }[] }[] = [
  {
    label: "Collezioni",
    to: "/collezioni",
    columns: [
      { title: "Argenteria", items: ["Vassoi", "Coppe e centrotavola", "Vasi", "Candelieri"] },
      { title: "Tavola", items: ["Posateria", "Servizi da caffè", "Sottopiatti", "Bicchieri"] },
      { title: "Casa", items: ["Cornici", "Complementi", "Oggetti da scrivania", "Profumatori"] },
    ],
  },
  {
    label: "Occasioni",
    to: "/collezioni",
    columns: [
      { title: "Cerimonie", items: ["Matrimonio", "Laurea", "Nascita", "Battesimo"] },
      { title: "Sacro", items: ["Icone", "Croci", "Rosari", "Acquasantiere"] },
      { title: "Azienda", items: ["Regali corporate", "Incisioni", "Grandi quantità"] },
    ],
  },
  { label: "Idee regalo", to: "/collezioni" },
  { label: "Storia", to: "/storia" },
  { label: "Contatti", to: "/contatti" },
];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overlay || open !== null;

  return (
    <header
      onMouseLeave={() => setOpen(null)}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="shell grid grid-cols-[auto_1fr_auto] items-center gap-6 py-4 md:py-5">
        <Link to="/" className="shrink-0">
          <Logo light={!solid} />
        </Link>

        <nav className="hidden justify-center gap-9 lg:flex">
          {menu.map((m) => (
            <div key={m.label} onMouseEnter={() => setOpen(m.columns ? m.label : null)}>
              <Link
                to={m.to}
                className={`link-quiet text-[0.7rem] font-medium tracking-[0.2em] uppercase ${
                  solid ? "text-charcoal" : "text-white"
                }`}
              >
                {m.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className={`flex items-center gap-4 ${solid ? "text-charcoal" : "text-white"}`}>
          <button aria-label="Cerca" className="hidden transition-opacity hover:opacity-60 sm:block">
            <Search className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.3} />
          </button>
          <button aria-label="Wishlist" className="hidden transition-opacity hover:opacity-60 sm:block">
            <Heart className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.3} />
          </button>
          <button aria-label="Account" className="hidden transition-opacity hover:opacity-60 sm:block">
            <User className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.3} />
          </button>
          <button aria-label="Carrello" className="relative transition-opacity hover:opacity-60">
            <ShoppingBag className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.3} />
            <span className="absolute -top-1.5 -right-2 text-[0.55rem] tracking-wider">2</span>
          </button>
          <button
            aria-label="Menu"
            className="lg:hidden"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-5 w-5" strokeWidth={1.3} /> : <Menu className="h-5 w-5" strokeWidth={1.3} />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <div
        className={`hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:block ${
          open ? "max-h-[26rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="shell grid grid-cols-4 gap-12 py-12">
          {menu
            .find((m) => m.label === open)
            ?.columns?.map((c) => (
              <div key={c.title}>
                <p className="eyebrow mb-5">{c.title}</p>
                <ul className="space-y-3">
                  {c.items.map((i) => (
                    <li key={i}>
                      <Link to="/collezioni" className="link-quiet font-display text-xl text-ink">
                        {i}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <div className="rounded-2xl bg-sand p-8">
            <p className="eyebrow">Servizio boutique</p>
            <p className="mt-4 font-display text-2xl leading-snug text-ink">
              Consulenza dedicata per la vostra lista nozze.
            </p>
            <Link to="/contatti" className="link-quiet mt-6 inline-block text-[0.7rem] tracking-[0.2em] uppercase">
              Prenota un appuntamento
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobile && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="shell flex flex-col gap-1 py-6">
            {menu.map((m) => (
              <Link
                key={m.label}
                to={m.to}
                onClick={() => setMobile(false)}
                className="border-b border-border/60 py-4 font-display text-2xl text-ink"
              >
                {m.label}
              </Link>
            ))}
            <div className="mt-6 flex gap-6 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
              <span>Cerca</span>
              <span>Wishlist</span>
              <span>Account</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
