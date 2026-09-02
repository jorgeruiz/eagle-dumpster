# Textos SEO — Eagle Dumpster

**Generado por Constructor el 31 de agosto de 2026**
**Cliente:** Eagle Dumpster

Este documento contiene los textos del sitio optimizados para SEO: meta titles, meta descriptions, headings H1/H2/H3, copy por sección y página. Usa estos textos directamente en el código — no escribas copy de relleno ni generes texto placeholder.

---

# Eagle Dumpster — SEO: Configuración Técnica Global

## Resumen para Code

Eagle Dumpster es una empresa de servicios de gestión de residuos y renta de dumpsters que opera en Fresno, Madera, Clovis, Coarsegold, Friant y áreas circundantes en California. **Alerta crítica: el sitio es bilingüe (español/inglés)** — requiere implementación de hreflang en todas las páginas y estructura de subdirectorio `/es/` o `/en/` según el idioma base que se elija como default. El dominio está activo en `https://eagledumpsterca.com/`. Este documento define los estándares técnicos SEO del sitio; aplícalos globalmente. Los meta tags, schema por página y copy se generarán cuando se cree cada página en Brief 4.

---

## Schema Organization

Colocar en el `<head>` del layout global o como script compartido. Tipo `LocalBusiness` dado que el servicio opera en ubicaciones físicas del cliente dentro de un área geográfica definida.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Eagle Dumpster",
  "url": "https://eagledumpsterca.com",
  "logo": "https://eagledumpsterca.com/logo.png",
  "description": "Dumpster rental and junk removal services in Fresno, Madera, Clovis, Coarsegold, Friant, and surrounding areas. Fast, reliable, and honest.",
  "telephone": "+15596134115",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+15596134115",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fresno",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Fresno" },
    { "@type": "City", "name": "Madera" },
    { "@type": "City", "name": "Clovis" },
    { "@type": "City", "name": "Coarsegold" },
    { "@type": "City", "name": "Friant" }
  ],
  "sameAs": [
    "[COMPLETAR: URL de Facebook si existe]",
    "[COMPLETAR: URL de Instagram si existe]"
  ]
}
```

---

## Configuración técnica global

### Idioma y hreflang

El sitio es bilingüe (español / inglés). Se requiere hreflang en todas las páginas, sin excepción.

**Estructura recomendada: subdirectorio.**
Usar `/es/` para español y raíz `/` (o `/en/`) para inglés. Se recomienda que el inglés sea el idioma raíz (`/`) ya que el dominio está en inglés y el mercado primario de búsquedas en inglés tiene mayor volumen orgánico para términos como *dumpster rental* y *junk removal*. El español opera como subdirectorio `/es/`.

```html
<!-- Implementar en el layout global de Next.js -->
<link rel="alternate" hreflang="en" href="https://eagledumpsterca.com/" />
<link rel="alternate" hreflang="es" href="https://eagledumpsterca.com/es/" />
<link rel="alternate" hreflang="x-default" href="https://eagledumpsterca.com/" />
```

En Next.js App Router, configurar via `metadata.alternates.languages` en cada página o en el layout raíz para los defaults:

```ts
// Ejemplo en layout.tsx o por página
alternates: {
  canonical: 'https://eagledumpsterca.com/[slug]',
  languages: {
    'en': 'https://eagledumpsterca.com/[slug]',
    'es': 'https://eagledumpsterca.com/es/[slug-es]',
  },
},
```

**Regla crítica:** Cada URL en inglés debe tener su par en español declarado, y viceversa. Si una página no existe en el otro idioma, usar `x-default` apuntando a la versión inglés.

---

### Canonical strategy

Cada página auto-referencia su propia URL como canonical. No se prevén duplicados estructurales, pero el sitio bilingüe genera pares de URLs distintas — cada versión idiomática es su propio canonical.

```
Versión EN:  <link rel="canonical" href="https://eagledumpsterca.com/dumpster-rental" />
Versión ES:  <link rel="canonical" href="https://eagledumpsterca.com/es/renta-de-dumpster" />
```

**Páginas con parámetros:** Si en el futuro se implementan filtros o UTM en landing pages de urgencias, el canonical debe apuntar siempre a la URL limpia sin parámetros.

---

### Robots

```
# robots.txt
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /gracias/
Disallow: /es/gracias/
Disallow: /thank-you/

Sitemap: https://eagledumpsterca.com/sitemap.xml
```

**Páginas con `noindex`** (configurar via `metadata.robots` en Next.js, no via robots.txt):
- `/gracias` y `/es/gracias` — páginas de confirmación post-formulario.
- `/thank-you` si existe versión en inglés.
- Cualquier landing page de campaña paga que no deba entrar a índice orgánico.

---

### Open Graph — defaults globales

```
og:site_name:     Eagle Dumpster
og:type:          website
og:locale:        en_US         ← default para versión EN
og:locale:        es_MX         ← override en versión ES
og:image default: https://eagledumpsterca.com/og-default.jpg  (1200×630)
twitter:card:     summary_large_image
twitter:site:     [COMPLETAR: @handle si existe]
```

**Nota para Code:** La imagen `/og-default.jpg` debe crearse como imagen genérica de marca del sitio (logo sobre fondo con colores de marca, tagline "Fast. Reliable. Honest."). Cada página sobreescribirá estos defaults con su propio `og:title`, `og:description` e `og:image` al construirse en Brief 4. La versión en español debe sobreescribir `og:locale` a `es_MX`.

---

## Sitemap.xml — estructura y reglas

Generación automática via `app/sitemap.ts` en Next.js. No se lista el contenido aquí — se construye conforme se agregan páginas.

**Reglas de prioridad:**

| Tipo de página | `<priority>` | `<changefreq>` |
|---|---|---|
| Home (EN y ES) | 1.0 | weekly |
| Páginas de servicios principales | 0.8 | monthly |
| Páginas de servicios adicionales | 0.7 | monthly |
| Landing pages de urgencia | 0.8 | weekly |
| Áreas de servicio (si se crean) | 0.7 | monthly |
| Sobre nosotros / Contacto | 0.6 | monthly |
| FAQ | 0.6 | monthly |
| Páginas legales (Privacy, Terms) | 0.3 | yearly |

**Excluir del sitemap:**
- `/gracias/`, `/es/gracias/`, `/thank-you/`
- Rutas `/api/*`
- Cualquier URL con `noindex` activo

**Nota bilingüe:** El sitemap debe incluir ambas versiones (EN y ES) de cada página. Usar el atributo `xhtml:link` para declarar las alternativas de idioma dentro del sitemap si el generador lo soporta.

---

## Convenciones de URLs y slugs

**Formato base:**
- Minúsculas, sin acentos, sin caracteres especiales.
- Separador: guion medio (`-`). Sin guion bajo, sin espacios.
- Máximo 4 palabras por slug en servicios. Landing pages de urgencia pueden extenderse a 5 si el keyword lo requiere.
- Las páginas en inglés van en raíz. Las páginas en español bajo `/es/`.

**Nota de keyword research aplicada a slugs:** Para *dumpster rental* y *renta de dumpster fresno* los términos aparecen en singular en los keywords seleccionados — usar singular como norma de slug (ej. `/dumpster-rental` no `/dumpsters-rental`).

**Ejemplos correctos vs incorrectos:**

| ✓ Correcto | ✗ Incorrecto |
|---|---|
| `/dumpster-rental` | `/Dumpster-Rental`, `/dumpsterRental` |
| `/junk-removal` | `/junk_removal`, `/JunkRemoval` |
| `/es/renta-de-dumpster` | `/es/Renta_de_Dumpster` |
| `/es/retiro-de-muebles` | `/es/retiro_muebles`, `/es/RetiroMuebles` |
| `/construction-debris-cleanup` | `/construccionDebrisCleanup` |
| `/es/limpieza-de-escombros` | `/es/limpiezaEscombros` |

**Slugs sugeridos para páginas actuales del proyecto:**

*Versión EN (raíz):*

| Página | Slug |
|---|---|
| Home | `/` |
| Dumpster Rental | `/dumpster-rental` |
| Junk Removal | `/junk-removal` |
| Waste Management | `/waste-management` |
| Recycling Services | `/recycling-services` |
| Appliance Removal | `/appliance-removal` |
| Furniture Disposal | `/furniture-disposal` |
| Property Waste Removal | `/property-waste-removal` |
| Construction Debris Cleanup | `/construction-debris-cleanup` |
| Bobcat Services | `/bobcat-services` |
| Property Clean-Ups | `/property-cleanups` |
| Gutter Clean-Ups | `/gutter-cleanups` |
| Gardening Maintenance | `/gardening-maintenance` |
| Contacto / Quote | `/contact` |

*Versión ES (`/es/`):*

| Página | Slug |
|---|---|
| Home ES | `/es/` |
| Renta de Dumpster | `/es/renta-de-dumpster` |
| Retiro de Basura / Junk Removal | `/es/retiro-de-basura` |
| Retiro de Muebles | `/es/retiro-de-muebles` |
| Limpieza de Escombros | `/es/limpieza-de-escombros` |
| Limpieza de Propiedades | `/es/limpieza-de-propiedades` |
| Servicio Urgente de Chatarra | `/es/retiro-urgente-de-chatarra` |
| Contacto | `/es/contacto` |

*Landing pages de urgencia (a confirmar en Brief 4):*

| Landing | Slug sugerido |
|---|---|
| Urgent junk removal same day | `/urgent-junk-removal-fresno` |
| Quién recoge la basura de mi casa | `/es/recogida-de-basura-a-domicilio-fresno` |
| Cuánto cuesta rentar un dumpster | `/es/costo-renta-dumpster-fresno` |

---

## Recomendaciones de implementación

**Meta tags — manejo global:**
- Nunca heredar el mismo `<title>` en todo el sitio. Cada página tiene el suyo.
- Patrón de title EN: `[Tema de la página] in Fresno, CA | Eagle Dumpster`
- Patrón de title ES: `[Tema de la página] en Fresno, CA | Eagle Dumpster`
- Incluir referencia geográfica en titles de servicios y landings — crítico para SEO local.
- Character limits: title 55–60 chars, description 150–160 chars.
- En Next.js: usar `metadata` export por página o `generateMetadata()` para rutas dinámicas.

**Indexación:**
- Verificar que producción no tenga `noindex` global heredado de staging.
- Confirmar que `eagledumpsterca.com` y `www.eagledumpsterca.com` resuelvan al mismo lugar con redirect 301. Canonical siempre a la versión sin `www` (o con `www` — definir uno y ser consistente).
- Verificar en Google Search Console que el dominio esté verificado en ambas variantes (con y sin `www`).

**Core Web Vitals:**
- Imágenes hero (especialmente en landing pages de urgencia): `loading="eager"` + `fetchPriority="high"`. No lazy loading en el above-the-fold.
- Todas las imágenes deben tener `width` y `height` declarados para evitar CLS.
- Scripts de analytics (GA4, Meta Pixel si aplica): cargar con `defer` o via `next/script` con `strategy="afterInteractive"`.
- Si se usan Google Fonts: preferir `font-display: swap` o cargar vía `next/font` para evitar bloqueo de render.

**Sitio bilingüe — puntos críticos:**
- Usar estructura de subdirectorio (`/es/`) — no subdominio. Consolida la autoridad del dominio principal.
- El selector de idioma en el UI debe usar `<a href>` reales, no JavaScript que manipule el DOM sin cambio de URL — Google debe poder rastrear ambas versiones.
- No traducir automáticamente con Google Translate in-page. Cada versión idiomática es contenido independiente con su propia URL y sus propios meta tags.
- Revisar que el atributo `lang` del `<html>` cambie correctamente según el idioma de la página: `lang="en"` para EN, `lang="es"` para ES.

**Landing pages de urgencia:**
- Estas páginas tienen objetivo de conversión inmediata. Si se corre tráfico pago a ellas, considerar `noindex` en las versiones de campaña y crear versiones orgánicas separadas con los slugs sugeridos arriba.
- El número de teléfono `(559) 613-4115` debe estar en formato `tel:+15596134115` en todos los `<a href>` para habilitar click-to-call en móvil — señal de UX relevante para rankings locales.

---

## Estrategia SEO

# Eagle Dumpster — SEO: Estrategia

---

## Resumen estratégico

Eagle Dumpster es un negocio de servicios de manejo de residuos y renta de dumpsters con cobertura local en Fresno, Madera, Clovis, Coarsegold, Friant y áreas circundantes en California. El sitio operará en inglés y español (variante neutral), con audiencia primaria B2C de 35–65 años orientada por precio y urgencia. El set de keywords contiene 13 términos seleccionados, con un ángulo SEO dual: capturar demanda transaccional inmediata en inglés ("dumpster rental", "junk removal") y demanda conversacional en español con intención urgente ("quién recoge la basura de mi casa", "servicio urgente de retiro de chatarra"). La alerta estratégica más importante: el sitio bilingüe requiere una decisión de arquitectura antes de construir — páginas separadas por idioma (con hreflang) vs. contenido mixto en una sola URL; sin esta decisión, las keywords en español no posicionarán correctamente y el esfuerzo SEO se fragmentará. Gap principal: no se recibió análisis de competidores ni datos de volumen real (DataForSEO), por lo que las estimaciones de volumen son relativas. **Nivel de confianza: Media — keyword set funcional pero sin datos de competencia ni volumen verificado.**

---

## Keywords del proyecto por tema

### Tema 1: Renta de Dumpster — Demanda Directa

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| dumpster rental | Primaria | Transaccional | Alto |
| roll off dumpsters rental | Primaria | Transaccional | Alto |
| Dumpster Rental (local) | Secundaria | Transaccional | Alto |
| renta de dumpster fresno ca | Long-tail | Transaccional | Medio |
| cuánto cuesta rentar un dumpster en fresno | Long-tail | Comercial/comparativa | Bajo |

**Cuándo usar este grupo:** Páginas de servicio dedicadas a renta de dumpster y cualquier landing de urgencia enfocada en proyectos de construcción, renovación o limpieza a gran escala. Este grupo es el núcleo transaccional del sitio.

**Notas de uso:** Alta competencia en inglés — "dumpster rental" está dominado por agregadores nacionales (Waste Management, Hometown, etc.). La oportunidad real está en la variante local ("fresno ca") y en el contenido en español, donde la competencia es significativamente menor.

---

### Tema 2: Retiro de Chatarra y Muebles — Junk Removal

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| junk removal | Primaria | Transaccional | Alto |
| retiro de muebles viejos fresno | Secundaria | Transaccional | Medio |
| servicio urgente de retiro de chatarra fresno | Long-tail | Transaccional urgente | Bajo |

**Cuándo usar este grupo:** Páginas de servicio de retiro de muebles, electrodomésticos y chatarra. También es el grupo central para las landing pages de urgencia que el cliente quiere desarrollar.

**Notas de uso:** "Junk removal" comparte alta competencia con agregadores nacionales, pero "servicio urgente de retiro de chatarra fresno" es una long-tail con intención de urgencia muy alta y baja competencia — ideal para landings específicas. Explotar el diferenciador "Fast. Reliable. Honest." en este grupo.

---

### Tema 3: Limpieza de Propiedades y Escombros

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| Property Waste Removal | Primaria | Transaccional | Medio |
| Construction Debris Cleanup | Primaria | Transaccional | Medio |
| limpieza de propiedades en fresno | Secundaria | Transaccional | Medio |
| servicio de limpieza de escombros california | Long-tail | Transaccional | Bajo |

**Cuándo usar este grupo:** Páginas de servicio enfocadas en limpieza post-construcción, desalojo de propiedades y remoción de escombros. También aplica para landings orientadas a contratistas y propietarios de inmuebles.

**Notas de uso:** "Construction Debris Cleanup" tiene potencial B2B oculto en un sitio B2C — si el cliente atiende contratistas, vale la pena posicionar este término con lenguaje específico al sector construcción. Nivel de competencia local moderado.

---

### Tema 4: Recolección a Domicilio — Intención Conversacional en Español

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| recolección de basura a domicilio fresno | Primaria | Transaccional | Medio |
| quién recoge la basura de mi casa en fresno | Long-tail | Informacional/urgente | Bajo |

**Cuándo usar este grupo:** Páginas orientadas al segmento hispanohablante que busca soluciones inmediatas de retiro de residuos del hogar. El tono conversacional de las keywords ("quién recoge") sugiere contenido en formato pregunta-respuesta o FAQ, además de landings directas.

**Notas de uso:** Este grupo es la oportunidad de menor competencia del set. Las búsquedas conversacionales en español local casi no tienen presencia de competidores directos bien posicionados. Prioridad alta en la versión en español del sitio.

---

### Narrativa estratégica del proyecto

El ángulo SEO central de Eagle Dumpster es capturar intención urgente y local en un mercado donde los competidores nacionales dominan los términos genéricos pero descuidan el español y las long-tails de urgencia. La keyword de mayor potencial de conversión es **"servicio urgente de retiro de chatarra fresno"** — tiene intención transaccional alta, urgencia explícita en el término mismo, y competencia mínima, lo que la alinea directamente con el diferenciador del negocio ("Fast"). El principal riesgo de canibalización existe entre el Tema 1 (Renta de Dumpster) y el Tema 2 (Junk Removal): son servicios distintos pero el usuario puede llegar a ambos con una misma necesidad — la arquitectura de contenido debe separar claramente ambos servicios para que Google no los trate como la misma intención.

---

## Estructura sugerida del sitio

| Página sugerida | Keywords relevantes | Prioridad |
|---|---|---|
| Inicio | Todos los temas — ancla de autoridad general | Alta |
| Renta de Dumpster (servicio) | Tema 1 completo | Alta |
| Junk Removal / Retiro de Chatarra (servicio) | Tema 2 completo | Alta |
| Limpieza de Propiedades y Escombros (servicio) | Tema 3 completo | Alta |
| Retiro de Muebles y Electrodomésticos (servicio) | Tema 2, Tema 4 | Alta |
| Landing: Servicio Urgente — Fresno | Tema 2 long-tail, Tema 4 long-tail | Alta |
| Cobertura geográfica / Áreas de servicio | Tema 1, Tema 2, Tema 3 con modificador local | Media |
| Preguntas frecuentes (FAQ) | Tema 4 conversacional, "cuánto cuesta rentar un dumpster" | Media |
| Sobre nosotros / El equipo | Diferenciadores, confianza | Media |
| Testimonios | Confianza, autoridad | Media |
| Bobcat Services / Servicios adicionales | Temas 3 y 4 en extensión | Media |
| Blog (futuro) | Tema 4 informacional, Tema 3 | Futura |

**Decisión pendiente para Jorge:** Definir arquitectura bilingüe antes de Brief 4. Opciones: (a) `/en/` y `/es/` como directorios separados — recomendado para SEO, permite hreflang limpio; (b) subdominio `es.eagledumpsterca.com` — válido pero más costoso en autoridad; (c) páginas mixtas — no recomendado, fragmenta el posicionamiento.

---

## Estrategia de internal linking

**Principios para este proyecto:**

1. **Flujo hacia conversión primaria:** Toda página de servicio debe incluir al menos un enlace contextual hacia la sección de contacto o formulario de cotización. El CTA "Recibe una visita hoy" debe aparecer como anchor de texto en contexto, no solo como botón flotante.

2. **Inicio como distribuidor de autoridad:** La página de inicio debe enlazar explícitamente a las 4–5 páginas de servicio más importantes (Renta de Dumpster, Junk Removal, Limpieza de Propiedades, Landing de Urgencia) para concentrar autoridad donde más importa comercialmente.

3. **Contexto semántico entre servicios complementarios:** Cuando la página de Renta de Dumpster mencione limpieza post-construcción, enlazar a la página de Construction Debris Cleanup. Cuando la página de Junk Removal mencione muebles, enlazar a Retiro de Muebles. Los enlaces deben surgir de contexto real, no de listas de "ver también".

4. **FAQ como puente hacia servicios:** Las respuestas del FAQ deben enlazar hacia la página de servicio correspondiente. "¿Cuánto cuesta rentar un dumpster?" → enlace a página de Renta de Dumpster con sección de precios/cotización.

5. **Landing de urgencia como destino autónomo:** La landing de servicio urgente no debe enlazar hacia otras páginas del sitio más allá del CTA de contacto — debe funcionar como página de aterrizaje cerrada para maximizar conversión desde tráfico pagado y búsquedas urgentes.

6. **Consistencia de idioma en enlaces:** Las versiones en español deben enlazarse entre sí (no hacia versiones en inglés salvo que sea intencional). Evitar mezclar idiomas en la ruta de navegación del usuario.

---

## Ideas de contenido futuro

**Blog / artículos (6 temas sugeridos):**

- *¿Cuánto cuesta un servicio de junk removal en Fresno?* — Captura la long-tail comercial "cuánto cuesta" en su versión informacional; pre-califica leads por precio antes de que llamen.
- *Cómo limpiar una propiedad después de una remodelación en California* — Posiciona el Tema 3 con intención informacional; atrae a propietarios en fase de planificación post-construcción.
- *Diferencia entre renta de dumpster y servicio de junk removal: ¿cuál necesito?* — Resuelve confusión de usuario entre los dos servicios principales; reduce llamadas no calificadas y mejora la tasa de conversión.
- *Qué hacer con los muebles viejos en Fresno: opciones legales y rápidas* — Atrae búsquedas del Tema 2 y 4 en español; posiciona a Eagle Dumpster como referencia local.
- *Guía para limpiar una propiedad heredada o en abandono* — Segmento con urgencia alta y proceso emocional complejo; el tono "close_warm" del brief encaja perfectamente aquí.
- *Servicios de Bobcat: cuándo y por qué necesitas maquinaria para tu limpieza* — Educa sobre un servicio menos conocido del catálogo y abre búsquedas de nicho con poca competencia.

**Páginas adicionales o landings (3 ideas):**

- *Landing: Limpieza de urgencia en 24 horas — Fresno y alrededores* — Cubre el Tema 2 long-tail de urgencia y el objetivo explícito del cliente de crear landings para urgencias; ideal para campañas de Google Ads.
- *Página por ciudad: Madera / Clovis / Coarsegold / Friant* — Páginas de cobertura geográfica individuales que capturan búsquedas "[servicio] + [ciudad]" sin canibalizar la página principal de servicios.
- *Página: Servicios para contratistas y empresas de construcción* — Extiende el Tema 3 hacia un segmento B2B latente; diferencia propuesta de valor para clientes recurrentes vs. particulares.

**Recursos o contenido de autoridad:**

- *FAQ extendido en español* — Las búsquedas conversacionales del Tema 4 ("quién recoge", "cuánto cuesta") funcionan como preguntas naturales de FAQ; un FAQ bien estructurado con schema FAQPage puede capturar posición cero en búsquedas de voz y mobile, donde este segmento de audiencia (35–65, hispanohablante) tiene alta actividad.