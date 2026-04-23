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
    <nav className="sticky top-0 z-50 bg-[#FAF5ED]/85 backdrop-blur-2xl border-b border-[#D6CABB]/25">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#BF4D28] to-[#D47A58] flex items-center justify-center shadow-md shadow-[#BF4D28]/20 group-hover:shadow-lg group-hover:shadow-[#BF4D28]/25 transition-shadow duration-300">
            <ShieldIcon className="w-[18px] h-[18px] text-white" />
          </span>
          <span className="font-display text-[1.75rem] font-bold text-deep tracking-tight">
            CertiHogar
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-[12.5px] font-semibold tracking-wide text-foreground/40 uppercase">
          <a href="#beneficios" className="hover:text-terracotta transition-colors duration-300">
            Beneficios
          </a>
          <a href="#como-funciona" className="hover:text-terracotta transition-colors duration-300">
            Proceso
          </a>
          <a href="#precios" className="hover:text-terracotta transition-colors duration-300">
            Precios
          </a>
          <a href="#faq" className="hover:text-terracotta transition-colors duration-300">
            FAQ
          </a>
          <a
            href="#contacto"
            className="ml-2 bg-gradient-to-r from-[#1C100A] to-[#3A241A] text-white px-7 py-2.5 rounded-full text-[12.5px] font-bold uppercase tracking-wide hover:shadow-lg hover:shadow-deep/20 transition-all duration-300 hover:-translate-y-0.5 normal-case"
          >
            Solicitar informacion
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2.5 rounded-xl hover:bg-sand/60 transition"
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
        <div className="md:hidden border-t border-[#D6CABB]/25 bg-[#FAF5ED]/98 backdrop-blur-2xl px-5 pb-6 pt-4 space-y-1 animate-fade-in">
          {[
            { href: "#beneficios", label: "Beneficios" },
            { href: "#como-funciona", label: "Como funciona" },
            { href: "#precios", label: "Precios" },
            { href: "#testimonios", label: "Testimonios" },
            { href: "#faq", label: "FAQ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3.5 px-4 text-foreground/55 font-medium rounded-xl hover:bg-sand/50 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="block bg-deep text-white text-center py-3.5 rounded-full font-semibold mt-4 shadow-md"
            onClick={() => setOpen(false)}
          >
            Solicitar informacion
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[94vh] flex items-center">
      {/* Layered sunset gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EDDCC8] via-[#F2D8BF] to-[#FAF5ED]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#E4A48A]/25 via-transparent to-[#DBA65C]/10" />
      <div className="absolute top-0 left-0 right-0 h-[70%] bg-gradient-to-bl from-[#CC6B54]/10 via-transparent to-[#2E5B5C]/5" />

      {/* Warm orbs */}
      <div className="absolute top-8 right-[4%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#F0BFA0]/25 to-[#DA8A6A]/10 blur-[100px] animate-float" />
      <div className="absolute bottom-16 left-[1%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#2E5B5C]/5 to-[#DBA65C]/8 blur-[90px] animate-float-delayed" />
      <div className="absolute top-[30%] right-[20%] w-64 h-64 rounded-full bg-[#DBA65C]/12 blur-[80px] animate-pulse-soft" />
      <div className="absolute bottom-[20%] right-[8%] w-40 h-40 rounded-full bg-[#C0876E]/15 blur-[60px] animate-gentle-glow" />

      {/* Grain */}
      <div className="absolute inset-0 grain-overlay opacity-40" />

      {/* Decorative arcs */}
      <div className="absolute top-20 right-[14%] w-px h-56 bg-gradient-to-b from-[#BF4D28]/10 to-transparent hidden lg:block" />
      <div className="absolute top-28 right-[13%] w-px h-36 bg-gradient-to-b from-[#DBA65C]/12 to-transparent hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-36">
        <div className="max-w-[680px] animate-fade-in-up">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/50 backdrop-blur-lg rounded-full px-5 py-2.5 mb-12 border border-white/35 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2E5B5C] animate-pulse-soft" />
            <span className="text-[12.5px] font-bold text-[#2E5B5C] tracking-wide uppercase">
              CDMX
            </span>
            <span className="w-px h-3.5 bg-[#2E5B5C]/15" />
            <span className="text-[12px] text-[#2E5B5C]/55 font-semibold">Certificacion verificable</span>
          </div>

          <h1 className="font-display text-[2.8rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] font-bold leading-[1.02] text-deep tracking-tight">
            Capacita y certifica a tu{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#BF4D28]" style={{ fontStyle: "italic" }}>personal del hogar</span>
              <span className="absolute bottom-2 left-0 right-0 h-3.5 bg-gradient-to-r from-[#DBA65C]/25 to-[#F0BFA0]/20 -z-0 rounded-sm" />
            </span>{" "}
            con mas confianza
          </h1>

          <p className="mt-9 text-[16.5px] md:text-[18px] text-deep/45 max-w-[540px] leading-[1.8] font-medium">
            Formacion practica, evaluacion real y certificacion verificable para
            familias y empleadores en Ciudad de Mexico.
          </p>

          <div className="mt-11 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto group bg-gradient-to-r from-[#1C100A] to-[#3A241A] hover:from-[#3A241A] hover:to-[#1C100A] text-white font-bold px-10 py-[18px] rounded-full text-[15px] transition-all duration-400 shadow-xl shadow-deep/15 hover:shadow-2xl hover:shadow-deep/22 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Solicitar informacion
              <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/50 hover:bg-white/70 backdrop-blur-lg text-deep font-semibold px-8 py-[18px] rounded-full text-[15px] transition-all duration-300 border border-white/35 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-4.5 h-4.5 text-[#BF4D28]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
              Ver como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FranjaConfianza() {
  const items = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" />
        </svg>
      ),
      label: "Capacitacion practica",
      color: "text-[#BF4D28]",
      bg: "bg-[#BF4D28]/8",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      label: "Evaluacion real",
      color: "text-[#C4A060]",
      bg: "bg-[#C4A060]/8",
    },
    {
      icon: <ShieldIcon className="w-5 h-5" />,
      label: "Certificado verificable",
      color: "text-[#2E5B5C]",
      bg: "bg-[#2E5B5C]/6",
    },
    {
      icon: <UsersIcon className="w-5 h-5" />,
      label: "Bolsa laboral basica",
      color: "text-[#DA8A6A]",
      bg: "bg-[#DA8A6A]/8",
    },
  ];

  return (
    <section className="relative py-8 sm:py-10 bg-white/60 backdrop-blur-sm border-y border-[#D6CABB]/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}>
                <span className={item.color}>{item.icon}</span>
              </div>
              <span className="text-[13px] font-bold text-deep/50 tracking-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PropuestaValor() {
  const cards = [
    {
      title: "Reduce el riesgo al contratar",
      desc: "Cada egresada tiene un certificado digital con QR verificable. Antes de contratar, confirma las competencias reales de cualquier candidata.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      accent: "from-[#2E5B5C]",
      badge: "Evaluacion practica",
    },
    {
      title: "Formacion integral y comprobable",
      desc: "Limpieza, organizacion, cocina basica, manejo de productos y protocolos de seguridad. No solo teoria: evaluacion con checklist en escenarios reales.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" />
        </svg>
      ),
      accent: "from-[#BF4D28]",
      badge: "Certificacion verificable",
    },
    {
      title: "Conecta con personal certificado",
      desc: "Nuestra bolsa laboral basica te da acceso a egresadas con competencias verificadas, perfil profesional y evaluacion aprobada.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      accent: "from-[#C4A060]",
      badge: "CDMX",
    },
  ];

  return (
    <section id="beneficios" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5ED] via-cream to-[#FAF5ED]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-peach/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-[#2E5B5C]/55 mb-5">
            Por que CertiHogar
          </p>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-bold text-deep leading-[1.04] tracking-tight">
            Contrata y profesionaliza con mas respaldo
          </h2>
          <p className="mt-6 text-foreground/38 text-[15.5px] leading-[1.75] max-w-lg mx-auto">
            CertiHogar reduce el riesgo de contratar personal no verificado.
            Capacitamos, evaluamos y certificamos con respaldo comprobable.
          </p>
        </div>

        <div className="mt-18 sm:mt-24 grid md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-[#D6CABB]/25 hover:border-[#D6CABB]/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-deep/30 bg-sand/50 rounded-full px-3.5 py-1.5 mb-7">
                {c.badge}
              </span>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.accent} to-transparent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <span className="text-white">{c.icon}</span>
              </div>

              <h3 className="text-[18px] font-bold text-deep mb-3 tracking-tight leading-snug">
                {c.title}
              </h3>
              <p className="text-[14px] text-foreground/40 leading-[1.75]">
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
      title: "Solicitas informacion",
      desc: "Completa el formulario o escribenos por WhatsApp. Resolvemos dudas y explicamos el proceso.",
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Inscripcion a capacitacion",
      desc: "Elige paquete e inscribe a tu personal. Sesiones teoricas y practicas flexibles que se adaptan a su horario.",
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Evaluacion y certificacion",
      desc: "Evaluacion practica con checklist detallado. Certificado digital con codigo QR verificable por cualquier empleador.",
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Acceso a bolsa laboral",
      desc: "Perfil profesional de egresada en nuestra bolsa laboral para conectar con familias que buscan personal.",
      icon: <StarIcon className="w-5.5 h-5.5" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-[#FAF5ED] to-cream/50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-peach/6 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#2E5B5C]/3 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-[#BF4D28]/50 mb-5">
            Proceso simple
          </p>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-bold text-deep leading-[1.04] tracking-tight">
            Como funciona
          </h2>
          <p className="mt-6 text-foreground/38 text-[15.5px]">
            Cuatro pasos para profesionalizar a tu personal del hogar.
          </p>
        </div>

        <div className="mt-18 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative group">
              {/* Connector */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-[#D6CABB]/40 to-[#D6CABB]/15" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D6CABB]/40" />
                </div>
              )}

              <div className="bg-white rounded-3xl p-8 text-center border border-[#D6CABB]/20 hover:border-[#BF4D28]/15 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Step circle */}
                <div className="relative mx-auto w-20 h-20 mb-7">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#BF4D28]/5 to-[#D47A58]/5 group-hover:from-[#BF4D28]/12 group-hover:to-[#D47A58]/12 transition-colors duration-500" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#BF4D28] to-[#D47A58] flex items-center justify-center shadow-lg shadow-[#BF4D28]/15">
                    <span className="text-white">{s.icon}</span>
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-cream border-2 border-white flex items-center justify-center text-[11px] font-extrabold text-[#BF4D28]/70 shadow-sm">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-[16.5px] font-bold text-deep mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-foreground/38 leading-[1.7]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2.5 text-[#BF4D28] font-bold text-[14.5px] hover:gap-3.5 transition-all duration-300 group"
          >
            Comienza tu proceso hoy
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const familias = [
    {
      icon: <ShieldIcon className="w-5 h-5" />,
      title: "Contrata con confianza",
      desc: "Verifica competencias con certificados digitales escaneables antes de contratar.",
    },
    {
      icon: <StarIcon className="w-5 h-5" />,
      title: "Profesionaliza a tu personal actual",
      desc: "Tu personal adquiere habilidades y mejora su desempeno con formacion estructurada.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Reduce riesgos",
      desc: "Personal capacitado en protocolos de seguridad, manejo de productos y cuidado del hogar.",
    },
  ];

  const trabajadoras = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      title: "Certificacion profesional",
      desc: "Obtiene un certificado digital verificable que la distingue en el mercado laboral.",
    },
    {
      icon: <UsersIcon className="w-5 h-5" />,
      title: "Acceso a bolsa laboral",
      desc: "Perfil profesional y acceso a familias que buscan personal certificado en CDMX.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Mejores oportunidades",
      desc: "Formacion que eleva su perfil y le permite acceder a mejores condiciones laborales.",
    },
  ];

  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-[#FAF5ED] to-warm-white" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] rounded-full bg-gradient-to-tl from-peach/6 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[350px] h-[280px] rounded-full bg-gradient-to-br from-[#2E5B5C]/3 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-18 sm:mb-24">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-[#DA8A6A]/60 mb-5">
            Beneficios
          </p>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-bold text-deep leading-[1.04] tracking-tight">
            Para todos los involucrados
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Familias */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BF4D28]/10 to-[#DA8A6A]/8 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#BF4D28]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </span>
              <h3 className="text-[18px] font-bold text-deep tracking-tight">Para familias y empleadores</h3>
            </div>
            <div className="space-y-4">
              {familias.map((b) => (
                <div
                  key={b.title}
                  className="group bg-white rounded-2xl p-6 border border-[#D6CABB]/20 hover:border-[#D6CABB]/45 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#BF4D28]/8 to-[#DA8A6A]/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-[#BF4D28]">{b.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-deep mb-1.5 tracking-tight">{b.title}</h4>
                    <p className="text-[13.5px] text-foreground/38 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trabajadoras */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E5B5C]/8 to-[#4D8283]/6 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2E5B5C]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </span>
              <h3 className="text-[18px] font-bold text-deep tracking-tight">Para trabajadoras certificadas</h3>
            </div>
            <div className="space-y-4">
              {trabajadoras.map((b) => (
                <div
                  key={b.title}
                  className="group bg-white rounded-2xl p-6 border border-[#D6CABB]/20 hover:border-[#D6CABB]/45 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2E5B5C]/6 to-[#4D8283]/4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-[#2E5B5C]">{b.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-deep mb-1.5 tracking-tight">{b.title}</h4>
                    <p className="text-[13.5px] text-foreground/38 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      accent: "from-[#BF4D28]/12 to-[#DA8A6A]/8",
    },
    {
      name: "Lupita R.",
      role: "Egresada certificada",
      text: "El curso me dio herramientas que no conocia. Ahora tengo mi certificado y consegui un mejor empleo gracias a la bolsa laboral. Se los recomiendo.",
      initials: "LR",
      accent: "from-[#2E5B5C]/10 to-[#4D8283]/6",
    },
    {
      name: "Roberto M.",
      role: "Pequena agencia de servicios",
      text: "Certificar a nuestro equipo nos diferencio de la competencia. Los clientes valoran mucho que presentemos personal con certificacion verificable.",
      initials: "RM",
      accent: "from-[#C4A060]/12 to-[#D49A48]/8",
    },
  ];

  return (
    <section id="testimonios" className="py-28 sm:py-36 bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-b from-peach/4 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-[#DA8A6A]/55 mb-5">
            Prueba social
          </p>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-bold text-deep leading-[1.04] tracking-tight">
            Lo que dicen de nosotros
          </h2>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-[#D6CABB]/20 shadow-sm">
            <ShieldIcon className="w-3.5 h-3.5 text-[#2E5B5C]/60" />
            <span className="font-semibold text-foreground/35 text-[11.5px]">Certificacion verificable</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-[#D6CABB]/20 shadow-sm">
            <StarIcon className="w-3.5 h-3.5 text-[#C4A060]/70" />
            <span className="font-semibold text-foreground/35 text-[11.5px]">Evaluacion practica</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-[#D6CABB]/20 shadow-sm">
            <MapPinIcon className="w-3.5 h-3.5 text-[#BF4D28]/55" />
            <span className="font-semibold text-foreground/35 text-[11.5px]">CDMX</span>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-white rounded-3xl p-8 border border-[#D6CABB]/20 hover:border-[#D6CABB]/45 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4.5 h-4.5 text-[#C4A060]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[14.5px] text-foreground/48 leading-[1.8]" style={{ fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-7 pt-6 border-t border-[#D6CABB]/15 flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-deep/45 text-[12px] font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-deep text-[13.5px]">{t.name}</p>
                  <p className="text-[11.5px] text-foreground/32">{t.role}</p>
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
    <section id="precios" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-[#FAF5ED] to-[#F0BFA0]/6" />
      <div className="absolute top-0 right-0 w-[550px] h-[400px] rounded-full bg-gradient-to-bl from-[#DA8A6A]/4 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-[#BF4D28]/45 mb-5">
            Inversion
          </p>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-bold text-deep leading-[1.04] tracking-tight">
            Paquetes y precios
          </h2>
          <p className="mt-6 text-foreground/38 text-[15.5px]">
            Planes para familias, empleadores particulares y pequenas agencias.
          </p>
        </div>

        <div className="mt-18 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                p.popular
                  ? "bg-gradient-to-b from-[#1C100A] to-[#2A1810] text-white shadow-2xl shadow-deep/30 ring-1 ring-white/5 scale-[1.03] z-10"
                  : "bg-white border border-[#D6CABB]/20 hover:border-[#D6CABB]/45 shadow-sm hover:shadow-2xl"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#DBA65C] to-[#D49A48] text-deep text-[10.5px] font-extrabold px-5 py-1.5 rounded-full shadow-lg shadow-[#C4A060]/25 uppercase tracking-wider">
                  Mas popular
                </span>
              )}

              <div className="mb-5">
                <h3 className={`text-[16px] font-bold ${p.popular ? "text-white" : "text-deep"}`}>
                  {p.name}
                </h3>
                <p className={`text-[13px] mt-1 ${p.popular ? "text-white/35" : "text-foreground/28"}`}>{p.desc}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-dashed" style={{ borderColor: p.popular ? "rgba(255,255,255,0.08)" : "rgba(214,202,187,0.35)" }}>
                <span className={`text-[2.1rem] font-bold tracking-tight ${p.popular ? "text-white" : "text-deep"}`}>
                  {p.price}
                </span>
                <span className={`text-[13px] ml-1.5 ${p.popular ? "text-white/30" : "text-foreground/22"}`}>{p.unit}</span>
              </div>

              <ul className="space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.popular ? "text-white/40" : "text-[#2E5B5C]/50"}`} />
                    <span className={p.popular ? "text-white/60" : "text-foreground/42"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-8 block text-center py-3.5 rounded-full font-bold text-[14px] transition-all duration-300 hover:-translate-y-0.5 ${
                  p.popular
                    ? "bg-white text-deep hover:bg-white/90 shadow-lg"
                    : "bg-gradient-to-r from-sand/70 to-sand/45 text-deep hover:from-sand hover:to-sand/65"
                }`}
              >
                Solicitar informacion
              </a>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white rounded-2xl px-8 py-6 border border-[#D6CABB]/20 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
            <span className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-foreground/22">Recertificacion</span>
            <p className="text-xl font-bold text-deep mt-2">$590 <span className="text-[13px] font-normal text-foreground/22">MXN</span></p>
          </div>
          <div className="bg-white rounded-2xl px-8 py-6 border border-[#D6CABB]/20 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
            <span className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-foreground/22">
              Acceso a bolsa laboral (sin paquete)
            </span>
            <p className="text-xl font-bold text-deep mt-2">
              $390 <span className="text-[13px] font-normal text-foreground/22">MXN — cuota unica</span>
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
    <section id="faq" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-cream/30 to-warm-white" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-[#2E5B5C]/45 mb-5">
            Resolvemos tus dudas
          </p>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-bold text-deep leading-[1.04] tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIdx === i
                  ? "border-[#BF4D28]/20 shadow-xl"
                  : "border-[#D6CABB]/20 shadow-sm hover:shadow-lg hover:border-[#D6CABB]/40"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left text-[15px] font-bold text-deep hover:text-[#BF4D28] transition-colors duration-200"
              >
                <span className="pr-4">{f.q}</span>
                <span className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                  openIdx === i ? "bg-[#BF4D28] text-white rotate-180" : "bg-sand/55 text-deep/20"
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIdx === i && (
                <div className="px-7 pb-6 text-[14.5px] text-foreground/40 leading-[1.75] animate-fade-in">
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
    <section id="contacto" className="py-28 sm:py-36 bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[350px] rounded-full bg-gradient-to-bl from-peach/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[250px] rounded-full bg-gradient-to-tr from-[#2E5B5C]/3 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-[#BF4D28]/45 mb-5">
              Contactanos
            </p>
            <h2 className="font-display text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-bold text-deep leading-[1.04] tracking-tight">
              Solicita informacion
            </h2>
            <p className="mt-5 text-foreground/38 text-[15.5px]">
              Completa el formulario y nos pondremos en contacto a la brevedad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-[11px] font-extrabold text-deep/55 mb-2 uppercase tracking-wider">
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-[#D6CABB]/30 bg-white focus:ring-2 focus:ring-[#BF4D28]/10 focus:border-[#BF4D28]/25 outline-none transition-all duration-200 text-[15px] placeholder:text-foreground/18"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="whatsapp" className="block text-[11px] font-extrabold text-deep/55 mb-2 uppercase tracking-wider">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-[#D6CABB]/30 bg-white focus:ring-2 focus:ring-[#BF4D28]/10 focus:border-[#BF4D28]/25 outline-none transition-all duration-200 text-[15px] placeholder:text-foreground/18"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="correo" className="block text-[11px] font-extrabold text-deep/55 mb-2 uppercase tracking-wider">
                  Correo electronico
                </label>
                <input
                  id="correo"
                  type="email"
                  required
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-[#D6CABB]/30 bg-white focus:ring-2 focus:ring-[#BF4D28]/10 focus:border-[#BF4D28]/25 outline-none transition-all duration-200 text-[15px] placeholder:text-foreground/18"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-[11px] font-extrabold text-deep/55 mb-2 uppercase tracking-wider">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-[#D6CABB]/30 bg-white focus:ring-2 focus:ring-[#BF4D28]/10 focus:border-[#BF4D28]/25 outline-none transition-all duration-200 resize-none text-[15px] placeholder:text-foreground/18"
                placeholder="En que podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-[#1C100A] to-[#3A241A] hover:from-[#3A241A] hover:to-[#1C100A] text-white font-bold py-4.5 rounded-full text-[15px] transition-all duration-400 shadow-xl shadow-deep/12 hover:shadow-2xl hover:shadow-deep/18 hover:-translate-y-0.5 disabled:opacity-55 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <div className="text-center py-4 px-5 rounded-xl bg-[#2E5B5C]/5 border border-[#2E5B5C]/10 animate-fade-in">
                <p className="text-[#2E5B5C] font-bold text-[14px]">
                  Mensaje enviado! Nos pondremos en contacto pronto.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="text-center py-4 px-5 rounded-xl bg-red-50 border border-red-200 animate-fade-in">
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C100A] via-[#381F14] to-[#1C100A]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#BF4D28]/10 via-transparent to-[#DBA65C]/6" />

      {/* Warm glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-[#BF4D28]/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-[18%] w-[350px] h-[350px] rounded-full bg-[#DBA65C]/3 blur-[90px] pointer-events-none" />

      {/* Grain */}
      <div className="absolute inset-0 grain-overlay opacity-20" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-28 sm:py-36 text-center">
        <p className="text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-white/20 mb-7">
          Da el primer paso
        </p>
        <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-bold text-white leading-[1.04] tracking-tight">
          Profesionaliza a tu personal del hogar hoy
        </h2>
        <p className="mt-8 text-[16.5px] md:text-[18px] text-white/35 max-w-xl mx-auto leading-[1.8]">
          Unete a las familias y empleadores que ya confian en CertiHogar para
          capacitar, certificar y conectar con personal calificado en CDMX.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto group bg-white text-deep hover:bg-white/92 font-bold px-10 py-[18px] rounded-full text-[15px] transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            Solicitar informacion
            <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-white/70 font-semibold px-9 py-[18px] rounded-full text-[15px] transition-all duration-300 border border-white/7 hover:border-white/14 hover:-translate-y-0.5"
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
    <footer className="bg-[#120A04] text-white/40 py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#BF4D28] to-[#D47A58] flex items-center justify-center shadow-sm">
                <ShieldIcon className="w-4 h-4 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white/70">CertiHogar</span>
            </div>
            <p className="text-[13px] leading-[1.7] text-white/25">
              Capacitacion y certificacion de personal del hogar en Ciudad de
              Mexico. Formacion practica, verificable y profesional.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white/50 mb-4 text-[10.5px] uppercase tracking-[0.15em]">Navegacion</h4>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#beneficios" className="hover:text-peach transition-colors duration-200">Beneficios</a></li>
              <li><a href="#como-funciona" className="hover:text-peach transition-colors duration-200">Como funciona</a></li>
              <li><a href="#precios" className="hover:text-peach transition-colors duration-200">Precios</a></li>
              <li><a href="#faq" className="hover:text-peach transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white/50 mb-4 text-[10.5px] uppercase tracking-[0.15em]">Contacto</h4>
            <ul className="space-y-3 text-[13px]">
              <li>info@certihogar.mx</li>
              <li>Ciudad de Mexico, CDMX</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white/50 mb-4 text-[10.5px] uppercase tracking-[0.15em]">WhatsApp</h4>
            <div className="flex gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/5 text-center text-[12px] text-white/15">
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
      <FranjaConfianza />
      <PropuestaValor />
      <ComoFunciona />
      <Beneficios />
      <Testimonios />
      <Precios />
      <FAQ />
      <ContactForm />
      <CTAFinal />
      <Footer />
    </>
  );
}
