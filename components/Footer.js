import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-cols">
          <p className="lead" style={{ maxWidth: 380 }}>
            ¿Listo para acelerar sin ceder el control?{" "}
            <span className="muted">Postúlate al próximo ciclo o súmate como inversionista ángel de la red.</span>
          </p>
          <div style={{ marginTop: 8 }}>
            <a className="footer-mail" href="mailto:hola@coopventures.coop">hola@coopventures.coop</a>
          </div>
        </div>

        <div className="footer-cols">
          <h4>Navegación</h4>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/aceleracion">Aceleración y Capital</Link>
          <Link href="/membresias">Membresías y Aportes</Link>
        </div>

        <div className="footer-cols">
          <h4>Comunidad</h4>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">X / Twitter</a>
          <a href="mailto:hola@coopventures.coop">Contacto</a>
        </div>
      </div>

      <div className="footer-wordmark">
        <div className="fw">CoopVentures®</div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="small muted-w">© 2026 CoopVentures Cooperativa Multiactiva. Todos los derechos reservados.</span>
          <div className="footer-legal">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
            <a href="#">Estatutos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
