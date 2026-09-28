import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Aceleración y Capital — Nuestros Productos | CoopVentures®",
  description:
    "Programa Batch de 12 semanas, Fondo Semilla Mutual con revenue-sharing, Demo Day Internacional y CoopPerks. Todo lo que obtiene una startup al entrar a la cooperativa.",
};

const PRODUCTS = [
  {
    idx: "001",
    title: "Programa de Aceleración “Batch”",
    desc: "Un ciclo intensivo de 12 semanas para afinar el modelo de negocio, lograr el encaje producto-mercado (PMF) y recibir mentoría 1 a 1 de fundadores senior.",
    chips: ["12 semanas", "Product-market fit", "Mentoría 1:1", "Cohorte curada"],
    img: "/media/workshop.jpg",
  },
  {
    idx: "002",
    title: "Fondo Semilla Mutual",
    desc: "Asignación de capital de trabajo inicial de $15.000 a $50.000 USD bajo contratos de riesgo compartido sobre ingresos futuros (revenue-sharing). Inyectamos liquidez sin arrebatar acciones.",
    chips: ["$15K – $50K USD", "Revenue-sharing", "Sin dilución", "Riesgo compartido"],
    img: "/media/finance.jpg",
  },
  {
    idx: "003",
    title: "Demo Day Internacional",
    desc: "Eventos privados y semestrales donde las startups graduadas presentan sus avances ante una red curada de inversionistas ángeles y fondos institucionales aliados para levantar rondas semilla mayores.",
    chips: ["Semestral", "Red curada", "Rondas semilla", "Inversionistas ángeles"],
    img: "/media/audience.jpg",
  },
  {
    idx: "004",
    title: "CoopPerks & Red Compartida",
    desc: "Acceso a beneficios empresariales negociados por volumen: decenas de miles de dólares en créditos para servidores (AWS, Google Cloud), pasarelas de pago y asesoría legal estandarizada.",
    chips: ["Créditos cloud", "AWS · Google Cloud", "Pasarelas de pago", "Asesoría legal"],
    img: "/media/coworking.jpg",
  },
];

const CIRCLE = [
  ["Aceleramos", "Capital semilla, mentoría técnica e infraestructura para tu startup en etapa temprana."],
  ["Creces", "Alcanzas tracción y product-market fit con acompañamiento y una red que empuja contigo."],
  ["Devuelves", "Una fracción de tus ingresos regresa al fondo común y financia a la siguiente generación."],
];

export default function Aceleracion() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ paddingTop: 170 }}>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <div>
              <Reveal><span className="eyebrow"><span className="mark" />Nuestros productos</span></Reveal>
              <Reveal delay={80}>
                <h1 className="h-xl" style={{ marginTop: 28, maxWidth: 1100 }}>
                  Aceleración<br />y capital.
                </h1>
              </Reveal>
            </div>
            <Reveal delay={160} className="sh-right">
              <p className="body muted">
                Cuatro palancas que recibe cada startup aceptada en la cooperativa. Todo
                diseñado para multiplicar tus probabilidades de supervivencia sin
                comprometer tu equity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products — alternating rows */}
      <section className="section--tight">
        <div className="wrap stack" style={{ gap: 4 }}>
          {PRODUCTS.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.idx}>
                <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <div
                    className="two-col"
                    style={{ gap: 0, alignItems: "stretch" }}
                  >
                    <div
                      style={{
                        padding: "clamp(28px,4vw,56px)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 22,
                        order: reverse ? 2 : 1,
                      }}
                    >
                      <div className="row between center">
                        <span className="f-index">{p.idx}</span>
                        <span className="mark" />
                      </div>
                      <h2 className="h-md" style={{ marginTop: "auto" }}>{p.title}</h2>
                      <p className="body muted">{p.desc}</p>
                      <div className="chips">
                        {p.chips.map((c) => (
                          <span className="chip" key={c}>{c}</span>
                        ))}
                      </div>
                    </div>
                    <div
                      className="media"
                      style={{ borderRadius: 0, minHeight: 340, order: reverse ? 1 : 2 }}
                    >
                      <img src={p.img} alt={p.title} loading="lazy" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Circular ecosystem */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band" style={{ background: "var(--dark)" }}>
            <div className="sec-head" style={{ marginBottom: 0, alignItems: "flex-start" }}>
              <Reveal>
                <div>
                  <span className="eyebrow eyebrow--light"><span className="mark" />Fondo rotatorio de éxito</span>
                  <h2 className="h-lg" style={{ marginTop: 22, color: "#fff", maxWidth: 700 }}>
                    Un ecosistema circular.
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120} className="sh-right">
                <p className="body muted-w">
                  El revenue-sharing recapitaliza el sistema. Lo que hoy te acelera a ti,
                  mañana acelera a quien viene detrás.
                </p>
              </Reveal>
            </div>

            <div className="grid g-3 gap-lg" style={{ marginTop: 20 }}>
              {CIRCLE.map(([t, d], i) => (
                <Reveal key={t} delay={i * 120}>
                  <div style={{ borderTop: "1px solid var(--line-white)", paddingTop: 24 }}>
                    <span className="stat-num" style={{ fontSize: "clamp(30px,3.4vw,44px)", color: "#fff" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="h-sm" style={{ color: "#fff", marginTop: 18 }}>{t}</h3>
                    <p className="body muted-w mt-16">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--tight">
        <div className="wrap">
          <Reveal>
            <div className="row between center wrap-flex gap-40" style={{ borderTop: "1px solid var(--line)", paddingTop: 60 }}>
              <h2 className="h-lg max-720">¿Tu startup encaja en el próximo batch?</h2>
              <Link href="/membresias" className="btn">Postúlate ahora</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
