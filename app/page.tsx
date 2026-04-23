"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/0000000000?text=Hola%2C%20quiero%20información%20sobre%20CertiHogar";

/* ─── Icons (inline SVG helpers) ─── */

function CheckCircle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ShieldIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function StarIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function UsersIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

/* ─── Sections ─── */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#FBF6F0]/80 backdrop-blur-2xl border-b border-[#D9CCBC]/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[68px]">
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C4522A] to-[#D97B5A] flex items-center justify-center shadow-sm shadow-[#C4522A]/15">
            <ShieldIcon className="w-[18px] h-[18px] text-white" />
          </span>
          <span className="font-display text-[1.7rem] font-semibold text-deep tracking-tight">
            CertiHogar
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 text-[13px] font-medium tracking-wide text-foreground/45">
          <a href="#beneficios" className="hover:text-terracotta transition-colors duration-300">
            Beneficios
          </a>
          <a href="#como-funciona" className="hover:text-terracotta transition-colors duration-300">
            Proceso
          </a>
          <a href="#certificacion" className="hover:text-terracotta transition-colors duration-300">
            Certificacion
          </a>
          <a href="#precios" className="hover:text-terracotta transition-colors duration-300">
            Precios
          </a>
          <a href="#faq" className="hover:text-terracotta transition-colors duration-300">
            FAQ
          </a>
          <a
            href="#contacto"
            className="ml-1 bg-gradient-to-r from-deep to-[#3A241A] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold hover:shadow-lg hover:shadow-deep/15 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contacto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-sand/60 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#D9CCBC]/30 bg-[#FBF6F0]/98 backdrop-blur-2xl px-5 pb-5 pt-3 space-y-0.5 animate-fade-in">
          {[
            { href: "#beneficios", label: "Beneficios" },
            { href: "#como-funciona", label: "Como funciona" },
            { href: "#certificacion", label: "Certificacion" },
            { href: "#precios", label: "Precios" },
            { href: "#testimonios", label: "Testimonios" },
            { href: "#cobertura", label: "Cobertura" },
            { href: "#faq", label: "FAQ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 px-4 text-foreground/60 font-medium rounded-xl hover:bg-sand/50 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="block bg-deep text-white text-center py-3 rounded-full font-semibold mt-3 shadow-sm"
            onClick={() => setOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Layered sunset gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0D9C4] via-[#F7DBC4] to-[#FBF6F0]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8A88C]/30 via-transparent to-[#C4A060]/10" />
      <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-bl from-[#D4725B]/12 via-transparent to-[#3D6E6F]/6" />

      {/* Warm orbs */}
      <div className="absolute top-12 right-[6%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#F2C3A4]/30 to-[#DF8E6E]/12 blur-[90px] animate-float" />
      <div className="absolute bottom-20 left-[2%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#3D6E6F]/6 to-[#C4A060]/10 blur-[80px] animate-float-delayed" />
      <div className="absolute top-[35%] right-[22%] w-56 h-56 rounded-full bg-[#E6B87D]/15 blur-[70px] animate-pulse-soft" />
      <div className="absolute bottom-[25%] right-[10%] w-32 h-32 rounded-full bg-[#C98B7B]/20 blur-[50px]" />

      {/* Decorative lines */}
      <div className="absolute top-24 right-[16%] w-px h-48 bg-gradient-to-b from-[#C4522A]/12 to-transparent hidden lg:block" />
      <div className="absolute top-32 right-[15%] w-px h-28 bg-gradient-to-b from-[#C4A060]/15 to-transparent hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-32">
        <div className="max-w-[700px] animate-fade-in-up">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/55 backdrop-blur-md rounded-full px-5 py-2 mb-10 border border-white/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse-soft" />
            <span className="text-[13px] font-semibold text-teal tracking-wide">
              Capacitacion certificada en CDMX
            </span>
            <span className="w-px h-3.5 bg-teal/20" />
            <span className="text-[12px] text-teal/60 font-medium">Verificable</span>
          </div>

          <h1 className="font-display text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.6rem] font-semibold leading-[1.05] text-deep tracking-tight">
            Capacita y certifica a tu{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-terracotta italic">personal del hogar</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-gradient-to-r from-[#E6B87D]/30 to-[#F2C3A4]/25 -z-0 rounded-sm" />
            </span>{" "}
            con respaldo practico
          </h1>

          <p className="mt-8 text-[16px] md:text-[17px] text-deep/50 max-w-[560px] leading-[1.75]">
            En CertiHogar ayudamos a familias y empleadores de Ciudad de Mexico a
            profesionalizar a su personal del hogar con formacion practica, evaluacion real
            y acceso a una bolsa laboral de egresadas certificadas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-3.5">
            <a
              href="#contacto"
              className="w-full sm:w-auto group bg-gradient-to-r from-deep to-[#3A241A] hover:from-[#3A241A] hover:to-deep text-white font-semibold px-9 py-4 rounded-full text-[15px] transition-all duration-400 shadow-lg shadow-deep/12 hover:shadow-xl hover:shadow-deep/18 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              Solicitar informacion
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/55 hover:bg-white/75 backdrop-blur-md text-deep font-medium px-8 py-4 rounded-full text-[15px] transition-all duration-300 border border-white/40 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] text-green-600" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Trust metrics */}
          <div className="mt-16 flex flex-wrap items-center gap-6 sm:gap-10 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal/8 flex items-center justify-center">
                <ShieldIcon className="w-[16px] h-[16px] text-teal/70" />
              </div>
              <span className="text-[12px] font-semibold text-deep/35 tracking-wide uppercase">Certificacion verificable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                <StarIcon className="w-[16px] h-[16px] text-gold/80" />
              </div>
              <span className="text-[12px] font-semibold text-deep/35 tracking-wide uppercase">Evaluacion practica</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-coral/8 flex items-center justify-center">
                <UsersIcon className="w-[16px] h-[16px] text-coral/70" />
              </div>
              <span className="text-[12px] font-semibold text-deep/35 tracking-wide uppercase">Bolsa laboral</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropuestaValor() {
  const cards = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" />
        </svg>
      ),
      title: "Capacitacion practica",
      desc: "Formacion integral que cubre limpieza, organizacion, cocina basica y protocolos de seguridad en el hogar.",
      accent: "text-terracotta",
      bg: "bg-gradient-to-br from-terracotta/8 to-terracotta/4",
      border: "border-terracotta/10",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: "Evaluacion con checklist",
      desc: "Evaluacion en escenarios reales con checklist detallado. No solo teoria: competencia demostrable.",
      accent: "text-gold",
      bg: "bg-gradient-to-br from-gold/10 to-gold/4",
      border: "border-gold/10",
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Certificado digital verificable",
      desc: "Codigo QR unico que cualquier empleador puede escanear para verificar autenticidad al instante.",
      accent: "text-teal",
      bg: "bg-gradient-to-br from-teal/8 to-teal/3",
      border: "border-teal/10",
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Bolsa laboral basica",
      desc: "Conectamos familias y empleadores con personal certificado a traves de nuestra plataforma activa.",
      accent: "text-coral",
      bg: "bg-gradient-to-br from-coral/8 to-coral/3",
      border: "border-coral/10",
    },
  ];

  return (
    <section id="beneficios" className="py-28 sm:py-32 bg-warm-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-b from-peach/6 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-teal/65 mb-5">
            Propuesta de valor
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.08] tracking-tight">
            Por que elegir CertiHogar
          </h2>
          <p className="mt-5 text-foreground/40 text-[15px] leading-relaxed max-w-lg mx-auto">
            Un proceso integral de capacitacion, evaluacion practica y certificacion
            que eleva el estandar del trabajo del hogar.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`group bg-white rounded-2xl p-6 sm:p-7 border ${c.border} hover:border-sand-dark/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5`}
            >
              <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <span className={c.accent}>{c.icon}</span>
              </div>
              <h3 className="text-[16px] font-bold text-deep mb-2.5 tracking-tight leading-snug">
                {c.title}
              </h3>
              <p className="text-[13.5px] text-foreground/42 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeneficiosFamilias() {
  const benefits = [
    {
      icon: <ShieldIcon className="w-5 h-5" />,
      title: "Contrata con mas confianza",
      desc: "Verifica las competencias de tu personal con certificados digitales autenticos y escaneables.",
    },
    {
      icon: <StarIcon className="w-5 h-5" />,
      title: "Profesionaliza a tu personal actual",
      desc: "Tu empleada o empleado del hogar adquiere nuevas habilidades y mejora su desempeno con formacion estructurada.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Reduce riesgos en tu hogar",
      desc: "Personal capacitado en protocolos de seguridad, manejo de productos y cuidado del espacio domestico.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Mejora los estandares del hogar",
      desc: "Un hogar mas organizado, limpio y seguro con personal que sigue estandares profesionales claros.",
    },
  ];

  return (
    <section className="py-28 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-[#FBF6F0] to-sand/30" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-gradient-to-tl from-peach/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-terracotta/65 mb-5">
              Para familias y empleadores
            </p>
            <h2 className="font-display text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-semibold text-deep leading-[1.08] tracking-tight">
              Beneficios que transforman tu hogar
            </h2>
            <p className="mt-5 text-foreground/40 text-[15px] leading-relaxed max-w-md">
              CertiHogar te da las herramientas para contratar y gestionar personal del hogar
              con mayor confianza, profesionalismo y tranquilidad.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-8 text-terracotta font-semibold text-[14px] hover:gap-3 transition-all duration-300 group"
            >
              Conoce mas
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right side - benefit cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`group bg-white rounded-2xl p-6 border border-sand-dark/20 hover:border-sand-dark/40 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                  i === 0 ? "sm:translate-y-0" : i === 1 ? "sm:translate-y-4" : i === 2 ? "sm:translate-y-0" : "sm:translate-y-4"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-terracotta/8 to-coral/6 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-terracotta">{b.icon}</span>
                </div>
                <h3 className="text-[15px] font-bold text-deep mb-2 tracking-tight">{b.title}</h3>
                <p className="text-[13px] text-foreground/40 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      num: "01",
      title: "Solicitas informacion",
      desc: "Llena el formulario o escribenos por WhatsApp. Te explicamos todo el proceso y resolvemos tus dudas.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Inscripcion a capacitacion",
      desc: "Selecciona el paquete adecuado e inscribe a tu personal. Sesiones teoricas y practicas flexibles.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Evaluacion y certificacion",
      desc: "Evaluacion practica con checklist detallado en escenarios reales. Certificado digital con QR verificable.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Acceso a bolsa laboral",
      desc: "Perfil profesional de egresada y acceso a nuestra bolsa laboral para conectar con familias que buscan personal.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="py-28 sm:py-32 bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-peach/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-teal/4 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-terracotta/65 mb-5">
            Proceso simple
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.08] tracking-tight">
            Como funciona
          </h2>
          <p className="mt-5 text-foreground/40 text-[15px]">
            Un proceso transparente en 4 pasos para profesionalizar a tu personal.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative group">
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-sand-dark/35 to-sand-dark/15" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sand-dark/35" />
                </div>
              )}

              <div className="bg-white rounded-2xl p-7 text-center border border-sand-dark/20 hover:border-terracotta/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5">
                {/* Step circle */}
                <div className="relative mx-auto w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C4522A]/6 to-[#D97B5A]/6 group-hover:from-[#C4522A]/12 group-hover:to-[#D97B5A]/12 transition-colors duration-500" />
                  <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-[#C4522A] to-[#D97B5A] flex items-center justify-center shadow-md shadow-terracotta/15">
                    <span className="text-white">{s.icon}</span>
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-cream border-2 border-white flex items-center justify-center text-[11px] font-bold text-terracotta/80 shadow-sm">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold text-deep mb-2.5 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-foreground/40 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-terracotta font-semibold text-[14px] hover:gap-3 transition-all duration-300 group"
          >
            Comienza tu proceso hoy
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Certificacion() {
  const features = [
    {
      title: "Curso base de trabajo del hogar",
      desc: "Formacion integral que cubre limpieza, organizacion, cocina basica, manejo de productos y protocolos de seguridad.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" />
        </svg>
      ),
    },
    {
      title: "Evaluacion practica con checklist",
      desc: "Evaluacion en escenarios reales con un checklist detallado para garantizar competencia demostrable.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: "Certificado digital verificable",
      desc: "Certificado digital con codigo QR unico que cualquier empleador puede escanear para verificar autenticidad.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      highlight: true,
    },
    {
      title: "Perfil laboral de egresada",
      desc: "Cada egresada certificada obtiene un perfil profesional con sus competencias y certificacion visible.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: "Bolsa laboral basica",
      desc: "Conectamos a familias y empleadores con egresadas certificadas a traves de nuestra plataforma.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="certificacion" className="py-28 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-[#FBF6F0] to-sand/40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[250px] rounded-full bg-gradient-to-tr from-teal/4 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold/75 mb-5">
            Programa completo
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.08] tracking-tight">
            Capacitacion y certificacion
          </h2>
          <p className="mt-5 text-foreground/40 text-[15px] leading-relaxed max-w-lg mx-auto">
            Nuestro programa incluye todo lo necesario para profesionalizar al
            personal del hogar con respaldo verificable.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                f.highlight
                  ? "bg-gradient-to-br from-[#3D6E6F] to-[#2D5556] text-white shadow-xl shadow-teal/10 sm:col-span-2 lg:col-span-1 ring-1 ring-teal/10"
                  : "bg-white border border-sand-dark/20 hover:border-sand-dark/40 shadow-sm hover:shadow-xl"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 ${
                f.highlight
                  ? "bg-white/10"
                  : "bg-gradient-to-br from-sand/70 to-sand/40"
              }`}>
                <span className={f.highlight ? "text-white" : "text-terracotta"}>
                  {f.icon}
                </span>
              </div>
              <h3 className={`text-[15px] font-bold mb-2 tracking-tight ${f.highlight ? "text-white" : "text-deep"}`}>
                {f.title}
              </h3>
              <p className={`text-[13.5px] leading-relaxed ${f.highlight ? "text-white/65" : "text-foreground/40"}`}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonios() {
  const testimonials = [
    {
      name: "Maria G.",
      role: "Empleadora en Polanco",
      text: "Desde que mi empleada completo la certificacion de CertiHogar, la organizacion y limpieza en casa mejoraron notablemente. El certificado me da confianza total.",
      initials: "MG",
      accent: "from-terracotta/15 to-coral/10",
    },
    {
      name: "Lupita R.",
      role: "Egresada certificada",
      text: "El curso me dio herramientas que no conocia. Ahora tengo mi certificado y consegui un mejor empleo gracias a la bolsa laboral. Se los recomiendo.",
      initials: "LR",
      accent: "from-teal/12 to-teal-light/8",
    },
    {
      name: "Roberto M.",
      role: "Pequena agencia de servicios",
      text: "Certificar a nuestro equipo nos diferencio de la competencia. Los clientes valoran mucho que presentemos personal con certificacion verificable.",
      initials: "RM",
      accent: "from-gold/15 to-amber/10",
    },
  ];

  return (
    <section id="testimonios" className="py-28 sm:py-32 bg-warm-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-gradient-to-b from-peach/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-coral/65 mb-5">
            Testimonios
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.08] tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-foreground/30 text-[13px]">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-sand-dark/20 shadow-sm">
            <ShieldIcon className="w-3.5 h-3.5 text-teal/60" />
            <span className="font-medium text-foreground/40 text-[12px]">Certificacion verificable</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-sand-dark/20 shadow-sm">
            <StarIcon className="w-3.5 h-3.5 text-gold/70" />
            <span className="font-medium text-foreground/40 text-[12px]">Evaluacion real</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-sand-dark/20 shadow-sm">
            <UsersIcon className="w-3.5 h-3.5 text-coral/60" />
            <span className="font-medium text-foreground/40 text-[12px]">Bolsa laboral activa</span>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-white rounded-2xl p-7 border border-sand-dark/20 hover:border-sand-dark/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[14px] text-foreground/50 leading-[1.75] italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-sand-dark/20 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-deep/50 text-[11px] font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-deep text-[13px]">{t.name}</p>
                  <p className="text-[11px] text-foreground/35">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Precios() {
  const plans = [
    {
      name: "Individual",
      price: "$1,490",
      unit: "MXN",
      desc: "1 persona",
      features: [
        "Curso base completo",
        "Evaluacion practica",
        "Certificado digital",
        "Perfil laboral",
      ],
      popular: false,
    },
    {
      name: "Duo",
      price: "$2,690",
      unit: "MXN",
      desc: "2 personas",
      features: [
        "Curso base completo",
        "Evaluacion practica",
        "Certificado digital",
        "Perfil laboral",
        "Ahorro de $290",
      ],
      popular: true,
    },
    {
      name: "Equipo",
      price: "$3,790",
      unit: "MXN",
      desc: "3 personas",
      features: [
        "Curso base completo",
        "Evaluacion practica",
        "Certificado digital",
        "Perfil laboral",
        "Ahorro de $680",
      ],
      popular: false,
    },
    {
      name: "Agencia",
      price: "Desde $6,900",
      unit: "MXN",
      desc: "5 personas",
      features: [
        "Curso base completo",
        "Evaluacion practica",
        "Certificados digitales",
        "Perfiles laborales",
        "Precio preferencial",
      ],
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-28 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-[#FBF6F0] to-[#F2C3A4]/8" />
      <div className="absolute top-0 right-0 w-[500px] h-[350px] rounded-full bg-gradient-to-bl from-coral/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-terracotta/65 mb-5">
            Inversion
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.08] tracking-tight">
            Paquetes y precios
          </h2>
          <p className="mt-5 text-foreground/40 text-[15px]">
            Planes disenados para familias, empleadores particulares y pequenas agencias.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-1.5 ${
                p.popular
                  ? "bg-gradient-to-b from-deep to-[#2A1810] text-white shadow-2xl shadow-deep/25 ring-1 ring-white/5 scale-[1.02] z-10"
                  : "bg-white border border-sand-dark/20 hover:border-sand-dark/40 shadow-sm hover:shadow-xl"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E6B87D] to-[#D9A44E] text-deep text-[11px] font-bold px-5 py-1.5 rounded-full shadow-lg shadow-gold/20">
                  Mas popular
                </span>
              )}
              <div className="mb-4">
                <h3 className={`text-[15px] font-bold ${p.popular ? "text-white" : "text-deep"}`}>
                  {p.name}
                </h3>
                <p className={`text-[13px] mt-0.5 ${p.popular ? "text-white/40" : "text-foreground/30"}`}>{p.desc}</p>
              </div>
              <div className="mb-5 pb-5 border-b border-dashed" style={{ borderColor: p.popular ? "rgba(255,255,255,0.10)" : "rgba(217,204,188,0.4)" }}>
                <span className={`text-[2rem] font-bold tracking-tight ${p.popular ? "text-white" : "text-deep"}`}>
                  {p.price}
                </span>
                <span className={`text-[13px] ml-1.5 ${p.popular ? "text-white/35" : "text-foreground/25"}`}>{p.unit}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px]">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.popular ? "text-white/45" : "text-teal/55"}`} />
                    <span className={p.popular ? "text-white/65" : "text-foreground/45"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-7 block text-center py-3 rounded-full font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 ${
                  p.popular
                    ? "bg-white text-deep hover:bg-white/90 shadow-lg"
                    : "bg-gradient-to-r from-sand/70 to-sand/50 text-deep hover:from-sand hover:to-sand/70"
                }`}
              >
                Solicitar informacion
              </a>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white rounded-2xl px-7 py-5 border border-sand-dark/20 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/25">Recertificacion</span>
            <p className="text-xl font-bold text-deep mt-1.5">$590 <span className="text-[13px] font-normal text-foreground/25">MXN</span></p>
          </div>
          <div className="bg-white rounded-2xl px-7 py-5 border border-sand-dark/20 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/25">
              Acceso a bolsa laboral (sin paquete)
            </span>
            <p className="text-xl font-bold text-deep mt-1.5">
              $390 <span className="text-[13px] font-normal text-foreground/25">MXN — cuota unica</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cobertura() {
  const zonas = [
    "Polanco", "Condesa", "Roma", "Del Valle", "Coyoacan",
    "Santa Fe", "Lomas de Chapultepec", "Pedregal", "Interlomas",
    "Narvarte", "San Angel", "Tlalpan",
  ];

  return (
    <section id="cobertura" className="py-28 sm:py-32 bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full bg-gradient-to-br from-teal/4 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-teal/65 mb-5">
              Cobertura
            </p>
            <h2 className="font-display text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-semibold text-deep leading-[1.08] tracking-tight">
              Servicio en toda la Ciudad de Mexico
            </h2>
            <p className="mt-5 text-foreground/40 text-[15px] leading-relaxed max-w-md">
              Atendemos la Zona Metropolitana de la Ciudad de Mexico. Nuestras capacitaciones
              se adaptan a los horarios de tu personal para no interferir con su trabajo.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal/8 flex items-center justify-center">
                <MapPinIcon className="w-5 h-5 text-teal" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-deep">CDMX y Zona Metropolitana</p>
                <p className="text-[12px] text-foreground/35">Horarios flexibles disponibles</p>
              </div>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-deep to-[#3A241A] text-white font-semibold px-7 py-3.5 rounded-full text-[14px] transition-all duration-300 shadow-lg shadow-deep/10 hover:shadow-xl hover:-translate-y-0.5"
            >
              Consulta disponibilidad
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-sand-dark/20 shadow-sm">
            <p className="text-[12px] font-bold uppercase tracking-wider text-foreground/30 mb-5">
              Algunas zonas que atendemos
            </p>
            <div className="flex flex-wrap gap-2.5">
              {zonas.map((z) => (
                <span
                  key={z}
                  className="bg-gradient-to-r from-sand/60 to-sand/40 text-deep/70 text-[13px] font-medium px-4 py-2 rounded-full border border-sand-dark/15 hover:border-terracotta/20 hover:text-terracotta transition-colors duration-300"
                >
                  {z}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[12px] text-foreground/30 italic">
              Y mas colonias en CDMX y area metropolitana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Quien puede inscribirse a la capacitacion?",
      a: "Cualquier persona que trabaje o desee trabajar en el ambito del hogar. Familias y empleadores pueden inscribir a su personal directamente.",
    },
    {
      q: "Cuanto dura el curso base?",
      a: "El curso base tiene una duracion aproximada de 2 semanas, con sesiones teoricas y practicas disenadas para no interferir con el horario laboral.",
    },
    {
      q: "Como se verifica el certificado?",
      a: "Cada certificado digital incluye un codigo QR unico que cualquier empleador puede escanear para verificar la autenticidad y las competencias certificadas.",
    },
    {
      q: "La bolsa laboral tiene costo?",
      a: "Para egresadas certificadas a traves de nuestros paquetes, el acceso a la bolsa laboral esta incluido. Para familias que solo desean acceder a la bolsa, la cuota unica es de $390 MXN.",
    },
    {
      q: "Ofrecen capacitacion en toda la CDMX?",
      a: "Si, atendemos toda la Zona Metropolitana de la Ciudad de Mexico. Contactanos para conocer los horarios y sedes disponibles.",
    },
    {
      q: "Que incluye la recertificacion?",
      a: "La recertificacion por $590 MXN incluye una evaluacion practica actualizada y la emision de un nuevo certificado digital con vigencia renovada.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-[#FBF6F0] to-cream/40" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-teal/65 mb-5">
            Resolvemos tus dudas
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.08] tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIdx === i
                  ? "border-terracotta/20 shadow-lg"
                  : "border-sand-dark/20 shadow-sm hover:shadow-md hover:border-sand-dark/35"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[15px] font-semibold text-deep hover:text-terracotta transition-colors duration-200"
              >
                <span className="pr-4">{f.q}</span>
                <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                  openIdx === i ? "bg-terracotta text-white rotate-180" : "bg-sand/60 text-deep/25"
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-[14px] text-foreground/42 leading-relaxed animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    correo: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ nombre: "", whatsapp: "", correo: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-28 sm:py-32 bg-warm-white relative">
      <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-gradient-to-bl from-peach/6 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-terracotta/65 mb-5">
              Contactanos
            </p>
            <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.08] tracking-tight">
              Solicita informacion
            </h2>
            <p className="mt-5 text-foreground/40 text-[15px]">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-[12px] font-bold text-deep/60 mb-1.5 uppercase tracking-wide">
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-sand-dark/30 bg-white focus:ring-2 focus:ring-terracotta/12 focus:border-terracotta/30 outline-none transition-all duration-200 text-[15px] placeholder:text-foreground/20"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsapp" className="block text-[12px] font-bold text-deep/60 mb-1.5 uppercase tracking-wide">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-sand-dark/30 bg-white focus:ring-2 focus:ring-terracotta/12 focus:border-terracotta/30 outline-none transition-all duration-200 text-[15px] placeholder:text-foreground/20"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="correo" className="block text-[12px] font-bold text-deep/60 mb-1.5 uppercase tracking-wide">
                  Correo electronico
                </label>
                <input
                  id="correo"
                  type="email"
                  required
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-sand-dark/30 bg-white focus:ring-2 focus:ring-terracotta/12 focus:border-terracotta/30 outline-none transition-all duration-200 text-[15px] placeholder:text-foreground/20"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-[12px] font-bold text-deep/60 mb-1.5 uppercase tracking-wide">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-sand-dark/30 bg-white focus:ring-2 focus:ring-terracotta/12 focus:border-terracotta/30 outline-none transition-all duration-200 resize-none text-[15px] placeholder:text-foreground/20"
                placeholder="En que podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-deep to-[#3A241A] hover:from-[#3A241A] hover:to-deep text-white font-semibold py-4 rounded-full text-[15px] transition-all duration-400 shadow-lg shadow-deep/10 hover:shadow-xl hover:shadow-deep/15 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <div className="text-center py-3.5 px-5 rounded-xl bg-teal/6 border border-teal/12 animate-fade-in">
                <p className="text-teal font-semibold text-[14px]">
                  Mensaje enviado! Nos pondremos en contacto pronto.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="text-center py-3.5 px-5 rounded-xl bg-red-50 border border-red-200 animate-fade-in">
                <p className="text-red-600 font-medium text-[14px]">
                  Hubo un error. Intenta de nuevo o escribenos por WhatsApp.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="relative overflow-hidden">
      {/* Deep desert sunset gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E120A] via-[#3A2018] to-[#1E120A]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C4522A]/12 via-transparent to-[#C4A060]/8" />

      {/* Warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] rounded-full bg-[#C4522A]/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-[300px] h-[300px] rounded-full bg-[#C4A060]/4 blur-[80px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-28 sm:py-32 text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6">
          Comienza hoy
        </p>
        <h2 className="font-display text-[2.2rem] md:text-[3rem] lg:text-[3.6rem] font-semibold text-white leading-[1.08] tracking-tight">
          Profesionaliza a tu personal del hogar hoy
        </h2>
        <p className="mt-7 text-[16px] md:text-[17px] text-white/40 max-w-xl mx-auto leading-[1.75]">
          Unete a las familias y empleadores que ya confian en CertiHogar para
          capacitar, certificar y conectar con personal del hogar calificado.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#contacto"
            className="w-full sm:w-auto group bg-white text-deep hover:bg-white/90 font-semibold px-9 py-4 rounded-full text-[15px] transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
          >
            Solicitar informacion
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/6 hover:bg-white/12 text-white/75 font-medium px-8 py-4 rounded-full text-[15px] transition-all duration-300 border border-white/8 hover:border-white/15 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-[18px] h-[18px]" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#140C06] text-white/45 py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C4522A] to-[#D97B5A] flex items-center justify-center shadow-sm">
                <ShieldIcon className="w-4 h-4 text-white" />
              </span>
              <span className="font-display text-lg font-semibold text-white/75">CertiHogar</span>
            </div>
            <p className="text-[13px] leading-relaxed text-white/30">
              Capacitacion y certificacion de personal del hogar en Ciudad de
              Mexico. Formacion practica, verificable y profesional.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white/55 mb-4 text-[11px] uppercase tracking-widest">Navegacion</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#beneficios" className="hover:text-peach transition-colors duration-200">Beneficios</a></li>
              <li><a href="#como-funciona" className="hover:text-peach transition-colors duration-200">Como funciona</a></li>
              <li><a href="#certificacion" className="hover:text-peach transition-colors duration-200">Certificacion</a></li>
              <li><a href="#precios" className="hover:text-peach transition-colors duration-200">Precios</a></li>
              <li><a href="#cobertura" className="hover:text-peach transition-colors duration-200">Cobertura</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white/55 mb-4 text-[11px] uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white/55 mb-4 text-[11px] uppercase tracking-widest">Siguenos</h4>
            <div className="flex gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-[12px] text-white/18">
          <p>
            &copy; {new Date().getFullYear()} CertiHogar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PropuestaValor />
      <BeneficiosFamilias />
      <ComoFunciona />
      <Certificacion />
      <Testimonios />
      <Precios />
      <Cobertura />
      <FAQ />
      <ContactForm />
      <CTAFinal />
      <Footer />
    </>
  );
}
