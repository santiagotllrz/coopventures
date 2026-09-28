import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Nosotros — El Modelo Mutualista | CoopVentures®",
  description:
    "Una aceleradora gobernada por sus propios usuarios. Misión, visión y el ADN cooperativo detrás de CoopVentures: un asociado, un voto.",
};

const TEAM = [
  ["Santiago Tellez", "Director de Programa", "/media/santiago-tellez.png"],
  ["Mateo Gaviria", "Líder de Inversión", "/media/p-man1.jpg"],
  ["Sofía Duarte", "Mentora Técnica", "/media/p-woman2.jpg"],
  ["Andrés Molina", "Director de Comunidad", "/media/p-man2.jpg"],
];

const ADN = [
  ["Propiedad de los fundadores", "Los dueños de la aceleradora son quienes la usan: fundadores, mentores e inversionistas. No hay un fondo externo extrayendo valor."],
  ["Un asociado, un voto", "Las decisiones estratégicas se toman de forma horizontal. El poder no depende del tamaño del cheque."],
  ["Fondo rotatorio de éxito", "Las startups que crecen devuelven una fracción de sus ingresos, recapitalizando el sistema para la siguiente generación."],
];

export default function Nosotros() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ paddingTop: 170 }}>
        <div className="wrap">
          <Reveal><span className="eyebrow"><span className="mark" />Nosotros</span></Reveal>
          <Reveal delay={80}>
            <h1 className="h-xl" style={{ marginTop: 28, maxWidth: 1200 }}>
              El modelo mutualista.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead muted max-720" style={{ marginTop: 32 }}>
              Una aceleradora gobernada por sus propios usuarios cambia las reglas del juego.
              Tomamos el dinamismo del capital de riesgo y lo blindamos con la gobernanza
              democrática del cooperativismo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wide image */}
      <div className="wrap">
        <Reveal>
          <div className="media media--wide" style={{ aspectRatio: "16 / 7" }}>
            <img src="/media/team-modern.jpg" alt="Equipo de fundadores colaborando" />
          </div>
        </Reveal>
      </div>

      {/* ADN Cooperativo */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow"><span className="mark" />El ADN cooperativo</span>
            </Reveal>
            <Reveal delay={120} className="sh-right">
              <p className="body muted">
                El capital, la infraestructura y el conocimiento técnico fluyen
                horizontalmente para multiplicar la supervivencia de cada proyecto.
              </p>
            </Reveal>
          </div>

          <div className="grid g-3 gap-lg">
            {ADN.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="card--line" style={{ borderRadius: "var(--radius)", padding: 36, height: "100%" }}>
                  <div className="stack gap-24" style={{ height: "100%" }}>
                    <span className="stat-num" style={{ fontSize: "clamp(34px,4vw,52px)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div style={{ marginTop: "auto" }}>
                      <h3 className="h-sm">{t}</h3>
                      <p className="body muted mt-16">{d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="section--tight">
        <div className="wrap">
          <div className="grid g-2 gap-lg">
            <Reveal>
              <div className="card" style={{ padding: 48, height: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
                <span className="eyebrow"><span className="mark" />Misión</span>
                <p className="h-md">
                  Impulsar y financiar a la próxima generación de startups tecnológicas a
                  través de un modelo mutualista —capital semilla, formación intensiva y
                  comunidad global— sin comprometer la soberanía de los fundadores.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card--dark" style={{ borderRadius: "var(--radius)", padding: 48, height: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
                <span className="eyebrow eyebrow--light"><span className="mark" />Visión 2031</span>
                <p className="h-md">
                  Consolidarnos como la mayor aceleradora cooperativa de startups de América
                  Latina, con una red de más de{" "}
                  <span className="muted-w">500 empresas tecnológicas</span> operando bajo
                  esquemas sostenibles y reinvirtiendo retornos en el fondo común.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <h2 className="h-lg">Las personas detrás.</h2>
            </Reveal>
            <Reveal delay={120} className="sh-right">
              <p className="body muted">
                Un equipo que trabaja codo a codo con cada batch para que ningún proyecto
                camine solo.
              </p>
            </Reveal>
          </div>

          <div className="grid g-4 gap-lg">
            {TEAM.map(([name, role, img], i) => (
              <Reveal key={name} delay={i * 90}>
                <div className="team-card">
                  <img src={img} alt={name} loading="lazy" />
                  <div className="row between" style={{ alignItems: "flex-start" }}>
                    <span className="mark eyebrow--light" style={{ background: "#fff" }} />
                    <div>
                      <div className="tc-role">{role}</div>
                      <div className="tc-org">en CoopVentures®</div>
                    </div>
                  </div>
                  <div className="tc-name">{name}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <span className="eyebrow eyebrow--light"><span className="mark" />Sé parte de la red</span>
              <h2 className="h-xl" style={{ maxWidth: 1000 }}>
                El capital fluye horizontal. <span className="muted-w">Únete a la cooperativa.</span>
              </h2>
              <div className="row wrap-flex gap-16">
                <Link href="/membresias" className="btn btn--light">Ver membresías</Link>
                <Link href="/aceleracion" className="btn btn--light" style={{ background: "transparent", color: "#fff", borderColor: "var(--line-white)" }}>
                  Aceleración y capital
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
