import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heritage from "@/assets/heritage.jpg";
import boutique from "@/assets/boutique.jpg";
import occHome from "@/assets/occ-home.jpg";

export const Route = createFileRoute("/storia")({
  head: () => ({
    meta: [
      { title: "La nostra storia dal 1967 — Arval Argenti Valenza" },
      {
        name: "description",
        content:
          "Dal 1967 Arval lavora l'argento a Valenza: tre generazioni di artigiani, punzone di garanzia e una boutique storica dedicata al regalo.",
      },
      { property: "og:title", content: "La nostra storia dal 1967 — Arval Argenti Valenza" },
      {
        property: "og:description",
        content: "Tre generazioni di argentieri a Valenza, città dell'oreficeria italiana.",
      },
    ],
  }),
  component: Storia,
});

const timeline = [
  { year: "1967", title: "La prima bottega", copy: "Arval apre a Valenza, tra i laboratori orafi della città." },
  { year: "1984", title: "L'argenteria da tavola", copy: "Nascono i servizi di posate e i vassoi incisi a mano." },
  { year: "1999", title: "La lista nozze", copy: "Il servizio dedicato agli sposi diventa il cuore della boutique." },
  { year: "2012", title: "La seconda generazione", copy: "La famiglia porta in azienda il design contemporaneo." },
  { year: "2024", title: "Arval online", copy: "La boutique apre le sue collezioni a tutta Italia." },
];

function Storia() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="shell pt-36 pb-16 md:pt-48">
        <p className="eyebrow">Maison</p>
        <h1 className="display-xl mt-6 max-w-4xl text-ink">
          Cinquant'anni di argento, a Valenza.
        </h1>
      </section>

      <section className="shell grid gap-6 lg:grid-cols-12">
        <div className="media-card aspect-[4/3] lg:col-span-8">
          <img src={boutique} alt="La boutique Arval a Valenza" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="media-card aspect-[4/3] lg:col-span-4">
          <img src={heritage} alt="Artigiano al banco di lavoro" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="shell grid gap-14 py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Cronologia</p>
          <h2 className="display-md mt-4 text-ink">Una storia di famiglia</h2>
        </div>
        <ol className="lg:col-span-7 lg:col-start-6">
          {timeline.map((t) => (
            <li key={t.year} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-6 border-t border-border py-8">
              <span className="font-display text-2xl text-silver-deep">{t.year}</span>
              <div className="min-w-0">
                <p className="font-display text-2xl text-ink">{t.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell grid items-center gap-14 pb-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Artigianato</p>
          <h2 className="display-lg mt-5 text-ink">Il gesto prima dell'oggetto</h2>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">
            Martellatura, tornitura, cesello, lucidatura: ogni superficie passa più volte tra le
            mani dei nostri argentieri. È un lavoro lento, fatto di misure minime e di silenzio, che
            restituisce oggetti destinati a essere tramandati.
          </p>
          <Link to="/collezioni" className="btn-base btn-outline mt-10">
            Vedi le collezioni
          </Link>
        </div>
        <div className="media-card aspect-[4/5] lg:col-span-6 lg:col-start-7">
          <img src={occHome} alt="Argenti su console in marmo" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
