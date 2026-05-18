# Boda · Daniel & Kenia 💍

Invitación de boda en Next.js.

## Datos del evento
- **Pareja:** Daniel Cedano & Kenia Montaño
- **Fecha:** 20 de junio de 2026, 5:00 PM
- **Lugar:** Iglesia Pentecostal Misionera Elohim (@IglesiaPMelohim)
- **Solo adultos** (no niños)
- **Colores:** coral y beige

## Cómo correrlo
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## ⚠️ Antes de publicar — edita `lib/event.ts`
- `whatsappNumber`: cambia `57XXXXXXXXXX` por el número real (formato internacional, sin `+` ni espacios).
- `venue.mapsUrl`: opcionalmente reemplaza la búsqueda por la URL/coordenadas exactas de la iglesia.
- `verse`: cambia o elimina el versículo del pie de página.

Todo el contenido (nombres, fecha, textos) está centralizado en `lib/event.ts`.

## Secciones
Portada · Cuenta regresiva · Detalles · Ubicación/Mapa · Código de vestimenta · Aviso solo adultos · Añadir al calendario (Google / .ics) · RSVP por WhatsApp · Pie con versículo.
