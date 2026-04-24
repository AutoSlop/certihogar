import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "CertiHogar — Capacitacion y Certificacion de Personal del Hogar",
  description:
    "Capacita y certifica a tu personal del hogar con respaldo practico y verificable. Formacion, evaluacion real y bolsa laboral de egresadas certificadas en CDMX.",
  keywords: [
    "certificacion personal del hogar",
    "capacitacion empleadas del hogar",
    "bolsa laboral domestica",
    "CDMX",
    "CertiHogar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
