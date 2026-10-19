import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Producto — Infraestructura operativa | CoopVentures®",
  description:
    "Membresía mensual para startups pre-semilla: Kit Legal, bolsa de horas de talento fraccional, CoopPerks y comunidad. $99 USD al mes.",
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

const INVESTMENT_COSTS = [
  {
    concept: "Auditoría y Plantillas Legales",
    type: "Inversión Inicial (Único)",
    desc: "Pago a firma legal para blindar los contratos estandarizados.",
    value: "$1,500",
  },
  {
    concept: "Desarrollo de Plataforma Web",
    type: "Inversión Inicial (Único)",
    desc: "Creación del dashboard privado para los asociados.",
    value: "$800",
  },
  {
    concept: "Infraestructura y Licencias",
    type: "Operativo (Fijo Mensual)",
    desc: "Pago de servidores, dominio y herramientas de gestión.",
    value: "$100 / mes",
  },
  {
    concept: "Pago a Expertos (Talento)",
    type: "Operativo (Variable Mensual)",
    desc: "Pago por hora al mentor (desarrollador/abogado) cuando se usa.",
    value: "$25 / hora utilizada",
  },
];

const MONTHLY_PROJECTION = [
  {
    metric: "Ingresos Brutos (Ventas)",
    calc: "10 membresías x $150 USD",
    total: "$1,500",
    isTotal: false,
  },
  {
    metric: "Costos Variables (Bolsa horas)",
    calc: "10 startups x 4 horas x $25 USD/hora",
    total: "-$1,000",
    isTotal: false,
  },
  {
    metric: "Costos Fijos Mensuales",
    calc: "Licencias y mantenimiento de plataforma",
    total: "-$100",
    isTotal: false,
  },
  {
    metric: "Ganancia Neta (Utilidad)",
    calc: "Ingresos - (Costos Variables + Fijos)",
    total: "$400",
    isTotal: true,
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

      {/* 1. Misión & 2. Visión */}
      <section className="section--tight">
        <div className="wrap">
          <div className="grid g-2 gap-lg">
            <Reveal>
              <div
                className="card"
                style={{
                  padding: "clamp(36px, 5vw, 56px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <span className="eyebrow"><span className="mark" />1. Misión</span>
                <p className="h-md" style={{ fontSize: "clamp(22px, 2.3vw, 32px)", lineHeight: 1.3, fontWeight: 500 }}>
                  Impulsar y financiar a la próxima generación de startups tecnológicas de alto impacto
                  a través de un modelo mutualista, ofreciendo capital semilla, formación intensiva y
                  red global sin comprometer la soberanía ni el control de los fundadores.
                </p>
                <div className="chips" style={{ marginTop: "auto" }}>
                  <span className="chip">Modelo mutualista</span>
                  <span className="chip">Capital semilla</span>
                  <span className="chip">Soberanía de fundadores</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="card--dark"
                style={{
                  borderRadius: "var(--radius)",
                  padding: "clamp(36px, 5vw, 56px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <span className="eyebrow eyebrow--light"><span className="mark" />2. Visión</span>
                <p className="h-md" style={{ fontSize: "clamp(22px, 2.3vw, 32px)", lineHeight: 1.3, fontWeight: 500 }}>
                  Para 2031, consolidarnos como la mayor aceleradora cooperativa de startups de América
                  Latina, con una red de más de{" "}
                  <span className="muted-w">500 empresas tecnológicas</span> escalables operando bajo
                  esquemas financieros sostenibles.
                </p>
                <div className="chips" style={{ marginTop: "auto" }}>
                  <span className="chip" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
                    Visión 2031
                  </span>
                  <span className="chip" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
                    +500 Empresas
                  </span>
                  <span className="chip" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
                    Finanzas sostenibles
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Problema */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><span className="eyebrow"><span className="mark" />3. Problema</span></Reveal>
              <Reveal delay={80}>
                <h2 className="h-lg" style={{ marginTop: 22, maxWidth: 900 }}>
                  El dilema estructural de la etapa pre-semilla.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="sh-right">
              <p className="body muted">
                La falta de capital inicial y las condiciones predatorias del mercado tradicional
                asfixian a los fundadores antes de consolidar su tracción.
              </p>
            </Reveal>
          </div>

          <div className="grid g-2 gap-lg">
            <Reveal>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  height: "100%",
                  padding: "clamp(32px, 4vw, 48px)",
                }}
              >
                <div className="row between center">
                  <span className="f-index">01</span>
                  <span className="mark" />
                </div>
                <h3 className="h-md" style={{ marginTop: 8 }}>
                  Cuál es puntualmente el problema
                </h3>
                <p className="body muted" style={{ fontSize: 17, lineHeight: 1.6 }}>
                  Las startups en etapa pre-semilla carecen del capital para estructurar su operación legal
                  y tecnológica como profesionales, y las fuentes de inversión tradicionales exigen ceder
                  altos porcentajes de la empresa (dilución abusiva) para financiar estos primeros pasos.
                </p>
                <div className="chips" style={{ marginTop: "auto" }}>
                  <span className="chip">Falta de capital inicial</span>
                  <span className="chip">Dilución abusiva</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  height: "100%",
                  padding: "clamp(32px, 4vw, 48px)",
                }}
              >
                <div className="row between center">
                  <span className="f-index">02</span>
                  <span className="mark" />
                </div>
                <h3 className="h-md" style={{ marginTop: 8 }}>
                  Por qué es un problema
                </h3>
                <p className="body muted" style={{ fontSize: 17, lineHeight: 1.6 }}>
                  Porque sin esta estructura inicial, los emprendedores cometen errores técnicos y legales
                  fatales que los hacen fracasar en el &ldquo;valle de la muerte operativo&rdquo;. Si optan
                  por el Venture Capital tradicional para sobrevivir, los fundadores pierden el control
                  de su negocio y son forzados a un hipercrecimiento a pérdida que destruye proyectos viables.
                </p>
                <div className="chips" style={{ marginTop: "auto" }}>
                  <span className="chip">Valle de la muerte operativo</span>
                  <span className="chip">Pérdida de control</span>
                </div>
              </div>
            </Reveal>
          </div>
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
                    $99
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

      {/* 5. Proyección Financiera */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><span className="eyebrow"><span className="mark" />5. Proyección Financiera</span></Reveal>
              <Reveal delay={80}>
                <h2 className="h-lg" style={{ marginTop: 22 }}>
                  Modelo económico y sostenibilidad.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="sh-right">
              <p className="body muted">
                Estructura de costos de inversión inicial, economía de escala y viabilidad operativa
                del modelo mutualista.
              </p>
            </Reveal>
          </div>

          {/* Costos de inversión */}
          <div className="stack gap-24" style={{ marginBottom: 60 }}>
            <Reveal>
              <div className="stack gap-8">
                <h3 className="h-md">Costos de inversión</h3>
                <p className="body muted max-720">
                  Se requiere capital inicial para crear los activos digitales y un presupuesto mensual bajo para sostener la plataforma.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="table-card">
                <div className="table-responsive">
                  <table className="fin-table">
                    <thead>
                      <tr>
                        <th>Concepto de Inversión / Costo</th>
                        <th>Tipo de Costo</th>
                        <th>Descripción</th>
                        <th style={{ textAlign: "right" }}>Valor Estimado (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {INVESTMENT_COSTS.map((item) => (
                        <tr key={item.concept}>
                          <td style={{ fontWeight: 600 }}>{item.concept}</td>
                          <td>
                            <span className="chip" style={{ fontSize: 11, padding: "6px 12px" }}>
                              {item.type}
                            </span>
                          </td>
                          <td className="muted" style={{ maxWidth: 440 }}>{item.desc}</td>
                          <td className="num-cell">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Cómo ganamos dinero */}
          <div style={{ marginBottom: 60 }}>
            <Reveal>
              <div
                className="card"
                style={{
                  padding: "clamp(32px, 4vw, 48px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 32,
                }}
              >
                <div className="two-col" style={{ alignItems: "center", gap: 40 }}>
                  <div className="stack gap-16">
                    <span className="eyebrow"><span className="mark" />Economía de escala</span>
                    <h3 className="h-md">Cómo ganamos dinero</h3>
                    <p className="body muted" style={{ fontSize: 17, lineHeight: 1.6 }}>
                      Generamos ingresos recurrentes basados en economías de escala. Por cada membresía
                      mensual de $150 USD, se destinan $100 USD al pago del talento fraccional (ej. 4 horas
                      usadas x $25 USD/hora) y $50 USD quedan como ganancia bruta para la cooperativa. Debido
                      a los bajos costos fijos operativos ($100 USD/mes), el producto alcanza su punto de
                      equilibrio con solo 3 startups suscritas.
                    </p>
                  </div>

                  <div className="grid g-2 gap-lg" style={{ gap: 12 }}>
                    <div className="card--line" style={{ padding: 24, borderRadius: "var(--radius)" }}>
                      <span className="small muted" style={{ textTransform: "uppercase" }}>Margen bruto / membresía</span>
                      <div className="stat-num" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", marginTop: 12 }}>
                        $50 <span style={{ fontSize: "0.45em", fontWeight: 500 }} className="muted">USD</span>
                      </div>
                      <p className="small muted mt-8">Ganancia neta cooperativa por startup</p>
                    </div>

                    <div className="card--line" style={{ padding: 24, borderRadius: "var(--radius)" }}>
                      <span className="small muted" style={{ textTransform: "uppercase" }}>Costos fijos</span>
                      <div className="stat-num" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", marginTop: 12 }}>
                        $100 <span style={{ fontSize: "0.45em", fontWeight: 500 }} className="muted">USD/m</span>
                      </div>
                      <p className="small muted mt-8">Servidores, licencias y dominio</p>
                    </div>

                    <div className="card--line" style={{ padding: 24, borderRadius: "var(--radius)", gridColumn: "1 / -1" }}>
                      <span className="small muted" style={{ textTransform: "uppercase" }}>Punto de equilibrio</span>
                      <div className="stat-num" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", marginTop: 12 }}>
                        3 <span style={{ fontSize: "0.45em", fontWeight: 500 }} className="muted">startups</span>
                      </div>
                      <p className="small muted mt-8">Alcanza autosostenibilidad operativa con 3 miembros activos</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Proyección mensual */}
          <div className="stack gap-24">
            <Reveal>
              <div className="stack gap-8">
                <h3 className="h-md">
                  Proyección mensual{" "}
                  <span className="muted" style={{ fontSize: "0.65em", fontWeight: 500 }}>
                    (Escenario con 10 startups activas)
                  </span>
                </h3>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="table-card">
                <div className="table-responsive">
                  <table className="fin-table">
                    <thead>
                      <tr>
                        <th>Métrica Financiera</th>
                        <th>Cálculo</th>
                        <th style={{ textAlign: "right" }}>Total Mensual (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MONTHLY_PROJECTION.map((item) => (
                        <tr
                          key={item.metric}
                          className={item.isTotal ? "highlight-row" : undefined}
                        >
                          <td style={{ fontWeight: 600 }}>{item.metric}</td>
                          <td className={item.isTotal ? "muted-w" : "muted"}>{item.calc}</td>
                          <td className="num-cell" style={{ color: item.isTotal ? "#fff" : undefined }}>
                            {item.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
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
