# Eagle Dumpster - Image Manifest (Home)

**Direction:** C + A - "Rojo de emergencia" con badge de disponibilidad pulsante
**Tratamiento visual global:** Tonalidad oscura, alto contraste, iluminacion directa y dura (no difusa). Las fotos reales del cliente se usan tal cual - son autenticas y muestran el equipo real. Para la Direction C, eso es una ventaja: el visitante ve equipo REAL, no stock. Recortar a las dimensiones indicadas y convertir a .webp con calidad 85%.

---

## 1. Hero

El hero de la Direction C es tipografia pura + CTA. No usa imagen de fondo. El headline masivo en Oswald y la barra roja de CTA son el contenido visual.

**No se requiere imagen para el hero.**

---

## 2. Servicios

### 2a. Dumpster Rental

- **Seccion:** Services - card de Dumpster Rental
- **Nombre de archivo:** `/public/images/service-dumpster-rental.webp`
- **Dimensiones:** 800 x 600 px
- **Tipo:** foto real del cliente
- **Origen:** Recortar de "WhatsApp Image 2026-08-25 at 13.13.17 (2).jpeg" - el dumpster negro limpio en el driveway con montanas de fondo y camion de entrega. Muestra equipo profesional y operacion real.

### 2b. Junk Removal

- **Seccion:** Services - card de Junk Removal
- **Nombre de archivo:** `/public/images/service-junk-removal.webp`
- **Dimensiones:** 800 x 600 px
- **Tipo:** foto real del cliente
- **Origen:** Recortar de "WhatsApp Image 2026-08-25 at 13.13.17 (1).jpeg" - dumpster lleno frente a una casa con muebles y escombros. Muestra el servicio en accion: el dumpster cargado, trabajo hecho.

### 2c. Property Cleanup

- **Seccion:** Services - card de Property Cleanup
- **Nombre de archivo:** `/public/images/service-property-cleanup.webp`
- **Dimensiones:** 800 x 600 px
- **Tipo:** foto real del cliente
- **Origen:** Recortar de "WhatsApp Image 2026-08-25 at 13.13.17.jpeg" - Bobcat trabajando en limpieza de terreno residencial. Muestra capacidad con maquinaria pesada.

---

## 3. About / Equipo

- **Seccion:** About
- **Nombre de archivo:** `/public/images/about-team.webp`
- **Dimensiones:** 1200 x 800 px
- **Tipo:** foto real del cliente
- **Origen:** Usar "Diseno sin titulo (49).png" - camion entregando dumpster al atardecer con montanas de fondo. Buena composicion cinematica que encaja con el tono de la Direction C. Si el cliente tiene foto del equipo/propietario, reemplazar.

---

## 4. Areas de servicio

- **Seccion:** Areas
- **Nombre de archivo:** `/public/images/area-fresno-valley.webp`
- **Dimensiones:** 1200 x 600 px
- **Tipo:** existente o generada
- **Origen:** Usar la imagen existente area-fresno-valley.webp si la calidad es aceptable. Si no, generar con el prompt:
- **Prompt de generacion (si se necesita):** Panoramic aerial photograph of Fresno California Central Valley at golden hour, warm amber tones, agricultural fields and suburban neighborhoods visible, Sierra Nevada mountains in the far background, shot from elevated perspective, wide cinematic aspect ratio 2:1, photorealistic, no text overlays, professional landscape photography, 1200x600px

---

## 5. CTA final

- **Seccion:** CTA section (antes del footer)
- **Nombre de archivo:** `/public/images/cta-dumpster-closeup.webp`
- **Dimensiones:** 1200 x 800 px
- **Tipo:** foto real del cliente
- **Origen:** Recortar de "WhatsApp Image 2026-08-25 at 13.13.16.jpeg" - close-up del dumpster con tierra y el letrero "Rent Me" en rojo. Muestra el lado operativo y real del negocio. Composicion horizontal.

---

## 6. Logo

- **Seccion:** Navbar + Footer
- **Nombre de archivo:** `/public/images/logo-eagle-dumpster.png`
- **Dimensiones:** 200 x 200 px (cuadrado, fondo transparente)
- **Tipo:** logo real del cliente
- **Origen:** Ya existe como "logo eagle dumpster.png". Renombrar a slug sin espacios. Si es posible, obtener version SVG o PNG con fondo transparente de mejor resolucion.

---

## 7. OG Image

- **Seccion:** Meta tags (Open Graph)
- **Nombre de archivo:** `/public/og-default.jpg`
- **Dimensiones:** 1200 x 630 px
- **Tipo:** generada
- **Prompt de generacion:** Dark background #0C0C0C with Eagle Dumpster logo centered, tagline "Fast. Reliable. Honest." in white condensed uppercase Oswald-style text below the logo, subtle red accent line (#E31B1B) under the tagline, text below "Dumpster Rental and Junk Removal - Fresno CA" in smaller white text, clean corporate social media card layout, no photographic elements, logo and text only, 1200x630 pixels, JPG format

---

## Resumen de imagenes necesarias

| # | Archivo | Dimensiones | Estado | Accion |
|---|---------|-------------|--------|--------|
| 1 | service-dumpster-rental.webp | 800x600 | Reemplazar | Recortar de WhatsApp (2).jpeg |
| 2 | service-junk-removal.webp | 800x600 | Reemplazar | Recortar de WhatsApp (1).jpeg |
| 3 | service-property-cleanup.webp | 800x600 | Reemplazar | Recortar de WhatsApp.jpeg |
| 4 | about-team.webp | 1200x800 | Reemplazar | Recortar de Diseno (49).png |
| 5 | area-fresno-valley.webp | 1200x600 | Verificar | Usar existente o generar |
| 6 | cta-dumpster-closeup.webp | 1200x800 | Nuevo | Recortar de WhatsApp 13.13.16.jpeg |
| 7 | logo-eagle-dumpster.png | 200x200 | Renombrar | Quitar espacios del nombre |
| 8 | og-default.jpg | 1200x630 | Nuevo | Generar con prompt |

**Total: 8 imagenes.** 6 son fotos reales del cliente (recortar y convertir), 1 existente (verificar), 1 generada (OG image). No se necesitan imagenes de stock ni generadas para el contenido principal.
