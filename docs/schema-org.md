# Eagle Dumpster — Schema.org: Structured Data

> **Generado el 31 de agosto de 2026 por Constructor / Click Society**
> **Cliente:** Eagle Dumpster

---

<!-- El contenido generado por IA se agrega a continuación -->

# Eagle Dumpster — Schema.org: Structured Data

---

## Schema del tipo de negocio (BusinessType especializado)

El `business_type` del Brief 2 es `ProfessionalService`. Eagle Dumpster opera exclusivamente en el domicilio del cliente (`client_location`), por lo que se incluye `areaServed` con todas las ciudades de cobertura en lugar de una dirección física de atención al público.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Eagle Dumpster",
  "description": "Waste management, junk removal, appliance hauling, construction debris cleanup, and property clean-up services serving Fresno, Clovis, Madera, Coarsegold, Friant, and surrounding areas in California.",
  "url": "https://eagledumpsterca.com/",
  "telephone": "+15596134115",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fresno",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Fresno",
      "sameAs": "https://www.wikidata.org/wiki/Q131827"
    },
    {
      "@type": "City",
      "name": "Clovis",
      "sameAs": "https://www.wikidata.org/wiki/Q976074"
    },
    {
      "@type": "City",
      "name": "Madera",
      "sameAs": "https://www.wikidata.org/wiki/Q980985"
    },
    {
      "@type": "City",
      "name": "Coarsegold",
      "sameAs": "https://www.wikidata.org/wiki/Q2669038"
    },
    {
      "@type": "City",
      "name": "Friant"
    }
  ],
  "openingHours": "[COMPLETAR: ej. Mo-Sa 07:00-18:00]",
  "priceRange": "$$",
  "slogan": "Fast. Reliable. Honest.",
  "knowsLanguage": ["en", "es"],
  "sameAs": [
    "[COMPLETAR: URL de Google Business Profile]",
    "[COMPLETAR: Facebook si aplica]",
    "[COMPLETAR: Instagram si aplica]"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+15596134115",
    "contactType": "customer service",
    "availableLanguage": ["English", "Spanish"],
    "contactOption": "TollFree"
  }
}
```

---

## FAQPage Schema

Las siguientes FAQs se generaron combinando el contexto del negocio con las preguntas más frecuentes típicas del sector junk removal / waste management para el mercado de Fresno. No se proporcionaron FAQs en el Brief 2 ni datos de PAA, por lo que se generaron 8 preguntas representativas para el negocio. El texto visible en el HTML del sitio **debe coincidir exactamente** con los campos `name` y `text` de este schema.

**Ubicación:** Homepage (si las FAQs se colocan en la sección de inicio) o página dedicada `/faqs` / `/preguntas-frecuentes`.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿En qué áreas de California prestan sus servicios? / What areas in California do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Servimos a Fresno, Clovis, Madera, Coarsegold, Friant y las áreas circundantes del Valle Central de California. Si no estás seguro si cubrimos tu zona, llámanos al (559) 613-4115 y te confirmamos de inmediato. — We serve Fresno, Clovis, Madera, Coarsegold, Friant, and the surrounding areas of California's Central Valley. Call us at (559) 613-4115 to confirm service availability in your location."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan rápido pueden venir a recoger mi basura o escombros? / How quickly can you come pick up my junk or debris?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entendemos que muchas veces la situación es urgente. En Eagle Dumpster ofrecemos disponibilidad el mismo día o al siguiente día hábil en la mayoría de los casos. Llama al (559) 613-4115 y coordinamos una visita lo antes posible. — We understand urgency. Eagle Dumpster offers same-day or next-business-day availability in most cases. Call (559) 613-4115 and we'll schedule a visit as soon as possible."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta el servicio de remoción de chatarra o basura? / How much does junk removal cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio depende del volumen, tipo de materiales y accesibilidad de la propiedad. Ofrecemos cotizaciones sin costo y sin compromiso. Contáctanos al (559) 613-4115 para recibir tu presupuesto. — Pricing depends on the volume, type of materials, and property accessibility. We offer free, no-obligation quotes. Contact us at (559) 613-4115 to get your estimate."
      }
    },
    {
      "@type": "Question",
      "name": "¿Retiran electrodomésticos viejos como refrigeradores, lavadoras o estufas? / Do you remove old appliances like refrigerators, washers, or stoves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, retiramos todo tipo de electrodomésticos de forma segura y responsable, incluyendo refrigeradores, lavadoras, secadoras, estufas y más. Llama al (559) 613-4115 para coordinar el retiro. — Yes, we safely remove all types of appliances, including refrigerators, washers, dryers, stoves, and more. Call (559) 613-4115 to schedule pickup."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden limpiar los escombros de una remodelación o construcción? / Can you clean up construction or remodeling debris?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. Nos especializamos en limpieza de escombros de construcción y remodelación: concreto, madera, drywall, metal y más. Dejamos el área lista para continuar el trabajo. — Absolutely. We specialize in construction and remodeling debris cleanup, including concrete, wood, drywall, metal, and more. We leave the area ready for your next steps."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen servicios de limpieza de propiedades completas? / Do you offer full property clean-up services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Realizamos limpiezas completas de propiedades, incluyendo patios, garajes, interiores, terrenos y propiedades en proceso de desalojo o herencia. Contáctanos para coordinar una visita de evaluación sin costo. — Yes. We handle full property clean-ups including yards, garages, interiors, lots, and estate or eviction clean-outs. Contact us to schedule a free on-site evaluation."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de materiales NO pueden llevarse? / What types of materials can you NOT haul away?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Por regulaciones ambientales, no podemos transportar materiales peligrosos como pintura, solventes, baterías de vehículos o asbesto. Para todo lo demás —muebles, chatarra, escombros, electrodomésticos, jardín— estamos disponibles. Si tienes dudas sobre un material específico, llámanos al (559) 613-4115. — Due to environmental regulations, we cannot transport hazardous materials such as paint, solvents, vehicle batteries, or asbestos. For everything else—furniture, scrap, debris, appliances, yard waste—we're available. Call (559) 613-4115 if you have questions about a specific item."
      }
    },
    {
      "@type": "Question",
      "name": "¿También ofrecen servicios de jardinería y limpieza de canaletas? / Do you also offer gardening and gutter cleaning services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Además de remoción de basura, ofrecemos mantenimiento de jardinería y limpieza de canaletas (gutters). Es parte de nuestro compromiso de mantener tu propiedad en óptimas condiciones. Llama al (559) 613-4115 para más información. — Yes. In addition to junk removal, we offer gardening maintenance and gutter clean-up services as part of our commitment to keeping your property in top condition. Call (559) 613-4115 for more information."
      }
    }
  ]
}
```

---

## Service Schemas

Eagle Dumpster ofrece múltiples servicios diferenciados. Se generan schemas individuales para los 8 servicios principales identificados en el Brief 1.

### Servicio 1: Junk & Waste Removal

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Junk & Waste Removal — Remoción de Basura y Chatarra",
  "description": "Servicio de recolección y disposición de basura, chatarra y desechos generales en propiedades residenciales y comerciales en Fresno y el Valle Central de California.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Junk Removal",
  "availableLanguage": ["English", "Spanish"]
}
```

### Servicio 2: Appliance Removal

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Appliance Removal — Retiro de Electrodomésticos",
  "description": "Retiro seguro y responsable de electrodomésticos en desuso: refrigeradores, lavadoras, secadoras, estufas, lavavajillas y más en el área de Fresno, California.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Appliance Hauling"
}
```

### Servicio 3: Furniture Disposal

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Furniture Disposal — Disposición de Muebles",
  "description": "Recogemos y disponemos de muebles viejos, rotos o en desuso de forma rápida y sin complicaciones en Fresno, Clovis, Madera y zonas aledañas.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Furniture Removal"
}
```

### Servicio 4: Construction Debris Cleanup

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Construction Debris Cleanup — Limpieza de Escombros de Construcción",
  "description": "Retiro y disposición de escombros de construcción y remodelación: concreto, drywall, madera, metal y materiales mixtos en propiedades del Valle Central de California.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Construction Debris Removal"
}
```

### Servicio 5: Property Clean-Ups

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Property Clean-Ups — Limpieza Completa de Propiedades",
  "description": "Servicio de limpieza integral de propiedades residenciales y comerciales en Fresno y alrededores: desalojos, herencias, garajes, patios y terrenos completos.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Property Clean-Out"
}
```

### Servicio 6: Bobcat Services

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bobcat Services — Servicios con Bobcat",
  "description": "Servicios de excavación, nivelación y movimiento de tierra con maquinaria Bobcat para proyectos residenciales y comerciales en el área de Fresno, California.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Bobcat Equipment Services"
}
```

### Servicio 7: Recycling Services

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Recycling Services — Servicios de Reciclaje",
  "description": "Recolección y disposición responsable de materiales reciclables para propiedades residenciales y comerciales en Fresno, Clovis, Madera y zonas circundantes.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Recycling Collection"
}
```

### Servicio 8: Gardening Maintenance & Gutter Clean-Ups

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gardening Maintenance & Gutter Clean-Ups — Jardinería y Limpieza de Canaletas",
  "description": "Mantenimiento de jardines y limpieza de canaletas (gutters) para propiedades residenciales en Fresno, Clovis, Madera y áreas aledañas de California.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Landscaping Maintenance and Gutter Cleaning"
}
```

---

## BreadcrumbList (si aplica)

El Brief 1 indica `service_page_depth: suggest`, lo que implica que habrá páginas de servicios individuales bajo una jerarquía `/services/[slug]` o similar. Se generan los BreadcrumbList de ejemplo para las páginas internas más probables.

**Para la página de cada servicio individual:**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://eagledumpsterca.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://eagledumpsterca.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Junk & Waste Removal",
      "item": "https://eagledumpsterca.com/services/junk-waste-removal"
    }
  ]
}
```

**Para una landing page de urgencias (objetivo explícito del cliente):**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://eagledumpsterca.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Same-Day Junk Removal Fresno",
      "item": "https://eagledumpsterca.com/same-day-junk-removal-fresno"
    }
  ]
}
```

Code debe replicar este patrón para cada página de servicio o landing, actualizando `position 3` con el nombre y slug correspondiente.

---

## Schemas adicionales

### Schema de Urgencia / Emergency Service

El cliente indicó explícitamente querer landings enfocados en urgencias. Se genera un schema adicional `EmergencyService` que refuerza la señal de disponibilidad rápida en SERP.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Same-Day Junk Removal Fresno — Remoción de Basura el Mismo Día",
  "description": "Servicio de remoción de basura, chatarra y escombros el mismo día en Fresno, Clovis, Madera y áreas circundantes de California. Respuesta rápida garantizada.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Eagle Dumpster",
    "url": "https://eagledumpsterca.com/",
    "telephone": "+15596134115"
  },
  "areaServed": "Fresno, Clovis, Madera, Coarsegold, Friant, CA",
  "serviceType": "Emergency Junk Removal",
  "availableLanguage": ["English", "Spanish"],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "description": "Free quote — precio según volumen y tipo de material"
    },
    "availability": "https://schema.org/InStock"
  }
}
```

Este schema va **únicamente en las landing pages de urgencia**, no en el homepage global.

---

## Implementación en Next.js

### Componente base reutilizable

Crear en `components/JsonLd.tsx`:

```tsx
interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### Archivo de constantes de schemas

Crear `lib/schemas/index.ts` con todas las constantes:

```ts
export const businessSchema = {
  // pegar aquí el schema ProfessionalService de arriba
}

export const faqPageSchema = {
  // pegar aquí el schema FAQPage de arriba
}

export const serviceSchemas = {
  junkRemoval: { /* Service schema Servicio 1 */ },
  applianceRemoval: { /* Service schema Servicio 2 */ },
  furnitureDisposal: { /* Service schema Servicio 3 */ },
  constructionDebris: { /* Service schema Servicio 4 */ },
  propertyCleanUp: { /* Service schema Servicio 5 */ },
  bobcat: { /* Service schema Servicio 6 */ },
  recycling: { /* Service schema Servicio 7 */ },
  gardening: { /* Service schema Servicio 8 */ },
}

export const emergencyServiceSchema = {
  // pegar aquí el Service schema de urgencia de arriba
}
```

### Mapa de schemas por página

| Schema | Página | Archivo en Next.js |
|--------|--------|--------------------|
| `businessSchema` | Global | `app/layout.tsx` — dentro del `<head>` |
| `faqPageSchema` | Homepage o `/faqs` | `app/page.tsx` o `app/faqs/page.tsx` |
| `serviceSchemas.junkRemoval` | `/services/junk-waste-removal` | `app/services/junk-waste-removal/page.tsx` |
| `serviceSchemas.applianceRemoval` | `/services/appliance-removal` | `app/services/appliance-removal/page.tsx` |
| `serviceSchemas.furnitureDisposal` | `/services/furniture-disposal` | `app/services/furniture-disposal/page.tsx` |
| `serviceSchemas.constructionDebris` | `/services/construction-debris-cleanup` | `app/services/construction-debris-cleanup/page.tsx` |
| `serviceSchemas.propertyCleanUp` | `/services/property-clean-ups` | `app/services/property-clean-ups/page.tsx` |
| `serviceSchemas.bobcat` | `/services/bobcat-services` | `app/services/bobcat-services/page.tsx` |
| `serviceSchemas.recycling` | `/services/recycling` | `app/services/recycling/page.tsx` |
| `serviceSchemas.gardening` | `/services/gardening-gutter-cleaning` | `app/services/gardening-gutter-cleaning/page.tsx` |
| `emergencyServiceSchema` | Todas las landing pages de urgencia | `app/same-day-junk-removal-fresno/page.tsx`, etc. |
| `BreadcrumbList` (dinámico) | Todas las páginas internas | En cada `page.tsx` correspondiente |

### Ejemplo de implementación en `app/layout.tsx`

```tsx
import { JsonLd } from '@/components/JsonLd'
import { businessSchema } from '@/lib/schemas'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={businessSchema} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Ejemplo de implementación en una landing de urgencia

```tsx
// app/same-day-junk-removal-fresno/page.tsx
import { JsonLd } from '@/components/JsonLd'
import { emergencyServiceSchema } from '@/lib/schemas'

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eagledumpsterca.com/" },
    { "@type": "ListItem", "position": 2, "name": "Same-Day Junk Removal Fresno", "item": "https://eagledumpsterca.com/same-day-junk-removal-fresno" }
  ]
}

export default function SameDayLandingPage() {
  return (
    <>
      <JsonLd data={emergencyServiceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Contenido de la landing */}
    </>
  )
}
```

### Ejemplo de implementación en homepage con FAQs

```tsx
// app/page.tsx
import { JsonLd } from '@/components/JsonLd'
import { faqPageSchema } from '@/lib/schemas'

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      {/* Contenido del homepage */}
    </>
  )
}
```

### Validación obligatoria antes del deploy

Validar cada schema en: **https://search.google.com/test/rich-results**

Rich results elegibles para Eagle Dumpster:

| Schema | Rich Result esperado |
|--------|---------------------|
| `FAQPage` | Preguntas expandibles en SERP (desktop y mobile) |
| `ProfessionalService` | Knowledge Panel y datos estructurados en Google Maps |
| `Service` (páginas individuales) | Breadcrumbs enriquecidos en SERP |
| `BreadcrumbList` | Ruta de navegación visible bajo el título en SERP |

> **Nota importante para Code:** Los campos marcados como `"[COMPLETAR]"` en el schema `ProfessionalService` (Google Business Profile URL, redes sociales, horario de operación) deben resolverse con el cliente antes del deploy. El schema es válido sin ellos, pero `sameAs` con el GBP URL mejora significativamente la indexación en Google Maps.