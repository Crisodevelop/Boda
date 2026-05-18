// Datos centrales de la boda. Edita aquí cualquier dato.
export const wedding = {
  brideAndGroom: {
    groom: "Daniel Cedano",
    bride: "Kenia Montaño",
  },
  // 20 de junio de 2026, 5:00 PM (hora local República Dominicana, UTC-4)
  date: new Date("2026-06-20T17:00:00-04:00"),
  dateLabel: "20 de Junio de 2026",
  timeLabel: "5:00 PM",
  venue: {
    name: "Iglesia Pentecostal Misionera Elohim",
    instagram: "IglesiaPMelohim",
    instagramUrl: "https://www.facebook.com/IglesiaPMelohim/",
    mapsUrl: "https://maps.app.goo.gl/uC1p5se5DETHL5jD9",
  },
  whatsappNumber: "18292604017",
  colors: {
    coral: "#E8806B",
    beige: "#EFE3D3",
  },
  verse: "“Por tanto, lo que Dios juntó, no lo separe el hombre.” — Mateo 19:6",
} as const;

export const whatsappLink = () => {
  const msg = encodeURIComponent(
    `¡Hola! Confirmo mi asistencia a la boda de ${wedding.brideAndGroom.groom} y ${wedding.brideAndGroom.bride} el ${wedding.dateLabel}.`
  );
  return `https://wa.me/${wedding.whatsappNumber}?text=${msg}`;
};

// Formato de fecha para enlaces de calendario: YYYYMMDDTHHMMSSZ (UTC)
const toICSDate = (d: Date) =>
  d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export const googleCalendarUrl = () => {
  const start = toICSDate(wedding.date);
  const end = toICSDate(new Date(wedding.date.getTime() + 3 * 60 * 60 * 1000));
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Boda de ${wedding.brideAndGroom.groom} & ${wedding.brideAndGroom.bride}`,
    dates: `${start}/${end}`,
    details: "Acompáñanos a celebrar nuestra unión. Evento solo para adultos.",
    location: wedding.venue.name,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const buildICS = () => {
  const start = toICSDate(wedding.date);
  const end = toICSDate(new Date(wedding.date.getTime() + 3 * 60 * 60 * 1000));
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Boda Daniel y Kenia//ES",
    "BEGIN:VEVENT",
    `UID:boda-daniel-kenia-2026@invitacion`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:Boda de ${wedding.brideAndGroom.groom} & ${wedding.brideAndGroom.bride}`,
    "DESCRIPTION:Acompáñanos a celebrar nuestra unión. Evento solo para adultos.",
    `LOCATION:${wedding.venue.name}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
};
