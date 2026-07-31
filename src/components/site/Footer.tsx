import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Maison",
    links: ["La nostra storia", "Artigianato", "Boutique di Valenza", "Lavora con noi"],
  },
  {
    title: "Servizio clienti",
    links: ["Spedizioni e resi", "Confezione regalo", "Incisioni", "Tracciamento ordine", "FAQ"],
  },
  {
    title: "Collezioni",
    links: ["Argenteria", "Cornici", "Posateria", "Articoli sacri", "Idee regalo"],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-sand/60">
      {/* Newsletter */}
      <div className="border-b border-border bg-background">
        <div className="shell max-w-3xl py-24 text-center md:py-32">
          <p className="eyebrow">Lettera Arval</p>
          <h2 className="display-md mt-6 text-ink">
            Storie di argento, nuove collezioni e idee regalo.
          </h2>
          <form
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="La vostra email"
              className="h-14 flex-1 rounded-full bg-muted px-6 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
            />
            <button type="submit" className="btn-base btn-solid h-14">
              Iscrivimi
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            Iscrivendovi accettate la nostra informativa sulla privacy.
          </p>
        </div>
      </div>

      <div className="shell grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Argenteria artistica dal 1967. Corso Garibaldi, Valenza (AL) — Italia.
          </p>
          <div className="mt-8 flex gap-5 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
            <a href="#" className="link-quiet">Instagram</a>
            <a href="#" className="link-quiet">Facebook</a>
            <a href="#" className="link-quiet">Pinterest</a>
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <p className="eyebrow">{c.title}</p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal">
              {c.links.map((l) => (
                <li key={l}>
                  <Link to="/contatti" className="link-quiet">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell flex flex-col gap-4 border-t border-border py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Arval Argenti Valenza — P.IVA 00000000000</p>
        <p className="tracking-[0.18em] uppercase">
          Visa · Mastercard · Amex · PayPal · Bonifico · Spedizione assicurata in 48h
        </p>
      </div>
    </footer>
  );
}
