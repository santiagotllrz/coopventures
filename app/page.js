import Link from "next/link";
import Reveal from "@/components/Reveal";

const PROBLEMS = [
  ["01", "Dilución forzosa", "Cedes porcentajes masivos de tu empresa desde la etapa más temprana, a fondos que priorizan su salida sobre tu negocio."],
  ["02", "Métricas irreales", "Te exigen hipercrecimiento a pérdida y descartan proyectos rentables y sostenibles que no encajan en el molde del “unicornio”."],
  ["03", "Pérdida de control", "El poder de decisión del fundador se diluye ronda tras ronda y todo se orienta a la venta rápida o la salida a bolsa."],
];

const SOLUTIONS = [
  ["01", "Capital sin cláusulas predatorias", "Financiamiento temprano y trabajo en red, con incentivos alineados a la sanidad financiera de tu startup."],
  ["02", "Revenue-sharing, no equity", "Devuelves una fracción de tus ingresos al fondo común solo si alcanzas tracción. Sin arrebatar acciones."],
  ["03", "Gobernanza democrática", "Un asociado, un voto. Los dueños de la aceleradora son los propios fundadores, mentores e inversionistas."],
];

const MODEL = [
  ["12", "semanas", "Programa de aceleración “Batch”"],
  ["$15–50K", "USD", "Capital semilla mutual por startup"],
  ["2%", "· 24 meses", "Revenue-sharing, solo si hay éxito"],
  ["1 = 1", "voto", "Un asociado, un voto"],
];

const PRODUCTS = [
  ["001", "Aceleración “Batch”", "12 semanas para afinar tu modelo, lograr product-market fit y recibir mentoría 1 a 1 de fundadores senior.", "/media/brainstorm.jpg"],
  ["002", "Fondo Semilla Mutual", "Capital de trabajo inicial bajo contratos de riesgo compartido sobre ingresos futuros. Liquidez sin ceder acciones.", "/media/finance.jpg"],
  ["003", "Demo Day Internacional", "Presenta tus avances ante una red curada de inversionistas ángeles y fondos aliados para levantar rondas mayores.", "/media/audience.jpg"],
  ["004", "CoopPerks & Red", "Créditos en la nube (AWS, Google Cloud), pasarelas de pago y asesoría legal negociada por volumen.", "/media/coworking.jpg"],
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-bg">
          <video autoPlay muted loop playsInline poster="/media/hero-poster.jpg">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-inner">
          <div className="row between center" style={{ flexWrap: "wrap", gap: 16 }}>
            <span className="eyebrow eyebrow--light"><span className="mark" />Aceleradora Cooperativa</span>
            <span className="small muted-w">(2016–26©)</span>
          </div>

          <div className="hero-top">
            <div className="hero-wordmark">
              <div className="wordmark">CoopVentures®</div>
              <span className="hero-sub">Cooperativa</span>
            </div>
            <div className="hero-services">
              <span>Capital Semilla Mutual</span>
              <span>Aceleración “Batch”</span>
              <span>Mentoría Técnica 1:1</span>
              <span>Red de Inversionistas</span>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-statement">
              Aceleramos tu startup. Protegemos tu equity.{" "}
              <span className="muted-w">Financiamos el futuro en red, sin capital predatorio.</span>
            </div>

            <div className="person-card">
              <div className="pc-img">
                <img src="/media/santiago-tellez.png" alt="Director de Programa de CoopVentures" />
              </div>
              <div className="pc-body">
                <div>
                  <div className="pc-role">Director de Programa</div>
                  <div className="pc-org">en CoopVentures®</div>
                </div>
                <div className="pc-name">Santiago Tellez</div>
                <Link href="/membresias" className="pc-pill">Hablemos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Fondo rotatorio de éxito</span>
          <span>Revenue-sharing</span>
          <span>Un asociado, un voto</span>
          <span>Infraestructura compartida</span>
          <span>Mentoría técnica</span>
          <span>Fondo rotatorio de éxito</span>
          <span>Revenue-sharing</span>
          <span>Un asociado, un voto</span>
          <span>Infraestructura compartida</span>
          <span>Mentoría técnica</span>
        </div>
      </div>

      {/* ================= PROBLEM / SOLUTION ================= */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><span className="eyebrow"><span className="mark" />El fin del capital predatorio</span></Reveal>
              <Reveal delay={80}>
                <h2 className="h-lg" style={{ marginTop: 24, maxWidth: 900 }}>
                  El capital semilla no debería costarte el control de tu empresa.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="sh-right">
              <p className="body muted">
                Tradicionalmente, acelerar significa ceder poder. Construimos una alternativa
                circular: el dinamismo de Silicon Valley blindado con la gobernanza democrática
                del cooperativismo.
              </p>
            </Reveal>
          </div>

          <div className="two-col">
            <Reveal>
              <div className="stack gap-24">
                <span className="eyebrow"><span className="mark" />La necesidad que resolvemos</span>
                <div className="ps-list">
                  {PROBLEMS.map(([n, t, d]) => (
                    <div className="ps-item" key={n}>
                      <span className="ps-num">{n}</span>
                      <div>
                        <h3 className="h-sm">{t}</h3>
                        <p className="body muted mt-16">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card--dark" style={{ borderRadius: "var(--radius)", padding: 40 }}>
                <div className="stack gap-24">
                  <span className="eyebrow eyebrow--light"><span className="mark" />Nuestra solución</span>
                  <div className="ps-list">
                    {SOLUTIONS.map(([n, t, d]) => (
                      <div className="ps-item on-dark" key={n}>
                        <span className="ps-num" style={{ color: "var(--muted-white)" }}>{n}</span>
                        <div>
                          <h3 className="h-sm">{t}</h3>
                          <p className="body muted-w mt-16">{d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= MODEL METRICS ================= */}
      <section className="section--tight">
        <div className="wrap">
          <div className="grid g-4 gap-lg" style={{ alignItems: "stretch" }}>
            {MODEL.map(([num, unit, label], i) => (
              <Reveal key={num} delay={i * 90}>
                <div className="stat" style={{ height: "100%" }}>
                  <div className="s-top">
                    <span className="eyebrow"><span className="mark" /></span>
                    <span className="small muted">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <div className="stat-num" style={{ fontSize: "clamp(40px,4.6vw,66px)" }}>
                      {num}<span className="muted" style={{ fontSize: "0.4em", marginLeft: 6 }}>{unit}</span>
                    </div>
                    <p className="body muted" style={{ marginTop: 14 }}>{label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS PREVIEW ================= */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Reveal><span className="eyebrow"><span className="mark" />Qué obtienes</span></Reveal>
              <Reveal delay={80}><h2 className="h-lg" style={{ marginTop: 24 }}>Aceleración y capital.</h2></Reveal>
            </div>
            <Reveal delay={160} className="sh-right">
              <Link href="/aceleracion" className="btn btn--outline">Ver el programa completo</Link>
            </Reveal>
          </div>

          <div className="grid g-2 gap-lg">
            {PRODUCTS.map(([idx, title, desc, img], i) => (
              <Reveal key={idx} delay={(i % 2) * 100}>
                <Link href="/aceleracion" className="feature" style={{ display: "flex" }}>
                  <div className="f-media">
                    <img src={img} alt={title} loading="lazy" />
                  </div>
                  <div className="f-body">
                    <div className="row between center">
                      <span className="f-index">{idx}</span>
                      <span className="mark" />
                    </div>
                    <h3 className="h-md">{title}</h3>
                    <p className="body muted">{desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <span className="eyebrow eyebrow--light"><span className="mark" />Próximo ciclo abierto</span>
              <h2 className="h-xl" style={{ maxWidth: 1100 }}>
                Construye un negocio sano. <span className="muted-w">No un unicornio a pérdida.</span>
              </h2>
              <div className="row wrap-flex gap-16">
                <Link href="/membresias" className="btn btn--light">Postula tu startup</Link>
                <Link href="/nosotros" className="btn btn--light" style={{ background: "transparent", color: "#fff", borderColor: "var(--line-white)" }}>
                  Conoce el modelo
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
