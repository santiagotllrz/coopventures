"use client";

import { useState } from "react";

export default function ApplyForm() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ perfil: "Startup / Fundador" });

  const onChange = (e) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Sitio estático: sin backend. Confirmación local.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <span className="eyebrow eyebrow--light"><span className="mark" />Postulación recibida</span>
        <h3 className="h-md">Gracias, {data.nombre || "fundador/a"}.</h3>
        <p className="body muted-w max-560">
          Revisaremos tu postulación para el próximo ciclo de aceleración. Nuestro equipo
          de programa responde en un plazo de 5 días hábiles al correo que registraste.
        </p>
        <button className="btn btn--light mt-16" onClick={() => setSent(false)}>
          Enviar otra postulación
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="perfil">Quiero postularme como</label>
        <select id="perfil" name="perfil" value={data.perfil} onChange={onChange}>
          <option>Startup / Fundador</option>
          <option>Mentor</option>
          <option>Inversionista Ángel</option>
        </select>
      </div>

      <div className="grid g-2 gap-lg">
        <div className="field">
          <label htmlFor="nombre">Nombre completo *</label>
          <input id="nombre" name="nombre" required placeholder="Ada Lovelace" onChange={onChange} />
        </div>
        <div className="field">
          <label htmlFor="email">Correo electrónico *</label>
          <input id="email" name="email" type="email" required placeholder="hola@tustartup.co" onChange={onChange} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="org">Startup / Organización</label>
        <input id="org" name="org" placeholder="Nombre y sitio web" onChange={onChange} />
      </div>

      <div className="field">
        <label htmlFor="msg">Cuéntanos sobre tu proyecto</label>
        <textarea id="msg" name="msg" placeholder="Qué construyes, en qué etapa estás y qué buscas del ciclo." onChange={onChange} />
      </div>

      <button type="submit" className="btn" style={{ width: "100%" }}>
        Enviar postulación
      </button>
      <p className="form-note">
        Al enviar aceptas nuestros Términos y la Política de Privacidad. Este es un sitio
        demostrativo: la información no se almacena en ningún servidor.
      </p>
    </form>
  );
}
