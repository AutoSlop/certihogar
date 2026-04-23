import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CertiHogar — Capacitación y Certificación de Personal del Hogar",
  description:
    "Capacita y certifica a tu personal del hogar con respaldo práctico y verificable. Formación, evaluación real y bolsa laboral de egresadas certificadas en CDMX.",
  keywords: [
    "certificación personal del hogar",
    "capacitación empleadas del hogar",
    "bolsa laboral doméstica",
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
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
