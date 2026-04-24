"use client";

import { useState } from "react";

const WA = "https://wa.me/0000000000?text=Hola%2C%20quiero%20información%20sobre%20CertiHogar";

/* ─────────── SVG Icons ─────────── */

function IconShield({ c = "w-6 h-6" }: { c?: string }) {
  return (
    <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconCheck({ c = "w-5 h-5" }: { c?: string }) {
  return (
    <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconWA({ c = "w-5 h-5" }: { c?: string }) {
  return (
    <svg className={c} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconArrow({ c = "w-4 h-4" }: { c?: string }) {
  return (
    <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconStar({ c = "w-5 h-5" }: { c?: string }) {
  return (
    <svg className={c} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function IconChevron({ c = "w-4 h-4" }: { c?: string }) {
  return (
    <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

/* ─────────── Decorative Sun ─────────── */
function SunBurst({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="30" fill="url(#sunGrad)" opacity="0.3" />
      <circle cx="100" cy="100" r="60" stroke="url(#sunGrad)" strokeWidth="0.5" opacity="0.15" />
      <circle cx="100" cy="100" r="90" stroke="url(#sunGrad)" strokeWidth="0.3" opacity="0.08" />
      <defs>
        <radialGradient id="sunGrad" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#D4942E" />
          <stop offset="1" stopColor="#C4522A" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════ */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 glass-strong border-b border-sand/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-terracotta to-coral flex items-center justify-center shadow-lg shadow-terracotta/15 group-hover:shadow-terracotta/25 transition-shadow duration-500">
            <IconShield c="w-4 h-4 text-white" />
          </span>
          <span className="font-display text-2xl font-bold text-fg tracking-tight">CertiHogar</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[11px] font-semibold tracking-[0.1em] text-fg/25 uppercase">
            {[
              ["#beneficios", "Beneficios"],
              ["#proceso", "Proceso"],
              ["#precios", "Precios"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-terracotta transition-colors duration-300">{label}</a>
            ))}
          </div>
          <a href="#contacto" className="btn-shine bg-fg text-white px-7 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.06em] hover:bg-deep-warm transition-all duration-500 hover:-translate-y-0.5 shadow-md shadow-fg/8">
            Solicitar info
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-xl hover:bg-sand/30 transition-colors" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-5 h-5 text-fg/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-sand/15 bg-bg-warm/98 backdrop-blur-3xl px-5 pb-5 pt-2 anim-fade-in">
          {[
            ["#beneficios", "Beneficios"],
            ["#proceso", "Como funciona"],
            ["#testimonios", "Testimonios"],
            ["#precios", "Precios"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="block py-3.5 px-4 text-fg/40 font-medium rounded-xl hover:bg-sand/20 transition-colors" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contacto" className="block bg-fg text-white text-center py-3.5 rounded-full font-bold mt-3 shadow-lg text-sm" onClick={() => setOpen(false)}>
            Solicitar informacion
          </a>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════
   HERO — Full-bleed sunset
   ═══════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex items-center">
      {/* Sky layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#DFAEB4] via-[#ECC8A8] via-55% to-bg" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D08060]/20 via-transparent to-[#C99B40]/8" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#1E4D50]/4" />

      {/* Desert glow orbs */}
      <div className="absolute top-0 right-[3%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-peach/25 to-coral/5 blur-[140px] anim-drift" />
      <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-teal/5 to-gold/8 blur-[120px] anim-float-slow" />
      <div className="absolute top-[25%] left-[45%] w-72 h-72 rounded-full bg-gold/10 blur-[100px] anim-pulse" />

      {/* Sun burst decoration */}
      <SunBurst className="absolute top-[8%] right-[8%] w-[300px] h-[300px] anim-spin-slow hidden lg:block" />

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-40" />

      {/* Thin accent lines */}
      <div className="absolute top-32 right-[14%] w-px h-40 bg-gradient-to-b from-terracotta/8 to-transparent hidden xl:block" />
      <div className="absolute bottom-40 left-[6%] w-16 h-px bg-gradient-to-r from-transparent to-terracotta/6 hidden xl:block" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="anim-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2 mb-10 border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal anim-pulse" />
              <span className="text-[10px] font-bold text-teal tracking-[0.14em] uppercase">Ciudad de Mexico</span>
              <span className="w-px h-3 bg-teal/10" />
              <span className="text-[10px] text-teal/40 font-medium tracking-wide">Certificacion verificable</span>
            </div>

            <h1 className="font-display text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5.2rem] font-extrabold leading-[0.92] text-fg tracking-tight">
              Capacita y certifica a tu{" "}
              <span className="relative inline-block">
                <em className="not-italic text-terracotta font-display" style={{ fontStyle: "italic" }}>personal del hogar</em>
                <span className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2.5 md:h-4 bg-gradient-to-r from-gold/20 via-peach/15 to-transparent rounded-sm -z-10" />
              </span>
            </h1>

            <p className="mt-7 text-[15.5px] md:text-[17px] text-fg/30 max-w-[480px] leading-[1.85] font-medium">
              Formacion practica, evaluacion real y certificacion verificable para familias y empleadores en Ciudad de Mexico.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-start gap-3">
              <a href="#contacto" className="w-full sm:w-auto group btn-shine bg-fg hover:bg-deep-warm text-white font-bold px-9 py-4 rounded-full text-[14px] transition-all duration-500 shadow-xl shadow-fg/12 hover:shadow-2xl hover:shadow-fg/18 hover:-translate-y-1 flex items-center justify-center gap-2.5">
                Solicitar informacion
                <IconArrow c="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 glass hover:bg-white/60 text-fg font-semibold px-8 py-4 rounded-full text-[14px] transition-all duration-400 border border-white/20 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
                <IconWA c="w-4.5 h-4.5 text-[#25D366]" />
                Hablar por WhatsApp
              </a>
            </div>

            {/* Mini trust */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {["Evaluacion practica", "Certificado con QR", "Bolsa laboral"].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <IconCheck c="w-3.5 h-3.5 text-teal/40" />
                  <span className="text-[11px] text-fg/20 font-semibold">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="hidden lg:flex justify-end anim-fade-up delay-3">
            <div className="relative w-full max-w-[380px]">
              {/* Floating decorative circle */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-peach/20 to-coral/8 blur-2xl anim-float" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-teal/8 to-gold/10 blur-2xl anim-float-slow" />

              {/* Main card */}
              <div className="relative glass-strong rounded-[2rem] p-8 border border-white/25 shadow-2xl shadow-fg/5">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center shadow-md shadow-teal/15">
                    <IconShield c="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-fg">Certificado digital</p>
                    <p className="text-[11px] text-fg/25">Verificable con QR</p>
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-4">
                  {[
                    ["Capacitacion practica completada", true],
                    ["Evaluacion con checklist aprobada", true],
                    ["Perfil laboral verificado", true],
                    ["Acceso a bolsa laboral", false],
                  ].map(([label, done]) => (
                    <div key={label as string} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 ${done ? "bg-teal/8" : "bg-sand/40"}`}>
                        {done ? <IconCheck c="w-3 h-3 text-teal" /> : <div className="w-2 h-2 rounded-full bg-sand-dark/30" />}
                      </div>
                      <span className={`text-[12.5px] font-medium ${done ? "text-fg/40" : "text-fg/15"}`}>{label as string}</span>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-8 pt-6 border-t border-sand/20 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-fg/15">Estado</span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal bg-teal/5 rounded-full px-3.5 py-1.5 border border-teal/8">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                    Certificada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TRUST STRIP
   ═══════════════════════════════════════════ */

function TrustStrip() {
  const items = [
    { label: "Capacitacion practica", color: "text-terracotta", bg: "bg-terracotta/5", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" /></svg> },
    { label: "Evaluacion real", color: "text-gold", bg: "bg-gold/5", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg> },
    { label: "Certificado verificable", color: "text-teal", bg: "bg-teal/4", icon: <IconShield c="w-4 h-4" /> },
    { label: "Bolsa laboral", color: "text-coral", bg: "bg-coral/5", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
  ];

  return (
    <section className="relative py-7 bg-white/30 backdrop-blur-sm border-y border-sand/12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map(i => (
            <div key={i.label} className="flex items-center gap-2.5 group cursor-default">
              <div className={`w-8 h-8 rounded-lg ${i.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-400`}>
                <span className={i.color}>{i.icon}</span>
              </div>
              <span className="text-[11.5px] font-bold text-fg/30 tracking-tight">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROPUESTA DE VALOR
   ═══════════════════════════════════════════ */

function PropuestaValor() {
  const cards = [
    {
      badge: "Confianza",
      title: "Reduce el riesgo al contratar",
      desc: "Cada egresada tiene un certificado digital con QR verificable. Confirma competencias reales antes de contratar.",
      gradient: "from-teal to-teal-light",
      icon: <IconShield c="w-5 h-5" />,
    },
    {
      badge: "Formacion",
      title: "Capacitacion integral y comprobable",
      desc: "Limpieza, organizacion, cocina basica, manejo de productos y protocolos de seguridad. Evaluacion con checklist en escenarios reales.",
      gradient: "from-terracotta to-coral",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" /></svg>,
    },
    {
      badge: "Conexion",
      title: "Accede a personal certificado",
      desc: "Nuestra bolsa laboral te conecta con egresadas verificadas, con perfil profesional y evaluacion aprobada.",
      gradient: "from-gold to-amber",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
    },
  ];

  return (
    <section id="beneficios" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-cream/40 to-bg" />
      <div className="absolute top-0 left-1/3 w-[700px] h-[350px] rounded-full bg-peach/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header — left-aligned editorial */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 mb-20 sm:mb-28">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal/30 mb-4">Por que CertiHogar</p>
            <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-extrabold text-fg leading-[0.95] tracking-tight">
              Contrata con mas <em className="text-terracotta not-italic" style={{ fontStyle: "italic" }}>respaldo</em>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-fg/25 text-[15px] leading-[1.85] max-w-md lg:ml-auto">
              CertiHogar reduce el riesgo de contratar personal no verificado. Capacitamos, evaluamos y certificamos con respaldo comprobable en Ciudad de Mexico.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((c, i) => (
            <div key={c.title} className={`group relative bg-white rounded-[1.5rem] p-8 sm:p-9 border border-sand/15 hover:border-sand/35 card-lift ${i === 1 ? "md:-mt-4" : ""}`}>
              {/* Top accent */}
              <div className={`absolute top-0 inset-x-6 h-[2px] rounded-full bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

              <span className="inline-block text-[9px] font-bold uppercase tracking-[0.16em] text-fg/18 bg-sand/25 rounded-full px-3.5 py-1.5 mb-7">
                {c.badge}
              </span>

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-500`}>
                <span className="text-white">{c.icon}</span>
              </div>

              <h3 className="text-lg font-bold text-fg mb-3 tracking-tight leading-snug">{c.title}</h3>
              <p className="text-[13.5px] text-fg/28 leading-[1.8]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BENEFICIOS (Familias + Trabajadoras)
   ═══════════════════════════════════════════ */

function Beneficios() {
  const left = [
    { title: "Contrata con confianza", desc: "Verifica competencias con certificados digitales escaneables antes de contratar.", icon: <IconShield c="w-4 h-4" /> },
    { title: "Profesionaliza a tu personal", desc: "Tu personal mejora su desempeno con formacion estructurada y evaluacion real.", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg> },
    { title: "Reduce riesgos", desc: "Personal capacitado en protocolos de seguridad, manejo de productos y cuidado del hogar.", icon: <IconCheck c="w-4 h-4" /> },
  ];
  const right = [
    { title: "Certificacion profesional", desc: "Un certificado digital verificable que la distingue en el mercado laboral.", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg> },
    { title: "Acceso a bolsa laboral", desc: "Perfil profesional y acceso a familias que buscan personal certificado en CDMX.", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
    { title: "Mejores oportunidades", desc: "Formacion que eleva su perfil y accede a mejores condiciones laborales.", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
  ];

  function Col({ title, accent, items }: { title: string; accent: string; items: typeof left }) {
    return (
      <div>
        <h3 className="text-lg font-bold text-fg mb-7 tracking-tight">{title}</h3>
        <div className="space-y-3">
          {items.map(b => (
            <div key={b.title} className="group flex gap-4 bg-white rounded-xl p-5 border border-sand/10 hover:border-sand/25 card-lift">
              <div className={`w-9 h-9 rounded-lg ${accent} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-400`}>
                <span className={accent.includes("terracotta") ? "text-terracotta" : "text-teal"}>{b.icon}</span>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-fg mb-1">{b.title}</h4>
                <p className="text-[12.5px] text-fg/25 leading-[1.7]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-warm to-bg" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-18 sm:mb-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-coral/35 mb-4">Beneficios</p>
          <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-extrabold text-fg leading-[0.95] tracking-tight">
            Para todos los involucrados
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Col title="Para familias y empleadores" accent="bg-terracotta/5" items={left} />
          <Col title="Para trabajadoras certificadas" accent="bg-teal/4" items={right} />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COMO FUNCIONA — 3 steps
   ═══════════════════════════════════════════ */

function ComoFunciona() {
  const steps = [
    {
      n: "01",
      title: "Solicita e inscribe",
      desc: "Contactanos por formulario o WhatsApp. Elige tu paquete e inscribe a tu personal en sesiones flexibles.",
      icon: <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
    },
    {
      n: "02",
      title: "Capacitacion y evaluacion",
      desc: "Formacion teorica y practica. Evaluacion con checklist detallado en escenarios reales del hogar.",
      icon: <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
    },
    {
      n: "03",
      title: "Certificacion y bolsa laboral",
      desc: "Certificado digital con QR verificable y perfil en nuestra bolsa laboral para conectar con familias.",
      icon: <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
    },
  ];

  return (
    <section id="proceso" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Warm gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF6EC] via-bg to-bg-cream/30" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-peach/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-teal/2 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-lg mx-auto mb-18 sm:mb-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-terracotta/25 mb-4">Proceso simple</p>
          <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-extrabold text-fg leading-[0.95] tracking-tight">
            Tres pasos sencillos
          </h2>
          <p className="mt-5 text-fg/25 text-[15px] leading-[1.8]">
            De la solicitud al certificado verificable, sin complicaciones.
          </p>
        </div>

        {/* 3-column steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group text-center">
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-[3.5rem] left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-sand-dark/25 to-sand-dark/5" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sand-dark/20" />
                </div>
              )}

              {/* Icon container */}
              <div className="relative mx-auto w-[4.5rem] h-[4.5rem] mb-8">
                <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-br from-terracotta/5 to-coral/3 group-hover:from-terracotta/12 group-hover:to-coral/8 transition-all duration-500 rotate-6 group-hover:rotate-0" />
                <div className="absolute inset-[5px] rounded-2xl bg-gradient-to-br from-terracotta to-coral flex items-center justify-center shadow-xl shadow-terracotta/12 group-hover:shadow-terracotta/20 transition-shadow duration-500">
                  <span className="text-white">{s.icon}</span>
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-bg-cream border-2 border-white text-[10px] font-extrabold text-terracotta/50 flex items-center justify-center shadow-sm">
                  {s.n}
                </span>
              </div>

              <h3 className="text-[17px] font-bold text-fg mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[13px] text-fg/25 leading-[1.75] max-w-[260px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-16 text-center">
          <a href="#contacto" className="inline-flex items-center gap-2 text-terracotta font-bold text-sm hover:gap-3 transition-all duration-400 group">
            Comienza tu proceso hoy
            <IconArrow c="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TESTIMONIOS
   ═══════════════════════════════════════════ */

function Testimonios() {
  const data = [
    { name: "Maria G.", role: "Empleadora en Polanco", text: "Desde que mi empleada completo la certificacion de CertiHogar, la organizacion y limpieza en casa mejoraron notablemente. El certificado me da confianza total.", initials: "MG", grad: "from-terracotta/10 to-coral/5" },
    { name: "Lupita R.", role: "Egresada certificada", text: "El curso me dio herramientas que no conocia. Ahora tengo mi certificado y consegui un mejor empleo gracias a la bolsa laboral. Se los recomiendo.", initials: "LR", grad: "from-teal/8 to-teal-light/4" },
    { name: "Roberto M.", role: "Pequena agencia de servicios", text: "Certificar a nuestro equipo nos diferencio de la competencia. Los clientes valoran mucho que presentemos personal con certificacion verificable.", initials: "RM", grad: "from-gold/10 to-amber/5" },
  ];

  return (
    <section id="testimonios" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-warm via-bg to-bg-warm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-peach/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header with badges */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-coral/30 mb-4">Prueba social</p>
            <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-extrabold text-fg leading-[0.95] tracking-tight">
              Quienes ya confian
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Certificacion verificable", "Evaluacion practica", "CDMX"].map(b => (
              <span key={b} className="inline-flex items-center gap-1.5 bg-white/50 border border-sand/15 rounded-full px-4 py-1.5 text-[10px] font-bold text-fg/18">
                <IconCheck c="w-3 h-3 text-teal/35" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {data.map(t => (
            <div key={t.name} className="group bg-white rounded-[1.5rem] p-8 border border-sand/10 hover:border-sand/25 card-lift">
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => <IconStar key={i} c="w-4 h-4 text-gold" />)}
              </div>

              <p className="text-[14px] text-fg/35 leading-[1.85] italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-7 pt-6 border-t border-sand/10 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center text-fg/30 text-[11px] font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-fg">{t.name}</p>
                  <p className="text-[11px] text-fg/20 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PRECIOS
   ═══════════════════════════════════════════ */

function Precios() {
  const plans = [
    { name: "Individual", price: "$1,490", sub: "1 persona", features: ["Curso base completo", "Evaluacion practica", "Certificado digital", "Perfil laboral"], pop: false },
    { name: "Duo", price: "$2,690", sub: "2 personas", features: ["Curso base completo", "Evaluacion practica", "Certificado digital", "Perfil laboral", "Ahorro de $290"], pop: true },
    { name: "Equipo", price: "$3,790", sub: "3 personas", features: ["Curso base completo", "Evaluacion practica", "Certificado digital", "Perfil laboral", "Ahorro de $680"], pop: false },
    { name: "Agencia", price: "Desde $6,900", sub: "5 personas", features: ["Curso base completo", "Evaluacion practica", "Certificados digitales", "Perfiles laborales", "Precio preferencial"], pop: false },
  ];

  return (
    <section id="precios" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-cream/30 via-bg to-peach-light/4" />
      <div className="absolute top-0 right-0 w-[500px] h-[350px] rounded-full bg-coral/2 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-lg mx-auto mb-18 sm:mb-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-terracotta/22 mb-4">Inversion</p>
          <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-extrabold text-fg leading-[0.95] tracking-tight">
            Paquetes y precios
          </h2>
          <p className="mt-5 text-fg/25 text-[15px] leading-[1.8]">
            Planes claros para familias, empleadores y pequenas agencias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {plans.map(p => (
            <div key={p.name} className={`relative rounded-[1.5rem] p-7 sm:p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
              p.pop
                ? "bg-gradient-to-b from-fg via-deep-warm to-fg text-white shadow-2xl shadow-fg/18 ring-1 ring-white/4 scale-[1.03] z-10"
                : "bg-white border border-sand/12 hover:border-sand/30 shadow-sm hover:shadow-xl"
            }`}>
              {p.pop && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-amber text-fg text-[9px] font-extrabold px-5 py-1.5 rounded-full shadow-lg shadow-gold/15 uppercase tracking-[0.12em]">
                  Mas popular
                </span>
              )}

              <div className="mb-5">
                <h3 className={`text-base font-bold ${p.pop ? "text-white" : "text-fg"}`}>{p.name}</h3>
                <p className={`text-[12px] mt-1 ${p.pop ? "text-white/22" : "text-fg/18"}`}>{p.sub}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-dashed" style={{ borderColor: p.pop ? "rgba(255,255,255,0.05)" : "rgba(232,217,196,0.3)" }}>
                <span className={`text-[1.9rem] font-bold tracking-tight ${p.pop ? "text-white" : "text-fg"}`}>{p.price}</span>
                <span className={`text-[11px] ml-1 ${p.pop ? "text-white/18" : "text-fg/15"}`}>MXN</span>
              </div>

              <ul className="space-y-3 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-[12.5px]">
                    <IconCheck c={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${p.pop ? "text-white/25" : "text-teal/30"}`} />
                    <span className={p.pop ? "text-white/45" : "text-fg/28"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className={`mt-8 block text-center py-3.5 rounded-full font-bold text-[13px] transition-all duration-400 hover:-translate-y-0.5 ${
                p.pop
                  ? "btn-shine bg-white text-fg hover:bg-white/92 shadow-lg shadow-white/8"
                  : "bg-sand/30 text-fg hover:bg-sand/50"
              }`}>
                Solicitar informacion
              </a>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white rounded-xl px-7 py-5 border border-sand/12 text-center hover:shadow-lg transition-all duration-400 hover:-translate-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-fg/15">Recertificacion</span>
            <p className="text-xl font-bold text-fg mt-1.5">$590 <span className="text-[11px] font-normal text-fg/15">MXN</span></p>
          </div>
          <div className="bg-white rounded-xl px-7 py-5 border border-sand/12 text-center hover:shadow-lg transition-all duration-400 hover:-translate-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-fg/15">Bolsa laboral (sin paquete)</span>
            <p className="text-xl font-bold text-fg mt-1.5">$390 <span className="text-[11px] font-normal text-fg/15">MXN — cuota unica</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FAQ — Clean accordion
   ═══════════════════════════════════════════ */

function FAQ() {
  const items = [
    { q: "Quien puede inscribirse a la capacitacion?", a: "Cualquier persona que trabaje o desee trabajar en el ambito del hogar. Familias y empleadores pueden inscribir a su personal directamente." },
    { q: "Cuanto dura el curso base?", a: "El curso base tiene una duracion aproximada de 2 semanas, con sesiones teoricas y practicas disenadas para no interferir con el horario laboral." },
    { q: "Como se verifica el certificado?", a: "Cada certificado digital incluye un codigo QR unico que cualquier empleador puede escanear para verificar la autenticidad y las competencias certificadas." },
    { q: "La bolsa laboral tiene costo?", a: "Para egresadas certificadas a traves de nuestros paquetes, el acceso a la bolsa laboral esta incluido. Para familias que solo desean acceder a la bolsa, la cuota unica es de $390 MXN." },
    { q: "Ofrecen capacitacion en toda la CDMX?", a: "Si, atendemos toda la Zona Metropolitana de la Ciudad de Mexico. Contactanos para conocer los horarios y sedes disponibles." },
    { q: "Que incluye la recertificacion?", a: "La recertificacion por $590 MXN incluye una evaluacion practica actualizada y la emision de un nuevo certificado digital con vigencia renovada." },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-warm via-bg-cream/15 to-bg-warm" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal/25 mb-4">Resolvemos tus dudas</p>
          <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-extrabold text-fg leading-[0.95] tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-2.5">
          {items.map((f, i) => (
            <div key={i} className={`rounded-xl border overflow-hidden transition-all duration-400 ${
              open === i ? "bg-white border-terracotta/10 shadow-lg shadow-terracotta/3" : "bg-white/60 border-sand/10 hover:bg-white hover:border-sand/20 hover:shadow-sm"
            }`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[14px] font-bold text-fg hover:text-terracotta transition-colors duration-300"
              >
                <span className="pr-4 leading-snug">{f.q}</span>
                <span className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-400 ${
                  open === i ? "bg-terracotta text-white rotate-180" : "bg-sand/25 text-fg/12"
                }`}>
                  <IconChevron c="w-3 h-3" />
                </span>
              </button>
              <div className={`grid transition-all duration-400 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-[13.5px] text-fg/28 leading-[1.8]">
                    {f.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════ */

function ContactForm() {
  const [form, setForm] = useState({ nombre: "", whatsapp: "", correo: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setStatus("sent"); setForm({ nombre: "", whatsapp: "", correo: "", mensaje: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  const inputCls = "w-full px-5 py-3.5 rounded-xl border border-sand/18 bg-white focus:ring-2 focus:ring-terracotta/8 focus:border-terracotta/15 outline-none transition-all duration-300 text-sm placeholder:text-fg/10";

  return (
    <section id="contacto" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-warm to-bg" />
      <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-peach/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-terracotta/22 mb-4">Contactanos</p>
            <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-extrabold text-fg leading-[0.95] tracking-tight">
              Solicita informacion
            </h2>
            <p className="mt-5 text-fg/25 text-[14.5px] leading-[1.8]">
              Completa el formulario y nos pondremos en contacto a la brevedad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-[9.5px] font-bold text-fg/35 mb-2 uppercase tracking-[0.12em]">Nombre completo</label>
              <input id="nombre" type="text" required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} className={inputCls} placeholder="Tu nombre" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsapp" className="block text-[9.5px] font-bold text-fg/35 mb-2 uppercase tracking-[0.12em]">WhatsApp</label>
                <input id="whatsapp" type="tel" required value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} className={inputCls} placeholder="+52 55 1234 5678" />
              </div>
              <div>
                <label htmlFor="correo" className="block text-[9.5px] font-bold text-fg/35 mb-2 uppercase tracking-[0.12em]">Correo</label>
                <input id="correo" type="email" required value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} className={inputCls} placeholder="tu@correo.com" />
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-[9.5px] font-bold text-fg/35 mb-2 uppercase tracking-[0.12em]">Mensaje</label>
              <textarea id="mensaje" rows={4} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} className={`${inputCls} resize-none`} placeholder="En que podemos ayudarte?" />
            </div>

            <button type="submit" disabled={status === "sending"} className="w-full btn-shine bg-fg hover:bg-deep-warm text-white font-bold py-4 rounded-full text-sm transition-all duration-500 shadow-xl shadow-fg/8 hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0">
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <div className="text-center py-4 px-5 rounded-xl bg-teal/3 border border-teal/6 anim-fade-in">
                <p className="text-teal font-bold text-[13px]">Mensaje enviado! Nos pondremos en contacto pronto.</p>
              </div>
            )}
            {status === "error" && (
              <div className="text-center py-4 px-5 rounded-xl bg-red-50 border border-red-100 anim-fade-in">
                <p className="text-red-600 font-medium text-[13px]">Hubo un error. Intenta de nuevo o escribenos por WhatsApp.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CTA FINAL
   ═══════════════════════════════════════════ */

function CTAFinal() {
  return (
    <section className="relative overflow-hidden">
      {/* Deep desert night sky */}
      <div className="absolute inset-0 bg-gradient-to-br from-fg via-deep-warm to-fg" />
      <div className="absolute inset-0 bg-gradient-to-tr from-terracotta/5 via-transparent to-gold/4" />

      {/* Warm glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] rounded-full bg-terracotta/4 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-[300px] h-[300px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />

      {/* Sun burst */}
      <SunBurst className="absolute top-[10%] right-[5%] w-[200px] h-[200px] anim-spin-slow opacity-30" />

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-20" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 py-28 sm:py-36 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/12 mb-6">Da el primer paso</p>
        <h2 className="font-display text-[2.4rem] md:text-[3.2rem] lg:text-[4.2rem] font-extrabold text-white leading-[0.95] tracking-tight">
          Profesionaliza a tu personal del hogar hoy
        </h2>
        <p className="mt-7 text-[16px] md:text-[17px] text-white/22 max-w-lg mx-auto leading-[1.85]">
          Unete a las familias y empleadores que ya confian en CertiHogar para capacitar, certificar y conectar con personal calificado en CDMX.
        </p>
        <div className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contacto" className="w-full sm:w-auto group btn-shine bg-white text-fg hover:bg-white/92 font-bold px-10 py-4 rounded-full text-[14px] transition-all duration-400 shadow-xl shadow-white/3 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2.5">
            Solicitar informacion
            <IconArrow c="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/4 hover:bg-white/7 text-white/50 font-semibold px-9 py-4 rounded-full text-[14px] transition-all duration-400 border border-white/5 hover:border-white/10 hover:-translate-y-0.5">
            <IconWA c="w-4.5 h-4.5" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-[#0D0704] text-white/25 py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-terracotta to-coral flex items-center justify-center">
                <IconShield c="w-3.5 h-3.5 text-white" />
              </span>
              <span className="font-display text-base font-bold text-white/50">CertiHogar</span>
            </div>
            <p className="text-[12px] leading-[1.7] text-white/15">
              Capacitacion y certificacion de personal del hogar en Ciudad de Mexico. Formacion practica, verificable y profesional.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white/35 mb-3.5 text-[9px] uppercase tracking-[0.16em]">Navegacion</h4>
            <ul className="space-y-2.5 text-[12px]">
              {[["#beneficios", "Beneficios"], ["#proceso", "Como funciona"], ["#precios", "Precios"], ["#faq", "FAQ"]].map(([h, l]) => (
                <li key={h}><a href={h} className="hover:text-peach transition-colors duration-300">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white/35 mb-3.5 text-[9px] uppercase tracking-[0.16em]">Contacto</h4>
            <ul className="space-y-2.5 text-[12px]">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white/35 mb-3.5 text-[9px] uppercase tracking-[0.16em]">WhatsApp</h4>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/3 hover:bg-white/6 flex items-center justify-center transition-all duration-400 hover:-translate-y-0.5" aria-label="WhatsApp">
              <IconWA c="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-7 border-t border-white/3 text-center text-[10.5px] text-white/8">
          &copy; {new Date().getFullYear()} CertiHogar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <PropuestaValor />
      <Beneficios />
      <ComoFunciona />
      <Testimonios />
      <Precios />
      <FAQ />
      <ContactForm />
      <CTAFinal />
      <Footer />
    </>
  );
}
