# Mapa del Sitio — Eagle Dumpster

> **Instrucciones para Claude Code:** Llena este archivo al terminar la construcción inicial. El mapa de páginas y secciones es usado por el sistema de solicitudes de cambio del cliente — cuando el cliente pida un cambio, seleccionará una sección de esta lista. Formato correcto es importante para que el selector funcione.
>
> Usa IDs en `snake_case` corto y consistente. Las etiquetas deben ser legibles para un cliente no técnico. El componente es el archivo real que renderiza esa sección.
>
> Elimina las instrucciones en bloques `>` al llenar el documento.

**Última actualización:** [fecha de construcción inicial]

---

## Páginas y secciones

### Inicio (`/`)

**ID de página:** `home`

| ID de sección | Etiqueta para el cliente | Componente |
|--------------|--------------------------|------------|
| `home_hero` | Hero principal | `[componente]` |
| `home_about` | Acerca de / Quiénes somos | `[componente]` |
| `home_services` | Servicios destacados | `[componente]` |
| `home_cta` | Llamada a la acción principal | `[componente]` |
| `home_footer` | Pie de página | `[componente]` |

> Agrega o elimina secciones según lo que existe en el sitio real.

---

> Replica el bloque anterior para cada página adicional del sitio. Ejemplo:

### [Nombre de la página] (`/[ruta]`)

**ID de página:** `[id_pagina]`

| ID de sección | Etiqueta para el cliente | Componente |
|--------------|--------------------------|------------|
| `[id_pagina]_[seccion]` | [Nombre legible] | `[componente]` |
