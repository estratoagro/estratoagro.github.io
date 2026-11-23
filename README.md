# Estrato

Sitio web institucional de **Estrato**, consultora de análisis personalizados de datos para productores, agroindustria y AgTech.

## Archivos

- `index.html` — Estructura semántica y contenido (Hero, Para quién, Capacidades, Metodología, Por qué Estrato y Contacto).
- `styles.css` — Hoja de estilos a medida sin frameworks externos.
- `app.js` — Visualización generativa de estratos en Canvas, selector de perfil y salida directa de consultas (WhatsApp, Email y Agenda).

## Configuración antes de publicar

Actualizá tus datos reales en `CONTACT` al inicio de `app.js`:

```js
const CONTACT = {
  email: 'hola@estrato.ar',
  whatsapp: '5491100000000',
  calendar: 'https://cal.com/estrato/reunion'
};
```

## Vista previa local

Abrí `index.html` directamente o corré un servidor local:

```bash
py -m http.server 8091
```

---

## Roadmap de Construcción y Posicionamiento

### Fase 1 — Lanzamiento y Contacto Real
- Configurar el email real en `app.js` (y conectar el formulario a Formspree / Web3Forms).
- Crear repositorio independiente para Estrato y desplegar en hosting gratuito con HTTPS (Cloudflare Pages, Vercel o GitHub Pages).
- Conectar dominio propio (`.com.ar` en `nic.ar` o `.com` disponible).

### Fase 2 — SEO Técnico y Posicionamiento en Buscadores (Google, Bing, etc.)
- **SEO Técnico en código:**
  - Etiquetas `<title>`, `<meta name="description">`, `<link rel="canonical">` y Open Graph / Twitter Cards optimizadas.
  - Datos estructurados JSON-LD (`Organization`, `ProfessionalService`, `Article` para cada estudio).
  - Generación de `sitemap.xml` y `robots.txt`.
  - Optimización de Core Web Vitals (compresión de `assets/`, carga diferida, `preload` de fuentes críticas).
- **SEO de Contenidos (Palabras clave de intención comercial):**
  - Páginas/secciones específicas para búsquedas reales del sector: *análisis de datos para el agro*, *estadística de ensayos agrícolas*, *modelos predictivos agroindustria*, *ciencia de datos AgTech Argentina*.
- **Indexación y Autoridad:**
  - Alta en **Google Search Console** y **Bing Webmaster Tools** con envío de `sitemap.xml`.
  - Construcción de enlaces entrantes reales (publicación de estudios propios, LinkedIn, notas técnicas).

### Fase 3 — Estudio Público #1 (Motor de Autoridad y Tráfico Orgánico)
- Descarga y limpieza de red pública de ensayos comparativos multi-ambiente en Argentina (INTA / cultivares / bioinsumos).
- Análisis con Modelos Lineales Mixtos (BLUPs, interacción Tratamiento × Ambiente, análisis de estabilidad y probabilidad de retorno).
- Publicación como artículo técnico indexable en `/estudios/` + versión PDF descargable.

### Fase 4 — Salida Comercial
- Difusión del Estudio #1 en LinkedIn y contacto directo por email con referentes técnicos de productores, agroindustria y AgTech.
