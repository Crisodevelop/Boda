import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Daniel & Kenia · Nuestra Boda",
  description:
    "Daniel Cedano y Kenia Montaño te invitan a celebrar su boda el 20 de junio de 2026.",
  openGraph: {
    title: "Daniel & Kenia · Nuestra Boda",
    description:
      "Acompáñanos el 20 de junio de 2026 — Iglesia Pentecostal Misionera Elohim.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${serif.variable} ${script.variable} ${sans.variable} font-sans bg-beige text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
