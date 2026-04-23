import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="es" className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
