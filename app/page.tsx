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

/* ─── Sections ─── */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#FDF8F3]/85 backdrop-blur-2xl border-b border-[#D9CCBC]/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[68px]">
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B84A28] to-[#D4725B] flex items-center justify-center shadow-sm">
            <ShieldIcon className="w-4 h-4 text-white" />
          </span>
          <span className="font-display text-[1.65rem] font-semibold text-deep tracking-tight">
            CertiHogar
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-foreground/50">
          <a href="#beneficios" className="hover:text-terracotta transition-colors duration-300">
            Beneficios
          </a>
          <a href="#como-funciona" className="hover:text-terracotta transition-colors duration-300">
            Proceso
          </a>
          <a href="#certificacion" className="hover:text-terracotta transition-colors duration-300">
            Certificación
          </a>
          <a href="#precios" className="hover:text-terracotta transition-colors duration-300">
            Precios
          </a>
          <a href="#faq" className="hover:text-terracotta transition-colors duration-300">
            FAQ
          </a>
          <a
            href="#contacto"
            className="ml-1 bg-deep text-white px-6 py-2 rounded-full text-[13px] font-semibold hover:bg-[#3A241A] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Contacto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-sand/60 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
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
        <div className="md:hidden border-t border-[#D9CCBC]/40 bg-[#FDF8F3]/98 backdrop-blur-2xl px-5 pb-5 pt-3 space-y-0.5 animate-fade-in">
          {[
            { href: "#beneficios", label: "Beneficios" },
            { href: "#como-funciona", label: "Cómo funciona" },
            { href: "#certificacion", label: "Certificación" },
            { href: "#precios", label: "Precios" },
            { href: "#testimonios", label: "Testimonios" },
            { href: "#faq", label: "FAQ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 px-4 text-foreground/65 font-medium rounded-xl hover:bg-sand/50 transition"
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5DCC8] via-[#FADBC7] to-[#FDF8F3]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8A88C]/40 via-transparent to-[#C4A060]/15" />
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-bl from-[#D4725B]/15 via-transparent to-[#3D6E6F]/8" />

      {/* Soft orbs */}
      <div className="absolute top-16 right-[8%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#F2C3A4]/35 to-[#DF8E6E]/15 blur-[80px] animate-float" />
      <div className="absolute bottom-24 left-[3%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#3D6E6F]/8 to-[#C4A060]/12 blur-[80px] animate-float-delayed" />
      <div className="absolute top-[40%] right-[25%] w-52 h-52 rounded-full bg-[#E6B87D]/20 blur-[60px] animate-pulse-soft" />

      {/* Thin decorative lines */}
      <div className="absolute top-28 right-[18%] w-px h-40 bg-gradient-to-b from-[#B84A28]/15 to-transparent hidden lg:block" />
      <div className="absolute top-36 right-[17%] w-px h-24 bg-gradient-to-b from-[#C4A060]/20 to-transparent hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-36">
        <div className="max-w-[680px] animate-fade-in-up">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-10 border border-white/50 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-soft" />
            <span className="text-[13px] font-medium text-teal tracking-wide">
              Capacitación certificada en CDMX
            </span>
          </div>

          <h1 className="font-display text-[2.8rem] sm:text-[3.4rem] md:text-[4rem] lg:text-[4.8rem] font-semibold leading-[1.05] text-deep tracking-tight">
            Capacita y certifica a tu{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-terracotta italic">personal del hogar</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#E6B87D]/25 -z-0 rounded-sm" />
            </span>{" "}
            con respaldo práctico
          </h1>

          <p className="mt-8 text-[17px] md:text-lg text-deep/55 max-w-[560px] leading-[1.7]">
            En CertiHogar ayudamos a familias y empleadores de Ciudad de México a
            profesionalizar a su personal del hogar con formación práctica, evaluación real
            y acceso a una bolsa laboral de egresadas certificadas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-3.5">
            <a
              href="#contacto"
              className="w-full sm:w-auto group bg-deep hover:bg-[#3A241A] text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 shadow-lg shadow-deep/10 hover:shadow-xl hover:shadow-deep/15 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Solicitar información
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/60 hover:bg-white/80 backdrop-blur-sm text-deep font-medium px-8 py-4 rounded-full text-[15px] transition-all duration-300 border border-white/50 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] text-green-600" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Trust metrics */}
          <div className="mt-20 flex items-center gap-8 sm:gap-12 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2.5">
              <ShieldIcon className="w-[18px] h-[18px] text-teal/60" />
              <span className="text-[13px] font-medium text-deep/35 tracking-wide">Certificación verificable</span>
            </div>
            <div className="flex items-center gap-2.5">
              <StarIcon className="w-[18px] h-[18px] text-gold/70" />
              <span className="text-[13px] font-medium text-deep/35 tracking-wide">Evaluación práctica</span>
            </div>
            <div className="hidden sm:flex items-center gap-2.5">
              <UsersIcon className="w-[18px] h-[18px] text-coral/60" />
              <span className="text-[13px] font-medium text-deep/35 tracking-wide">Bolsa laboral</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const cards = [
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Confianza comprobada",
      desc: "Personal capacitado con estándares claros y verificables. Tu hogar en manos profesionales.",
      accent: "text-teal",
      bg: "bg-teal/6",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: "Evaluación práctica real",
      desc: "Checklist detallado en escenarios reales. No solo teoría — competencia demostrable.",
      accent: "text-terracotta",
      bg: "bg-terracotta/6",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "Certificado digital verificable",
      desc: "Código QR único que cualquier empleador puede escanear para verificar autenticidad.",
      accent: "text-gold",
      bg: "bg-gold/8",
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Bolsa laboral de egresadas",
      desc: "Conectamos familias y empleadores con personal certificado a través de nuestra plataforma.",
      accent: "text-coral",
      bg: "bg-coral/6",
    },
  ];

  return (
    <section id="beneficios" className="py-32 bg-warm-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-b from-peach/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal/70 mb-4">
            Propuesta de valor
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.1] tracking-tight">
            ¿Por qué elegir CertiHogar?
          </h2>
          <p className="mt-5 text-foreground/45 text-[16px] leading-relaxed max-w-lg mx-auto">
            Un proceso integral de capacitación, evaluación práctica y certificación
            que eleva el estándar del trabajo del hogar.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group bg-white rounded-2xl p-7 border border-sand-dark/30 hover:border-sand-dark/50 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500`}>
                <span className={c.accent}>{c.icon}</span>
              </div>
              <h3 className="text-[17px] font-bold text-deep mb-2.5 tracking-tight">
                {c.title}
              </h3>
              <p className="text-[14px] text-foreground/45 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      num: "01",
      title: "Solicita e inscribe",
      desc: "Llena el formulario o escríbenos por WhatsApp. Selecciona el paquete adecuado e inscribe a tu personal.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Capacitación y evaluación",
      desc: "Tu personal completa el curso base y realiza una evaluación práctica con checklist para recibir su certificado.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Certificación y bolsa laboral",
      desc: "Certificado digital con QR verificable, perfil profesional y acceso a nuestra bolsa laboral de egresadas.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-[#FDF8F3] to-sand/50" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-peach/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-terracotta/70 mb-4">
            Proceso simple
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.1] tracking-tight">
            ¿Cómo funciona?
          </h2>
          <p className="mt-5 text-foreground/45 text-[16px]">
            Un proceso transparente en 3 pasos.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative group">
              {/* Connector */}
              {i < 2 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-sand-dark/40 to-sand-dark/20" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sand-dark/40" />
                </div>
              )}

              <div className="bg-white rounded-2xl p-8 text-center border border-sand-dark/25 hover:border-sand-dark/45 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                {/* Step circle */}
                <div className="relative mx-auto w-16 h-16 mb-7">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B84A28]/8 to-[#D4725B]/8 group-hover:from-[#B84A28]/15 group-hover:to-[#D4725B]/15 transition-colors duration-500" />
                  <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-[#B84A28] to-[#D4725B] flex items-center justify-center shadow-md shadow-terracotta/10">
                    <span className="text-white">{s.icon}</span>
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-cream border border-sand-dark/30 flex items-center justify-center text-[11px] font-bold text-terracotta/70">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-deep mb-2.5 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[14px] text-foreground/45 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificacion() {
  const features = [
    {
      title: "Curso base de trabajo del hogar",
      desc: "Formación integral que cubre limpieza, organización, cocina básica, manejo de productos y protocolos de seguridad.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" />
        </svg>
      ),
    },
    {
      title: "Evaluación práctica con checklist",
      desc: "Evaluación en escenarios reales con un checklist detallado para garantizar competencia demostrable.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: "Certificado digital verificable",
      desc: "Certificado digital con código QR único que cualquier empleador puede escanear para verificar autenticidad.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      highlight: true,
    },
    {
      title: "Perfil laboral de egresada",
      desc: "Cada egresada certificada obtiene un perfil profesional con sus competencias y certificación visible.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: "Bolsa laboral básica",
      desc: "Conectamos a familias y empleadores con egresadas certificadas a través de nuestra plataforma.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="certificacion" className="py-32 bg-warm-white relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[250px] rounded-full bg-gradient-to-tr from-teal/4 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold/80 mb-4">
            Programa completo
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.1] tracking-tight">
            Capacitación y certificación
          </h2>
          <p className="mt-5 text-foreground/45 text-[16px] leading-relaxed max-w-lg mx-auto">
            Nuestro programa incluye todo lo necesario para profesionalizar al
            personal del hogar.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 ${
                f.highlight
                  ? "bg-gradient-to-br from-[#3D6E6F] to-[#2D5556] text-white shadow-lg shadow-teal/10 sm:col-span-2 lg:col-span-1 ring-1 ring-teal/15"
                  : "bg-white border border-sand-dark/25 hover:border-sand-dark/45 shadow-sm hover:shadow-lg"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-105 ${
                f.highlight
                  ? "bg-white/12"
                  : "bg-sand/60"
              }`}>
                <span className={f.highlight ? "text-white" : "text-terracotta"}>
                  {f.icon}
                </span>
              </div>
              <h3 className={`text-[16px] font-bold mb-2 tracking-tight ${f.highlight ? "text-white" : "text-deep"}`}>
                {f.title}
              </h3>
              <p className={`text-[14px] leading-relaxed ${f.highlight ? "text-white/70" : "text-foreground/45"}`}>
                {f.desc}
              </p>
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
        "Evaluación práctica",
        "Certificado digital",
        "Perfil laboral",
      ],
      popular: false,
    },
    {
      name: "Dúo",
      price: "$2,690",
      unit: "MXN",
      desc: "2 personas",
      features: [
        "Curso base completo",
        "Evaluación práctica",
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
        "Evaluación práctica",
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
        "Evaluación práctica",
        "Certificados digitales",
        "Perfiles laborales",
        "Precio preferencial",
      ],
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-[#FDF8F3] to-[#F2C3A4]/10" />
      <div className="absolute top-0 right-0 w-[500px] h-[350px] rounded-full bg-gradient-to-bl from-coral/6 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-terracotta/70 mb-4">
            Inversión
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.1] tracking-tight">
            Paquetes y precios
          </h2>
          <p className="mt-5 text-foreground/45 text-[16px]">
            Planes diseñados para familias, empleadores particulares y pequeñas agencias.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                p.popular
                  ? "bg-deep text-white shadow-2xl shadow-deep/20 ring-1 ring-white/5 scale-[1.02] z-10"
                  : "bg-white border border-sand-dark/25 hover:border-sand-dark/45 shadow-sm hover:shadow-lg"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E6B87D] to-[#C4A060] text-deep text-[11px] font-bold px-4 py-1 rounded-full shadow-md">
                  Más popular
                </span>
              )}
              <div className="mb-4">
                <h3 className={`text-[15px] font-bold ${p.popular ? "text-white" : "text-deep"}`}>
                  {p.name}
                </h3>
                <p className={`text-[13px] mt-0.5 ${p.popular ? "text-white/45" : "text-foreground/35"}`}>{p.desc}</p>
              </div>
              <div className="mb-5 pb-5 border-b border-dashed" style={{ borderColor: p.popular ? "rgba(255,255,255,0.12)" : "rgba(217,204,188,0.5)" }}>
                <span className={`text-[2rem] font-bold tracking-tight ${p.popular ? "text-white" : "text-deep"}`}>
                  {p.price}
                </span>
                <span className={`text-[13px] ml-1 ${p.popular ? "text-white/40" : "text-foreground/30"}`}>{p.unit}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px]">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.popular ? "text-white/50" : "text-teal/60"}`} />
                    <span className={p.popular ? "text-white/70" : "text-foreground/50"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-7 block text-center py-3 rounded-full font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 ${
                  p.popular
                    ? "bg-white text-deep hover:bg-white/90 shadow-md"
                    : "bg-sand/60 text-deep hover:bg-sand transition-colors"
                }`}
              >
                Solicitar información
              </a>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white rounded-xl px-7 py-5 border border-sand-dark/25 shadow-sm text-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/30">Recertificación</span>
            <p className="text-xl font-bold text-deep mt-1.5">$590 <span className="text-[13px] font-normal text-foreground/30">MXN</span></p>
          </div>
          <div className="bg-white rounded-xl px-7 py-5 border border-sand-dark/25 shadow-sm text-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/30">
              Acceso a bolsa laboral (sin paquete)
            </span>
            <p className="text-xl font-bold text-deep mt-1.5">
              $390 <span className="text-[13px] font-normal text-foreground/30">MXN — cuota única</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonios() {
  const testimonials = [
    {
      name: "María G.",
      role: "Empleadora en Polanco",
      text: "Desde que mi empleada completó la certificación de CertiHogar, la organización y limpieza en casa mejoraron notablemente. El certificado me da confianza total.",
      initials: "MG",
    },
    {
      name: "Lupita R.",
      role: "Egresada certificada",
      text: "El curso me dio herramientas que no conocía. Ahora tengo mi certificado y conseguí un mejor empleo gracias a la bolsa laboral. ¡Se los recomiendo!",
      initials: "LR",
    },
    {
      name: "Roberto M.",
      role: "Pequeña agencia de servicios",
      text: "Certificar a nuestro equipo nos diferenció de la competencia. Los clientes valoran mucho que presentemos personal con certificación verificable.",
      initials: "RM",
    },
  ];

  return (
    <section id="testimonios" className="py-32 bg-warm-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-gradient-to-b from-peach/6 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-coral/70 mb-4">
            Testimonios
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.1] tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-foreground/30 text-[13px]">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 border border-sand-dark/25 shadow-sm">
            <ShieldIcon className="w-3.5 h-3.5 text-teal/60" />
            <span className="font-medium text-foreground/40">Certificación verificable</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 border border-sand-dark/25 shadow-sm">
            <StarIcon className="w-3.5 h-3.5 text-gold/70" />
            <span className="font-medium text-foreground/40">Evaluación real</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 border border-sand-dark/25 shadow-sm">
            <UsersIcon className="w-3.5 h-3.5 text-coral/60" />
            <span className="font-medium text-foreground/40">Bolsa laboral activa</span>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-white rounded-2xl p-7 border border-sand-dark/25 hover:border-sand-dark/45 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[14px] text-foreground/55 leading-[1.7]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-sand-dark/25 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sand to-sand-dark/50 flex items-center justify-center text-deep/40 text-[11px] font-bold">
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

function FAQ() {
  const faqs = [
    {
      q: "¿Quién puede inscribirse a la capacitación?",
      a: "Cualquier persona que trabaje o desee trabajar en el ámbito del hogar. Familias y empleadores pueden inscribir a su personal directamente.",
    },
    {
      q: "¿Cuánto dura el curso base?",
      a: "El curso base tiene una duración aproximada de 2 semanas, con sesiones teóricas y prácticas diseñadas para no interferir con el horario laboral.",
    },
    {
      q: "¿Cómo se verifica el certificado?",
      a: "Cada certificado digital incluye un código QR único que cualquier empleador puede escanear para verificar la autenticidad y las competencias certificadas.",
    },
    {
      q: "¿La bolsa laboral tiene costo?",
      a: "Para egresadas certificadas a través de nuestros paquetes, el acceso a la bolsa laboral está incluido. Para familias que solo desean acceder a la bolsa, la cuota única es de $390 MXN.",
    },
    {
      q: "¿Ofrecen capacitación en toda la CDMX?",
      a: "Sí, atendemos toda la Zona Metropolitana de la Ciudad de México. Contáctanos para conocer los horarios y sedes disponibles.",
    },
    {
      q: "¿Qué incluye la recertificación?",
      a: "La recertificación por $590 MXN incluye una evaluación práctica actualizada y la emisión de un nuevo certificado digital con vigencia renovada.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-[#FDF8F3] to-cream/50" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal/70 mb-4">
            Resolvemos tus dudas
          </p>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.1] tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${
                openIdx === i
                  ? "border-sand-dark/50 shadow-md"
                  : "border-sand-dark/25 shadow-sm hover:shadow-md hover:border-sand-dark/40"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[15px] font-medium text-deep hover:text-terracotta transition-colors duration-200"
              >
                <span className="pr-4">{f.q}</span>
                <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                  openIdx === i ? "bg-deep text-white rotate-180" : "bg-sand/60 text-deep/30"
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-[14px] text-foreground/45 leading-relaxed animate-fade-in">
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
    <section id="contacto" className="py-32 bg-warm-white relative">
      <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-gradient-to-bl from-peach/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-terracotta/70 mb-4">
              Contáctanos
            </p>
            <h2 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-semibold text-deep leading-[1.1] tracking-tight">
              Solicita información
            </h2>
            <p className="mt-5 text-foreground/45 text-[16px]">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-[13px] font-semibold text-deep/70 mb-1.5">
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-sand-dark/40 bg-white focus:ring-2 focus:ring-terracotta/15 focus:border-terracotta/40 outline-none transition-all duration-200 text-[15px]"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsapp" className="block text-[13px] font-semibold text-deep/70 mb-1.5">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-sand-dark/40 bg-white focus:ring-2 focus:ring-terracotta/15 focus:border-terracotta/40 outline-none transition-all duration-200 text-[15px]"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="correo" className="block text-[13px] font-semibold text-deep/70 mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  type="email"
                  required
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-sand-dark/40 bg-white focus:ring-2 focus:ring-terracotta/15 focus:border-terracotta/40 outline-none transition-all duration-200 text-[15px]"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-[13px] font-semibold text-deep/70 mb-1.5">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-sand-dark/40 bg-white focus:ring-2 focus:ring-terracotta/15 focus:border-terracotta/40 outline-none transition-all duration-200 resize-none text-[15px]"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-deep hover:bg-[#3A241A] text-white font-semibold py-4 rounded-full text-[15px] transition-all duration-300 shadow-lg shadow-deep/10 hover:shadow-xl hover:shadow-deep/15 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <div className="text-center py-3.5 px-5 rounded-xl bg-teal/8 border border-teal/15 animate-fade-in">
                <p className="text-teal font-semibold text-[14px]">
                  ¡Mensaje enviado! Nos pondremos en contacto pronto.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="text-center py-3.5 px-5 rounded-xl bg-red-50 border border-red-200 animate-fade-in">
                <p className="text-red-600 font-medium text-[14px]">
                  Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
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
      {/* Deep sunset gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E120A] via-[#3D2218] to-[#1E120A]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#B84A28]/15 via-transparent to-[#C4A060]/10" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#B84A28]/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-32 text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/30 mb-6">
          Comienza hoy
        </p>
        <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] font-semibold text-white leading-[1.08] tracking-tight">
          Profesionaliza a tu personal del hogar hoy
        </h2>
        <p className="mt-7 text-[17px] md:text-lg text-white/45 max-w-xl mx-auto leading-[1.7]">
          Únete a las familias y empleadores que ya confían en CertiHogar para
          capacitar, certificar y conectar con personal del hogar calificado.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#contacto"
            className="w-full sm:w-auto group bg-white text-deep hover:bg-white/90 font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Solicitar información
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/8 hover:bg-white/14 text-white/80 font-medium px-8 py-4 rounded-full text-[15px] transition-all duration-300 border border-white/10 hover:-translate-y-0.5"
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
    <footer className="bg-[#140C06] text-white/50 py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#B84A28] to-[#D4725B] flex items-center justify-center">
                <ShieldIcon className="w-3.5 h-3.5 text-white" />
              </span>
              <span className="font-display text-lg font-semibold text-white/80">CertiHogar</span>
            </div>
            <p className="text-[13px] leading-relaxed text-white/35">
              Capacitación y certificación de personal del hogar en Ciudad de
              México. Formación práctica, verificable y profesional.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white/60 mb-4 text-[12px] uppercase tracking-widest">Navegación</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#beneficios" className="hover:text-peach transition-colors duration-200">Beneficios</a></li>
              <li><a href="#como-funciona" className="hover:text-peach transition-colors duration-200">Cómo funciona</a></li>
              <li><a href="#certificacion" className="hover:text-peach transition-colors duration-200">Certificación</a></li>
              <li><a href="#precios" className="hover:text-peach transition-colors duration-200">Precios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white/60 mb-4 text-[12px] uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white/60 mb-4 text-[12px] uppercase tracking-widest">Síguenos</h4>
            <div className="flex gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/6 hover:bg-white/12 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/6 text-center text-[12px] text-white/20">
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
      <Beneficios />
      <ComoFunciona />
      <Certificacion />
      <Precios />
      <Testimonios />
      <FAQ />
      <ContactForm />
      <CTAFinal />
      <Footer />
    </>
  );
}
