import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import boutique from "@/assets/boutique.jpg";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e boutique di Valenza — Arval Argenti Valenza" },
      {
        name: "description",
        content:
          "Visitate la boutique Arval a Valenza o scriveteci: consulenza regalo, liste nozze, incisioni e assistenza WhatsApp.",
      },
      { property: "og:title", content: "Contatti e boutique di Valenza — Arval Argenti Valenza" },
      {
        property: "og:description",
        content: "Boutique, telefono, WhatsApp ed email della maison Arval.",
      },
    ],
  }),
  component: Contatti,
});

const contacts = [
  { icon: MapPin, label: "Boutique", value: "Corso Garibaldi 12, 15048 Valenza (AL)" },
  { icon: Phone, label: "Telefono", value: "+39 0131 000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "+39 340 0000000" },
  { icon: Mail, label: "Email", value: "boutique@arvalargenti.com" },
  { icon: Clock, label: "Orari", value: "Lun–Sab 9:30–13:00 · 15:30–19:30" },
];

function Contatti() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="shell pt-36 pb-16 md:pt-48">
        <p className="eyebrow">Contatti</p>
        <h1 className="display-lg mt-6 max-w-3xl text-ink">
          Vi accompagniamo nella scelta del regalo giusto.
        </h1>
      </section>

      <section className="shell grid gap-14 lg:grid-cols-12">
        <div className="media-card aspect-[4/3] lg:col-span-7">
          <img src={boutique} alt="Interno della boutique Arval" loading="lazy" className="h-full w-full object-cover" />
        </div>

        <div className="lg:col-span-5">
          <ul className="space-y-7">
            {contacts.map((c) => (
              <li key={c.label} className="flex min-w-0 items-start gap-4">
                <c.icon className="mt-1 h-4 w-4 shrink-0 text-silver-deep" strokeWidth={1.3} />
                <div className="min-w-0">
                  <p className="eyebrow">{c.label}</p>
                  <p className="mt-1.5 text-base text-ink">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <form className="mt-12 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Nome e cognome"
              className="h-13 w-full rounded-2xl bg-muted px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-13 w-full rounded-2xl bg-muted px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-ring"
            />
            <textarea
              rows={4}
              placeholder="Come possiamo aiutarvi?"
              className="w-full rounded-2xl bg-muted px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-ring"
            />
            <button className="btn-base btn-solid w-full sm:w-auto">Invia richiesta</button>
          </form>
        </div>
      </section>

      <section className="shell pt-20">
        <div className="overflow-hidden rounded-2xl">
          <iframe
            title="Mappa boutique Arval a Valenza"
            src="https://www.google.com/maps?q=Valenza%20AL%20Italia&output=embed"
            loading="lazy"
            className="h-[26rem] w-full border-0"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
