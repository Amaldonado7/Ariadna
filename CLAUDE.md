# CLAUDE.md — Ariadna Portfolio

Portfolio personal de Ariadna Maldonado. Sitio estático generado con Next.js 15, desplegado en GitHub Pages en `https://amaldonado7.github.io/Ariadna/`.

## Comandos

```bash
npm run dev      # desarrollo con Turbopack (puerto 3000)
npm run build    # build estático → carpeta out/
npm start        # servidor de producción
npm run lint     # ESLint
```

> Usar **Node 20+**. El build genera un sitio estático (`output: "export"`) sin servidor Node en producción.

## Variables de entorno

```
NEXT_PUBLIC_BASE_PATH=/Ariadna
```

Esta variable define el `basePath` y `assetPrefix` para que los assets funcionen correctamente en GitHub Pages bajo la ruta `/Ariadna`.

## Arquitectura

Next.js 15 con **App Router**. No usa Pages Router.

- **`app/`** — páginas y layout raíz
- **`components/`** — componentes reutilizables
- **`components/ui/`** — componentes Shadcn UI (Radix UI + Tailwind)
- **`lib/utils.ts`** — utilidad `cn()` (clsx + tailwind-merge)
- **`public/assets/`** — imágenes, SVGs de skills, íconos de resume

### Layout raíz (`app/layout.tsx`)

Fuente: **JetBrains Mono** (todos los pesos 100–800). Envuelve cada página con:
1. `Header` — logo + navegación desktop/mobile + botón CTA
2. `StairTransition` — animación de escalera entre rutas
3. `PageTransition` — fade-out overlay en navegación

### Páginas

| Ruta | Archivo | Tipo | Descripción |
|------|---------|------|-------------|
| `/` | `app/page.tsx` | Server | Hero: texto intro, foto, socials, stats animados |
| `/services` | `app/services/page.tsx` | Client | 2 tarjetas: Engineering Leadership, Web Development |
| `/resume` | `app/resume/page.tsx` | Client | Tabs: Experience / Education / Skills / About Me |
| `/work` | `app/work/page.tsx` | Client | Carrusel de proyectos con Swiper |
| `/contact` | `app/contact/page.tsx` | Client | Formulario de contacto + info de contacto |

### Componentes clave

| Componente | Descripción |
|------------|-------------|
| `Header.tsx` | Contenedor de navegación con logo, `Nav`, `MobileNav` y botón "Hire me" |
| `Nav.tsx` | Links de navegación desktop con resaltado de ruta activa |
| `MobileNav.tsx` | Menú hamburguesa con Sheet de Radix UI |
| `Photo.tsx` | Foto de perfil con animación SVG de círculo (stroke loop 20s) |
| `Socials.tsx` | Links a GitHub y LinkedIn, acepta props de estilo |
| `Stats.tsx` | Contadores animados con `react-countup` |
| `PageTransition.tsx` | Overlay fade-out al navegar entre páginas (delay 1s, duration 0.4s) |
| `StairTransition.tsx` | 6 escalones con stagger (0.1s por escalón) al cambiar de ruta |
| `WorkSlideButtons.tsx` | Botones prev/next para el carrusel Swiper en `/work` |

## Stack de UI

- **Tailwind CSS v4** — configurado via `postcss.config.mjs` (no `tailwind.config.*`)
- **Shadcn UI** — estilo `new-york`, color base `neutral`, íconos `lucide`
- **Framer Motion** — importado como `motion` (v7+, paquete `motion`)
- **Swiper** — carrusel en la página `/work`
- **react-countup** — contadores animados en `Stats.tsx`

### Paleta de colores (CSS variables en `app/globals.css`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--primary` | `#1c1c22` | Fondo oscuro principal |
| `--accent` | `#00ff99` | Verde neón — estados activos, hover |
| `--accent-hover` | `#00e187` | Hover del acento |

### Tipografía custom (`globals.css`)

```css
.h1   /* 48px / 80px en xl, weight 600 */
.h2   /* 36px / 48px en xl, weight 600 */
.h3   /* 20px / 24px en xl, weight 600 */
.text-outline  /* webkit-text-stroke effect */
```

## Deploy

**GitHub Actions** (`.github/workflows/deploy.yml`) despliega automáticamente al hacer push a `main`:

1. `npm ci`
2. `npm run build` con `NEXT_PUBLIC_BASE_PATH=/Ariadna`
3. Sube el directorio `out/` a GitHub Pages

URL de producción: `https://amaldonado7.github.io/Ariadna/`

## Configuración Next.js relevante

```typescript
// next.config.ts
output: "export"              // sitio estático
trailingSlash: true
basePath: "/Ariadna"          // para GitHub Pages
assetPrefix: "/Ariadna/"
images: { unoptimized: true } // necesario para export estático
```

> Las imágenes deben usar `unoptimized: true` porque el export estático no soporta el Image Optimization API de Next.js.

## Datos del perfil (hard-coded en las páginas)

- **Email:** ariadnanahir.maldonado@gmail.com
- **Ubicación:** Villa Gesell, Argentina
- **GitHub:** https://github.com/Amaldonado7
- **LinkedIn:** https://www.linkedin.com/in/ariadnamaldonado1/

No hay backend ni APIs externas. Es un sitio completamente estático.
