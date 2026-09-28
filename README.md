# CoopVentures®

Sitio de la aceleradora cooperativa de startups. Next.js (App Router), contenido
100% fijo, sin base de datos. Estética monocromática (blanco / negro / gris)
inspirada en la referencia entregada.

## Páginas
- `/` — Inicio: el fin del capital predatorio.
- `/nosotros` — El modelo mutualista (ADN, misión, visión, equipo).
- `/aceleracion` — Aceleración y capital (productos + fondo rotatorio).
- `/membresias` — Membresías, aportes y formulario de postulación.

## Uso
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # producción
```

## Estructura
- `app/` — rutas y `globals.css` (sistema de diseño monocromático).
- `components/` — `Nav`, `Footer`, `Reveal` (animación al hacer scroll), `ApplyForm`.
- `public/media/` — imágenes y video (Pexels), aplicados en escala de grises por CSS.

El formulario es demostrativo: no envía ni almacena datos.
