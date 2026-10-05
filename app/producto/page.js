import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Producto — Infraestructura operativa | CoopVentures®",
  description:
    "Membresía mensual para startups pre-semilla: Kit Legal, bolsa de horas de talento fraccional, CoopPerks y comunidad. Desde $99 USD al mes.",
};

const INCLUDES = [
  {
    idx: "001",
    title: "Kit Legal “Anti-Errores”",
    desc: (
      <>
        Acceso a una biblioteca de contratos estandarizados y auditados por abogados
        expertos en tecnología. Incluye pactos de accionistas, contratos de{" "}
        <em>vesting</em> para retención de talento, acuerdos de confidencialidad (NDA) y
        contratos de prestación de servicios.
      </>
    ),
    chips: ["Pactos de accionistas", "Vesting", "NDA", "Prestación de servicios"],
  },
  {
    idx: "002",
    title: "Bolsa de Horas de “Talento Fraccional”",
    desc: (
      <>
        Recibe una asignación mensual (ej. 4 horas) para utilizarla estratégicamente con
        nuestra red de asociados. Úsala para mentorías técnicas con desarrolladores
        Senior, revisiones financieras con un CFO o auditorías de diseño UX/UI.
      </>
    ),
    chips: ["4 h / mes", "Dev Senior", "CFO", "UX/UI"],
  },
  {
    idx: "003",
    title: "Acceso a CoopPerks",
    desc: (
      <>
        Desbloquea de inmediato nuestra bolsa de descuentos cooperativos. Accede a miles
        de dólares en créditos gratuitos para infraestructura (Amazon Web Services, Google
        Cloud), pasarelas de pago y herramientas de gestión operativas como Notion o
        HubSpot.
      </>
    ),
    chips: ["AWS", "Google Cloud", "Pasarelas de pago", "Notion · HubSpot"],
  },
  {
    idx: "004",
    title: "Comunidad y Masterclasses",
    desc: (
      <>
        Únete a nuestra plataforma privada (Discord/Slack) para interactuar con otros
        fundadores. Participa en talleres semanales en vivo sobre estrategias de ventas,
        desarrollo de MVPs sin código (No-Code) y preparación de <em>pitches</em> de
        inversión.
      </>
    ),
    chips: ["Discord / Slack", "Talleres semanales", "No-Code", "Pitch"],
  },
];

export default function Producto() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ paddingTop: 170 }}>
        <div className="wrap">
          <Reveal><span className="eyebrow"><span className="mark" />Producto</span></Reveal>
          <Reveal delay={80}>
            <h1 className="h-xl" style={{ marginTop: 28, maxWidth: 1100 }}>
              Infraestructura operativa de tu startup.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section--tight">
        <div className="wrap">
          <div className="two-col" style={{ alignItems: "start" }}>
            <Reveal>
              <h2 className="h-lg">Impulsa tu empresa desde el día cero.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="stack gap-24">
                <p className="lead">
                  Diseñamos una membresía mensual dirigida a emprendedores en etapa temprana
                  (pre-semilla) que necesitan estructurar su empresa como profesionales, pero
                  aún no cuentan con el capital para contratar abogados, contadores o un
                  Director de Tecnología (CTO) a tiempo completo.
                </p>
                <p className="body muted">
                  A través de la fuerza de nuestra red cooperativa, empaquetamos servicios de
                  alto nivel mediante economía de escala y los ponemos a tu disposición por
                  una fracción de su costo real.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><span className="eyebrow"><span className="mark" />Qué incluye</span></Reveal>
              <Reveal delay={80}>
                <h2 className="h-lg" style={{ marginTop: 22 }}>¿Qué incluye tu membresía?</h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="sh-right">
              <p className="body muted">
                Nuestra suscripción integra los recursos fundamentales para que te concentres
                en vender y desarrollar tu producto, mientras nosotros cubrimos la retaguardia
                operativa.
              </p>
            </Reveal>
          </div>

          <div className="grid g-2" style={{ gap: 4 }}>
            {INCLUDES.map((p, i) => (
              <Reveal key={p.idx} delay={(i % 2) * 100}>
                <div
                  className="card"
                  style={{ display: "flex", flexDirection: "column", gap: 22, height: "100%", minHeight: 380 }}
                >
                  <div className="row between center">
                    <span className="f-index">{p.idx}</span>
                    <span className="mark" />
                  </div>
                  <h3 className="h-md" style={{ marginTop: "auto" }}>{p.title}</h3>
                  <p className="body muted">{p.desc}</p>
                  <div className="chips">
                    {p.chips.map((c) => (
                      <span className="chip" key={c}>{c}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band" style={{ background: "var(--dark)" }}>
            <div className="sec-head" style={{ marginBottom: 0, alignItems: "flex-start" }}>
              <Reveal>
                <div>
                  <span className="eyebrow eyebrow--light"><span className="mark" />Planes y precios</span>
                  <h2 className="h-lg" style={{ marginTop: 22, color: "#fff", maxWidth: 700 }}>
                    Planes y Precios.
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120} className="sh-right">
                <p className="body muted-w">
                  Un modelo transparente diseñado para escalar al ritmo de tu empresa.
                </p>
              </Reveal>
            </div>

            <div className="grid g-2 gap-lg" style={{ marginTop: 20 }}>
              <Reveal>
                <div style={{ borderTop: "1px solid var(--line-white)", paddingTop: 24 }}>
                  <span className="small muted-w" style={{ textTransform: "uppercase" }}>Suscripción mensual base</span>
                  <div className="stat-num" style={{ fontSize: "clamp(44px,6vw,84px)", color: "#fff", marginTop: 22 }}>
                    $99–150
                  </div>
                  <span className="small muted-w">USD / mes</span>
                  <p className="body muted-w mt-24">
                    Un cobro recurrente accesible que garantiza toda la infraestructura básica
                    y el soporte continuo.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div style={{ borderTop: "1px solid var(--line-white)", paddingTop: 24 }}>
                  <span className="small muted-w" style={{ textTransform: "uppercase" }}>Servicios bajo demanda</span>
                  <div className="stat-num" style={{ fontSize: "clamp(44px,6vw,84px)", color: "#fff", marginTop: 22 }}>
                    Add-ons
                  </div>
                  <span className="small muted-w">Precio preferencial</span>
                  <p className="body muted-w mt-24">
                    Si tu startup atraviesa un pico de trabajo y necesita más horas de
                    programación, desarrollo específico o asesoría legal profunda, puedes
                    contratar paquetes extra bajo demanda. Pagas un precio preferencial,
                    remunerando de forma justa al experto de nuestra red y apoyando
                    simultáneamente el fondo común de la cooperativa.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--tight">
        <div className="wrap">
          <Reveal>
            <div className="row between center wrap-flex gap-40" style={{ borderTop: "1px solid var(--line)", paddingTop: 60 }}>
              <h2 className="h-lg max-720">Estructura tu startup como profesional.</h2>
              <Link href="/membresias#postular" className="btn">Postúlate ahora</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
