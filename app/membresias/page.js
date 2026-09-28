import Reveal from "@/components/Reveal";
import ApplyForm from "@/components/ApplyForm";

export const metadata = {
  title: "Membresías y Aportes | CoopVentures®",
  description:
    "Deberes y derechos de cada perfil de la cooperativa. Startups y fundadores, mentores e inversionistas ángeles. Postúlate al próximo ciclo de aceleración.",
};

const PROFILES = [
  {
    tag: "Perfil 01",
    title: "Startups y Fundadores",
    img: "/media/founder-laptop.jpg",
    intro: "Financiamiento, aceleración e infraestructura a cambio de compromiso con la comunidad y el fondo común.",
    give: [
      ["Cuota de afiliación", "Una cuota inicial equivalente a un (1) salario mínimo para abrir la matrícula en la cooperativa."],
      ["Revenue-sharing con éxito", "El compromiso contractual de aportar un porcentaje menor de ingresos futuros (ej. 2% por 24 meses), solo si la empresa alcanza tracción."],
      ["Educación solidaria", "Cursar las 20 horas de formación en economía solidaria y gobernanza cooperativa."],
    ],
  },
  {
    tag: "Perfil 02",
    title: "Mentores e Inversionistas Ángeles",
    img: "/media/discuss.jpg",
    intro: "Capital y conocimiento que nutren el fondo y aceleran al batch en curso, con voz y voto en la cooperativa.",
    give: [
      ["Aportes de capital de riesgo", "Aportes periódicos que nutren el fondo común de crédito e inversión de la cooperativa."],
      ["Mentoría comprometida", "Un mínimo de 10 horas semestrales de mentoría técnica o estratégica a las startups del batch en curso."],
      ["Gobernanza activa", "Participación en las decisiones bajo el principio de un asociado, un voto."],
    ],
  },
];

export default function Membresias() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ paddingTop: 170 }}>
        <div className="wrap">
          <Reveal><span className="eyebrow"><span className="mark" />Membresías y aportes</span></Reveal>
          <Reveal delay={80}>
            <h1 className="h-xl" style={{ marginTop: 28, maxWidth: 1100 }}>Reglas del juego.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead muted max-720" style={{ marginTop: 32 }}>
              Cada perfil da algo y recibe algo. Así se sostiene un ecosistema donde el
              capital, la infraestructura y el conocimiento fluyen horizontalmente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Profiles */}
      <section className="section--tight">
        <div className="wrap stack" style={{ gap: 4 }}>
          {PROFILES.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.tag}>
                <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <div className="two-col" style={{ gap: 0, alignItems: "stretch" }}>
                    <div className="media" style={{ borderRadius: 0, minHeight: 420, order: reverse ? 2 : 1 }}>
                      <img src={p.img} alt={p.title} loading="lazy" />
                    </div>
                    <div style={{ padding: "clamp(28px,4vw,52px)", display: "flex", flexDirection: "column", gap: 24, order: reverse ? 1 : 2 }}>
                      <div className="row between center">
                        <span className="eyebrow"><span className="mark" />{p.tag}</span>
                      </div>
                      <h2 className="h-md">{p.title}</h2>
                      <p className="body muted" style={{ maxWidth: 520 }}>{p.intro}</p>
                      <div>
                        <span className="small muted" style={{ textTransform: "uppercase", letterSpacing: 0 }}>Qué aporta</span>
                        <div className="give-list mt-16">
                          {p.give.map(([t, d]) => (
                            <div className="give-item" key={t}>
                              <span className="gi-mark" />
                              <div>
                                <h3 className="body" style={{ fontWeight: 600 }}>{t}</h3>
                                <p className="body muted" style={{ marginTop: 6 }}>{d}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Application form */}
      <section className="section" id="postular">
        <div className="wrap">
          <div className="two-col" style={{ alignItems: "start" }}>
            <div className="stack gap-24">
              <Reveal><span className="eyebrow"><span className="mark" />Formulario de postulación</span></Reveal>
              <Reveal delay={80}>
                <h2 className="h-lg">Aplica al próximo ciclo.</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="body muted max-560">
                  Postula tu startup al próximo batch de aceleración o regístrate como
                  mentor o inversionista ángel de la red. Respondemos en un plazo de 5 días
                  hábiles.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="stack" style={{ gap: 0, marginTop: 8, maxWidth: 420 }}>
                  <div className="give-item" style={{ borderTop: "1px solid var(--line)" }}>
                    <span className="gi-mark" />
                    <p className="body">Sin dilución de tu equity.</p>
                  </div>
                  <div className="give-item">
                    <span className="gi-mark" />
                    <p className="body">Devuelves al fondo solo si tienes éxito.</p>
                  </div>
                  <div className="give-item" style={{ borderBottom: "1px solid var(--line)" }}>
                    <span className="gi-mark" />
                    <p className="body">Voz y voto desde el primer día.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <ApplyForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
