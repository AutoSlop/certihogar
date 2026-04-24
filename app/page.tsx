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

/* ─────────── Decorative SVGs ─────────── */

function DesertHorizon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none">
      <path d="M0 140 Q200 80 400 120 Q600 160 800 100 Q1000 50 1200 90 L1200 200 L0 200Z" fill="url(#desertFill)" />
      <path d="M0 150 Q300 100 600 130 Q900 160 1200 110" stroke="url(#desertStroke)" strokeWidth="1" opacity="0.15" />
      <path d="M0 165 Q250 130 500 155 Q750 180 1000 140 Q1100 130 1200 135" stroke="url(#desertStroke2)" strokeWidth="0.6" opacity="0.08" />
      <defs>
        <linearGradient id="desertFill" x1="0" y1="0" x2="1200" y2="0">
          <stop stopColor="#C24B28" stopOpacity="0.03" />
          <stop offset="0.5" stopColor="#C89830" stopOpacity="0.05" />
          <stop offset="1" stopColor="#C24B28" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="desertStroke" x1="0" y1="0" x2="1200" y2="0">
          <stop stopColor="#C24B28" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#C89830" stopOpacity="0.3" />
          <stop offset="1" stopColor="#1C4E52" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="desertStroke2" x1="0" y1="0" x2="1200" y2="0">
          <stop stopColor="#C89830" stopOpacity="0.15" />
          <stop offset="1" stopColor="#C24B28" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SunGlow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none">
      <circle cx="150" cy="150" r="40" fill="url(#sunCore)" opacity="0.35" />
      <circle cx="150" cy="150" r="70" fill="url(#sunMid)" opacity="0.12" />
      <circle cx="150" cy="150" r="110" fill="url(#sunOuter)" opacity="0.05" />
      <circle cx="150" cy="150" r="80" stroke="url(#sunRing)" strokeWidth="0.5" opacity="0.1" />
      <circle cx="150" cy="150" r="130" stroke="url(#sunRing)" strokeWidth="0.3" opacity="0.05" />
      <defs>
        <radialGradient id="sunCore" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#D49428" />
          <stop offset="1" stopColor="#C24B28" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sunMid" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#E0C070" />
          <stop offset="1" stopColor="#C24B28" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sunOuter" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#F2C4A0" />
          <stop offset="1" stopColor="#F2C4A0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sunRing" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#D49428" />
          <stop offset="1" stopColor="#C24B28" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CactusDecor({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 120" fill="none" opacity="0.04">
      <path d="M30 120 L30 30 Q30 10 30 10 Q28 5 30 2 Q32 5 30 10 L30 30" stroke="#1B0E04" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 60 Q15 58 10 45 Q8 38 10 35 Q12 38 12 42 Q14 55 30 58" stroke="#1B0E04" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 45 Q45 43 50 32 Q52 26 50 23 Q48 26 48 30 Q46 40 30 43" stroke="#1B0E04" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════ */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 glass-strong border-b border-sand/12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-[72px]">
        <a href="#" className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-terracotta via-dusk to-terracotta-dark flex items-center justify-center shadow-lg shadow-terracotta/12 group-hover:shadow-terracotta/22 group-hover:scale-105 transition-all duration-500">
            <IconShield c="w-4.5 h-4.5 text-white" />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-[22px] font-bold text-fg tracking-tight leading-none">CertiHogar</span>
            <span className="text-[8px] font-semibold text-fg/15 tracking-[0.2em] uppercase mt-0.5 hidden sm:block">Certificacion verificable</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8 text-[11px] font-semibold tracking-[0.14em] text-fg/22 uppercase">
            {[
              ["#beneficios", "Beneficios"],
              ["#proceso", "Proceso"],
              ["#precios", "Precios"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="link-hover hover:text-terracotta transition-colors duration-300">{label}</a>
            ))}
          </div>
          <a href="#contacto" className="btn-shine bg-gradient-to-r from-terracotta to-terracotta-dark text-white px-7 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] hover:from-terracotta-dark hover:to-terracotta transition-all duration-500 hover:-translate-y-0.5 shadow-lg shadow-terracotta/12 hover:shadow-xl hover:shadow-terracotta/20">
            Solicitar info
          </a>
        </div>

        <button className="md:hidden p-2.5 rounded-xl hover:bg-sand/20 transition-colors" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-5 h-5 text-fg/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-sand/10 bg-bg-warm/98 backdrop-blur-3xl px-6 pb-6 pt-3 anim-fade-in">
          {[
            ["#beneficios", "Beneficios"],
            ["#proceso", "Como funciona"],
            ["#testimonios", "Testimonios"],
            ["#precios", "Precios"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="block py-3.5 px-5 text-fg/35 font-medium rounded-xl hover:bg-sand/15 hover:text-fg/60 transition-all text-[15px]" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contacto" className="block bg-gradient-to-r from-terracotta to-terracotta-dark text-white text-center py-3.5 rounded-full font-bold mt-4 shadow-lg text-[15px]" onClick={() => setOpen(false)}>
            Solicitar informacion
          </a>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════
   HERO — Cinematic desert sunset
   ═══════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex items-center">
      {/* Multi-layer sunset sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4988A] via-[#E8BCA0] via-35% to-[#F4DAC0] to-65%" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#CC7058]/15 via-transparent to-[#C89830]/12" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#E0A070]/8 to-[#1C4E52]/5" />
      <div className="absolute bottom-0 inset-x-0 h-[45%] bg-gradient-to-t from-bg via-bg/80 to-transparent" />

      {/* Desert ambient orbs */}
      <div className="absolute top-[3%] right-[5%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#F0D0B0]/30 to-coral/5 blur-[160px] anim-drift" />
      <div className="absolute bottom-[8%] left-[-8%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-teal/6 to-gold/10 blur-[140px] anim-float-slow" />
      <div className="absolute top-[20%] left-[40%] w-[400px] h-[400px] rounded-full bg-gold/12 blur-[120px] anim-pulse" />
      <div className="absolute top-[45%] right-[25%] w-[250px] h-[250px] rounded-full bg-terracotta/6 blur-[80px] anim-breathe" />

      {/* Sun glow */}
      <SunGlow className="absolute top-[2%] right-[6%] w-[400px] h-[400px] anim-spin-slow hidden lg:block" />

      {/* Desert horizon */}
      <DesertHorizon className="absolute bottom-[12%] left-0 right-0 w-full h-48 anim-wave hidden md:block" />

      {/* Cactus decorations */}
      <CactusDecor className="absolute bottom-[18%] right-[8%] w-12 h-24 hidden xl:block" />
      <CactusDecor className="absolute bottom-[16%] right-[12%] w-8 h-16 hidden xl:block" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute inset-0 desert-texture" />

      {/* Fine accent lines */}
      <div className="absolute top-36 right-[15%] w-px h-48 bg-gradient-to-b from-terracotta/10 via-gold/6 to-transparent hidden xl:block" />
      <div className="absolute top-48 right-[14.6%] w-6 h-px bg-terracotta/8 hidden xl:block" />
      <div className="absolute bottom-44 left-[5%] w-20 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent hidden xl:block" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
          {/* Left — Editorial copy */}
          <div className="anim-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass-warm rounded-full px-5 py-2.5 mb-12 border border-white/22 shadow-md shadow-fg/3">
              <span className="w-2 h-2 rounded-full bg-teal anim-pulse" />
              <span className="text-[10px] font-bold text-teal tracking-[0.16em] uppercase">Ciudad de Mexico</span>
              <span className="w-px h-3.5 bg-teal/8" />
              <span className="text-[10px] text-teal/35 font-medium tracking-wide">Certificacion verificable</span>
            </div>

            {/* Editorial headline */}
            <h1 className="font-display text-[2.8rem] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5.4rem] font-extrabold leading-[0.88] text-fg tracking-tight">
              <span className="block">Capacita y</span>
              <span className="block mt-1">certifica a tu</span>
              <span className="relative inline-block mt-1">
                <em className="not-italic font-display text-terracotta" style={{ fontStyle: "italic" }}>personal</em>
                <span className="absolute bottom-1 md:bottom-2 left-0 right-0 h-3 md:h-5 bg-gradient-to-r from-gold/20 via-peach/18 to-transparent rounded -z-10" />
              </span>{" "}
              <em className="not-italic font-display text-terracotta" style={{ fontStyle: "italic" }}>del hogar</em>
            </h1>

            {/* Subheadline with editorial font */}
            <p className="mt-8 font-editorial text-[20px] md:text-[23px] text-fg/40 max-w-[520px] leading-[1.6] italic">
              Formacion practica, evaluacion real y certificacion verificable para familias y empleadores en Ciudad de Mexico.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a href="#contacto" className="w-full sm:w-auto group btn-shine bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white font-bold px-10 py-4.5 rounded-full text-[15px] transition-all duration-500 shadow-xl shadow-terracotta/18 hover:shadow-2xl hover:shadow-terracotta/25 hover:-translate-y-1.5 flex items-center justify-center gap-3">
                Solicitar informacion
                <IconArrow c="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2.5 glass-warm hover:bg-white/65 text-fg/65 font-semibold px-9 py-4.5 rounded-full text-[15px] transition-all duration-500 border border-white/25 shadow-md hover:shadow-xl hover:-translate-y-1 group">
                <IconWA c="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
                Hablar por WhatsApp
              </a>
            </div>

            {/* Mini trust badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              {[
                { label: "Evaluacion practica", icon: "check" },
                { label: "Certificado con QR", icon: "shield" },
                { label: "Bolsa laboral", icon: "check" },
              ].map(t => (
                <div key={t.label} className="flex items-center gap-2 group/badge cursor-default">
                  <div className="w-5 h-5 rounded-md bg-teal/5 flex items-center justify-center group-hover/badge:bg-teal/10 transition-colors duration-300">
                    {t.icon === "shield" ? <IconShield c="w-3 h-3 text-teal/40" /> : <IconCheck c="w-3 h-3 text-teal/40" />}
                  </div>
                  <span className="text-[11px] text-fg/20 font-semibold tracking-tight group-hover/badge:text-fg/35 transition-colors duration-300">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Certificate preview card */}
          <div className="hidden lg:flex justify-end anim-fade-up delay-3">
            <div className="relative w-full max-w-[400px]">
              {/* Floating blurs */}
              <div className="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-gradient-to-br from-peach/22 to-coral/8 blur-3xl anim-float" />
              <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-teal/8 to-gold/12 blur-2xl anim-float-slow" />
              <div className="absolute top-1/2 -left-6 w-20 h-20 rounded-full bg-gold/10 blur-xl anim-float-gentle" />

              {/* Main card */}
              <div className="relative glass-strong rounded-[2rem] p-9 border border-white/28 shadow-2xl shadow-fg/6">
                {/* Decorative top accent */}
                <div className="absolute top-0 inset-x-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-9">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center shadow-lg shadow-teal/15 hover:scale-105 transition-transform duration-500">
                    <IconShield c="w-5.5 h-5.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-fg tracking-tight">Certificado digital</p>
                    <p className="text-[11px] text-fg/22 font-medium">Verificable con QR</p>
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
                    <div key={label as string} className="flex items-center gap-3 group/item cursor-default">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${done ? "bg-teal/6 group-hover/item:bg-teal/12" : "bg-sand/30 group-hover/item:bg-sand/45"}`}>
                        {done ? <IconCheck c="w-3.5 h-3.5 text-teal" /> : <div className="w-2 h-2 rounded-full bg-sand-dark/25" />}
                      </div>
                      <span className={`text-[13px] font-medium transition-colors duration-300 ${done ? "text-fg/40 group-hover/item:text-fg/55" : "text-fg/14"}`}>{label as string}</span>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-9 pt-6 border-t border-sand/18 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-fg/14">Estado</span>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold text-teal bg-teal/4 rounded-full px-4 py-1.5 border border-teal/8 hover:bg-teal/8 transition-colors duration-300 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal anim-pulse" />
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
   TRUST STRIP — Desert warmth
   ═══════════════════════════════════════════ */

function TrustStrip() {
  const items = [
    { label: "Capacitacion practica", color: "text-terracotta", bg: "from-terracotta/6 to-terracotta/2", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" /></svg> },
    { label: "Evaluacion real", color: "text-gold", bg: "from-gold/6 to-gold/2", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg> },
    { label: "Certificado verificable", color: "text-teal", bg: "from-teal/5 to-teal/2", icon: <IconShield c="w-4 h-4" /> },
    { label: "Bolsa laboral", color: "text-dusk", bg: "from-dusk/5 to-dusk/2", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
  ];

  return (
    <section className="relative py-8 bg-gradient-to-r from-white/30 via-white/45 to-white/30 backdrop-blur-sm border-y border-sand/10">
      <div className="absolute inset-0 desert-texture" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {items.map(i => (
            <div key={i.label} className="flex items-center gap-3 group cursor-default">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${i.bg} flex items-center justify-center group-hover:scale-115 transition-all duration-500 shadow-sm`}>
                <span className={i.color}>{i.icon}</span>
              </div>
              <span className="text-[12px] font-bold text-fg/28 tracking-tight group-hover:text-fg/45 transition-colors duration-300">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROPUESTA DE VALOR — Editorial grid
   ═══════════════════════════════════════════ */

function PropuestaValor() {
  const cards = [
    {
      badge: "Confianza",
      title: "Reduce el riesgo al contratar",
      desc: "Cada egresada tiene un certificado digital con QR verificable. Confirma competencias reales antes de contratar.",
      gradient: "from-terracotta to-dusk",
      iconBg: "from-terracotta/8 to-coral/4",
      icon: <IconShield c="w-6 h-6" />,
    },
    {
      badge: "Formacion",
      title: "Capacitacion integral y comprobable",
      desc: "Limpieza, organizacion, cocina basica, manejo de productos y protocolos de seguridad. Evaluacion con checklist en escenarios reales.",
      gradient: "from-teal to-teal-light",
      iconBg: "from-teal/6 to-teal-light/3",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" /></svg>,
    },
    {
      badge: "Conexion",
      title: "Accede a personal certificado",
      desc: "Nuestra bolsa laboral te conecta con egresadas verificadas, con perfil profesional y evaluacion aprobada.",
      gradient: "from-gold to-ochre",
      iconBg: "from-gold/6 to-amber/3",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
    },
  ];

  return (
    <section id="beneficios" className="py-32 sm:py-44 relative overflow-hidden">
      {/* Layered desert bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-cream/35 to-bg" />
      <div className="absolute inset-0 desert-texture" />
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] rounded-full bg-peach/4 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mb-24 sm:mb-32">
          <div>
            <div className="accent-line mb-6" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal/28 mb-5">Por que CertiHogar</p>
            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4.4rem] font-extrabold text-fg leading-[0.9] tracking-tight">
              Contrata con mas{" "}
              <em className="text-terracotta not-italic font-display" style={{ fontStyle: "italic" }}>respaldo</em>
            </h2>
          </div>
          <div className="flex items-end lg:pb-3">
            <p className="font-editorial text-[18px] md:text-[20px] text-fg/30 leading-[1.7] max-w-md lg:ml-auto italic">
              CertiHogar reduce el riesgo de contratar personal no verificado. Capacitamos, evaluamos y certificamos con respaldo comprobable en Ciudad de Mexico.
            </p>
          </div>
        </div>

        {/* Premium cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c, i) => (
            <div key={c.title} className={`group relative bg-white/85 hover:bg-white rounded-[2rem] p-9 sm:p-10 border border-sand/12 hover:border-sand/30 card-glow ${i === 1 ? "md:-mt-6" : ""}`}>
              {/* Top accent gradient */}
              <div className={`absolute top-0 inset-x-6 h-[2.5px] rounded-full bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-600`} />

              <span className="inline-block text-[9px] font-bold uppercase tracking-[0.18em] text-fg/16 bg-gradient-to-r from-sand/25 to-sand/10 rounded-full px-4 py-1.5 mb-8">
                {c.badge}
              </span>

              {/* Icon with double-layer effect */}
              <div className="relative mb-7">
                <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${c.iconBg} rotate-6 group-hover:rotate-0 transition-transform duration-500`} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-500`}>
                  <span className="text-white">{c.icon}</span>
                </div>
              </div>

              <h3 className="text-[18px] font-bold text-fg mb-3 tracking-tight leading-snug">{c.title}</h3>
              <p className="text-[14px] text-fg/28 leading-[1.85]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BENEFICIOS (Split layout)
   ═══════════════════════════════════════════ */

function Beneficios() {
  const left = [
    { title: "Contrata con confianza", desc: "Verifica competencias con certificados digitales escaneables antes de contratar.", icon: <IconShield c="w-4.5 h-4.5" /> },
    { title: "Profesionaliza a tu personal", desc: "Tu personal mejora su desempeno con formacion estructurada y evaluacion real.", icon: <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg> },
    { title: "Reduce riesgos", desc: "Personal capacitado en protocolos de seguridad, manejo de productos y cuidado del hogar.", icon: <IconCheck c="w-4.5 h-4.5" /> },
  ];
  const right = [
    { title: "Certificacion profesional", desc: "Un certificado digital verificable que la distingue en el mercado laboral.", icon: <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg> },
    { title: "Acceso a bolsa laboral", desc: "Perfil profesional y acceso a familias que buscan personal certificado en CDMX.", icon: <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
    { title: "Mejores oportunidades", desc: "Formacion que eleva su perfil y accede a mejores condiciones laborales.", icon: <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
  ];

  function Col({ title, subtitle, accentColor, iconColor, items }: { title: string; subtitle: string; accentColor: string; iconColor: string; items: typeof left }) {
    return (
      <div>
        <div className="mb-8">
          <div className={`w-10 h-1 rounded-full ${accentColor} mb-4 opacity-40`} />
          <h3 className="text-[20px] font-display font-bold text-fg tracking-tight">{title}</h3>
          <p className="text-[12px] text-fg/18 mt-1.5 font-medium">{subtitle}</p>
        </div>
        <div className="space-y-3.5">
          {items.map(b => (
            <div key={b.title} className="group flex gap-4 bg-white/70 hover:bg-white rounded-2xl p-5 border border-sand/8 hover:border-sand/22 card-lift">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentColor.includes("terracotta") ? "from-terracotta/6 to-coral/3" : "from-teal/5 to-teal-light/2"} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                <span className={iconColor}>{b.icon}</span>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-fg mb-1 tracking-tight">{b.title}</h4>
                <p className="text-[13px] text-fg/24 leading-[1.75]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-32 sm:py-44 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-warm to-bg" />
      <div className="absolute inset-0 desert-texture" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] rounded-full bg-terracotta/2 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <div className="accent-line mx-auto mb-6" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-dusk/28 mb-5">Beneficios</p>
          <h2 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4.4rem] font-extrabold text-fg leading-[0.9] tracking-tight">
            Para todos los involucrados
          </h2>
          <p className="font-editorial text-[18px] text-fg/25 mt-5 italic leading-[1.7]">
            Capacitacion que fortalece ambos lados de la relacion laboral.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
          <Col title="Para familias y empleadores" subtitle="Mas seguridad y profesionalismo en tu hogar" accentColor="bg-terracotta" iconColor="text-terracotta" items={left} />
          <Col title="Para trabajadoras certificadas" subtitle="Mejor perfil y mejores oportunidades" accentColor="bg-teal" iconColor="text-teal" items={right} />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COMO FUNCIONA — 4 steps editorial
   ═══════════════════════════════════════════ */

function ComoFunciona() {
  const steps = [
    {
      n: "01",
      title: "Solicita informacion",
      desc: "Contactanos por formulario o WhatsApp. Te explicamos el proceso y resolvemos tus dudas.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
    },
    {
      n: "02",
      title: "Inscripcion a capacitacion",
      desc: "Elige tu paquete e inscribe a tu personal en sesiones flexibles adaptadas a su horario.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" /></svg>,
    },
    {
      n: "03",
      title: "Evaluacion y certificacion",
      desc: "Evaluacion practica con checklist detallado en escenarios reales. Certificado digital con QR verificable.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
    },
    {
      n: "04",
      title: "Acceso a bolsa laboral",
      desc: "Perfil profesional y conexion con familias que buscan personal certificado en CDMX.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
    },
  ];

  return (
    <section id="proceso" className="py-32 sm:py-44 relative overflow-hidden">
      {/* Warm desert bg with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF3E4] via-bg-warm to-bg-cream/25" />
      <div className="absolute inset-0 desert-texture" />
      <div className="absolute top-0 right-0 w-[600px] h-[450px] rounded-full bg-peach/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[350px] rounded-full bg-teal/3 blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 grain opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <div className="accent-line mx-auto mb-6" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta/22 mb-5">Proceso simple</p>
          <h2 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4.4rem] font-extrabold text-fg leading-[0.9] tracking-tight">
            Cuatro pasos sencillos
          </h2>
          <p className="font-editorial text-[18px] text-fg/25 mt-5 italic leading-[1.7]">
            De la solicitud al certificado verificable, sin complicaciones.
          </p>
        </div>

        {/* Steps grid with connector */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group text-center">
              {/* Connector line (desktop only) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-[3.5rem] left-[calc(50%+2.8rem)] w-[calc(100%-5.6rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-sand-dark/22 via-terracotta/8 to-sand-dark/4" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sand-dark/15 border border-sand-dark/8" />
                </div>
              )}

              {/* Icon container — triple-layer */}
              <div className="relative mx-auto w-[5rem] h-[5rem] mb-9">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-terracotta/5 to-gold/3 rotate-6 group-hover:rotate-0 transition-transform duration-600 scale-105" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-terracotta/8 to-coral/4 rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute inset-[4px] rounded-[14px] bg-gradient-to-br from-terracotta via-dusk to-terracotta-dark flex items-center justify-center shadow-xl shadow-terracotta/15 group-hover:shadow-terracotta/25 transition-all duration-500 group-hover:scale-105">
                  <span className="text-white">{s.icon}</span>
                </div>
                <span className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-xl bg-bg-cream border-2 border-white text-[10px] font-extrabold text-terracotta/50 flex items-center justify-center shadow-md">
                  {s.n}
                </span>
              </div>

              <h3 className="text-[17px] font-bold text-fg mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[13.5px] text-fg/24 leading-[1.8] max-w-[260px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-18 text-center">
          <a href="#contacto" className="inline-flex items-center gap-2.5 text-terracotta font-bold text-[14px] hover:gap-4 transition-all duration-500 group link-hover">
            Comienza tu proceso hoy
            <IconArrow c="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TESTIMONIOS — Premium social proof
   ═══════════════════════════════════════════ */

function Testimonios() {
  const data = [
    { name: "Maria G.", role: "Empleadora en Polanco", text: "Desde que mi empleada completo la certificacion de CertiHogar, la organizacion y limpieza en casa mejoraron notablemente. El certificado me da confianza total.", initials: "MG", grad: "from-terracotta/10 to-coral/5", border: "border-terracotta/8" },
    { name: "Lupita R.", role: "Egresada certificada", text: "El curso me dio herramientas que no conocia. Ahora tengo mi certificado y consegui un mejor empleo gracias a la bolsa laboral. Se los recomiendo.", initials: "LR", grad: "from-teal/8 to-teal-light/4", border: "border-teal/6" },
    { name: "Roberto M.", role: "Pequena agencia de servicios", text: "Certificar a nuestro equipo nos diferencio de la competencia. Los clientes valoran mucho que presentemos personal con certificacion verificable.", initials: "RM", grad: "from-gold/10 to-amber/5", border: "border-gold/8" },
  ];

  return (
    <section id="testimonios" className="py-32 sm:py-44 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-warm via-bg to-bg-warm" />
      <div className="absolute inset-0 desert-texture" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-peach/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header with badges */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 sm:mb-24">
          <div>
            <div className="accent-line mb-6" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-dusk/28 mb-5">Prueba social</p>
            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4.4rem] font-extrabold text-fg leading-[0.9] tracking-tight">
              Quienes ya confian
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["Certificacion verificable", "Evaluacion practica", "CDMX"].map(b => (
              <span key={b} className="inline-flex items-center gap-2 bg-white/50 border border-sand/15 rounded-full px-4 py-2 text-[10px] font-bold text-fg/18 hover:bg-white/70 transition-colors duration-300 cursor-default">
                <IconCheck c="w-3 h-3 text-teal/35" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {data.map(t => (
            <div key={t.name} className="group bg-white/80 hover:bg-white rounded-[2rem] p-9 border border-sand/10 hover:border-sand/25 card-glow relative">
              {/* Quote mark */}
              <span className="absolute top-7 right-8 font-editorial text-[60px] text-sand/20 leading-none select-none">&ldquo;</span>

              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {[...Array(5)].map((_, i) => <IconStar key={i} c="w-4 h-4 text-gold group-hover:text-amber transition-colors duration-300" />)}
              </div>

              <p className="font-editorial text-[16px] text-fg/38 leading-[1.8] italic relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-8 pt-7 border-t border-sand/10 flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.grad} border-2 ${t.border} flex items-center justify-center text-fg/30 text-[11px] font-bold group-hover:scale-105 transition-transform duration-300`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-bold text-fg">{t.name}</p>
                  <p className="text-[11px] text-fg/20 mt-0.5 font-medium">{t.role}</p>
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
   PRECIOS — Premium pricing cards
   ═══════════════════════════════════════════ */

function Precios() {
  const plans = [
    { name: "Individual", price: "$1,490", sub: "1 persona", features: ["Curso base completo", "Evaluacion practica", "Certificado digital", "Perfil laboral"], pop: false },
    { name: "Duo", price: "$2,690", sub: "2 personas", features: ["Curso base completo", "Evaluacion practica", "Certificado digital", "Perfil laboral", "Ahorro de $290"], pop: true },
    { name: "Equipo", price: "$3,790", sub: "3 personas", features: ["Curso base completo", "Evaluacion practica", "Certificado digital", "Perfil laboral", "Ahorro de $680"], pop: false },
    { name: "Agencia", price: "Desde $6,900", sub: "5 personas", features: ["Curso base completo", "Evaluacion practica", "Certificados digitales", "Perfiles laborales", "Precio preferencial"], pop: false },
  ];

  return (
    <section id="precios" className="py-32 sm:py-44 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-cream/30 via-bg to-peach-light/5" />
      <div className="absolute inset-0 desert-texture" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-coral/3 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 grain opacity-25" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <div className="accent-line mx-auto mb-6" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta/22 mb-5">Inversion</p>
          <h2 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4.4rem] font-extrabold text-fg leading-[0.9] tracking-tight">
            Paquetes y precios
          </h2>
          <p className="font-editorial text-[18px] text-fg/25 mt-5 italic leading-[1.7]">
            Planes claros para familias, empleadores y pequenas agencias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {plans.map(p => (
            <div key={p.name} className={`relative rounded-[2rem] flex flex-col transition-all duration-600 ${
              p.pop
                ? "bg-gradient-to-b from-[#2C1808] via-[#1B0E04] to-[#2C1808] text-white shadow-2xl shadow-fg/20 ring-1 ring-white/5 scale-[1.04] z-10 p-8 sm:p-9 hover:-translate-y-3"
                : "bg-white/85 hover:bg-white border border-sand/12 hover:border-sand/30 shadow-sm hover:shadow-2xl p-7 sm:p-8 hover:-translate-y-2"
            }`}>
              {p.pop && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-terracotta via-coral to-terracotta text-white text-[9px] font-extrabold px-6 py-1.5 rounded-full shadow-lg shadow-terracotta/20 uppercase tracking-[0.14em]">
                  Mas popular
                </span>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-[17px] font-bold ${p.pop ? "text-white" : "text-fg"}`}>{p.name}</h3>
                <p className={`text-[12px] mt-1 font-medium ${p.pop ? "text-white/20" : "text-fg/16"}`}>{p.sub}</p>
              </div>

              {/* Price */}
              <div className="mb-7 pb-7 border-b" style={{ borderColor: p.pop ? "rgba(255,255,255,0.06)" : "rgba(228,212,188,0.25)", borderStyle: "dashed" }}>
                <span className={`text-[2rem] font-extrabold tracking-tight ${p.pop ? "text-white" : "text-fg"}`}>{p.price}</span>
                <span className={`text-[11px] ml-1.5 font-medium ${p.pop ? "text-white/18" : "text-fg/15"}`}>MXN</span>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[13px]">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${p.pop ? "bg-white/5" : "bg-teal/4"}`}>
                      <IconCheck c={`w-3 h-3 ${p.pop ? "text-white/30" : "text-teal/35"}`} />
                    </div>
                    <span className={p.pop ? "text-white/45" : "text-fg/28"}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contacto" className={`mt-9 block text-center py-4 rounded-full font-bold text-[13px] transition-all duration-500 hover:-translate-y-1 ${
                p.pop
                  ? "btn-shine bg-gradient-to-r from-white to-white/95 text-fg hover:from-white/95 hover:to-white shadow-lg shadow-white/8"
                  : "bg-gradient-to-r from-sand/30 to-sand/20 text-fg hover:from-terracotta/10 hover:to-coral/8 hover:text-terracotta"
              }`}>
                Solicitar informacion
              </a>
            </div>
          ))}
        </div>

        {/* Extra pricing */}
        <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
          <div className="bg-white/80 hover:bg-white rounded-2xl px-8 py-6 border border-sand/12 text-center card-glow">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-fg/14">Recertificacion</span>
            <p className="text-[22px] font-extrabold text-fg mt-2">$590 <span className="text-[12px] font-medium text-fg/15">MXN</span></p>
            <p className="text-[11px] text-fg/18 mt-1">Evaluacion actualizada + nuevo certificado</p>
          </div>
          <div className="bg-white/80 hover:bg-white rounded-2xl px-8 py-6 border border-sand/12 text-center card-glow">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-fg/14">Bolsa laboral (sin paquete)</span>
            <p className="text-[22px] font-extrabold text-fg mt-2">$390 <span className="text-[12px] font-medium text-fg/15">MXN — cuota unica</span></p>
            <p className="text-[11px] text-fg/18 mt-1">Acceso a candidatas certificadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FAQ — Premium accordion
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
    <section id="faq" className="py-32 sm:py-44 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-warm via-bg-cream/12 to-bg-warm" />
      <div className="absolute inset-0 desert-texture" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16 sm:mb-22">
          <div className="accent-line mx-auto mb-6" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal/22 mb-5">Resolvemos tus dudas</p>
          <h2 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4.4rem] font-extrabold text-fg leading-[0.9] tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((f, i) => (
            <div key={i} className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
              open === i
                ? "bg-white border-terracotta/10 shadow-xl shadow-terracotta/4"
                : "bg-white/55 border-sand/8 hover:bg-white/80 hover:border-sand/18 hover:shadow-md"
            }`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left text-[15px] font-bold text-fg hover:text-terracotta transition-colors duration-300"
              >
                <span className="pr-5 leading-snug">{f.q}</span>
                <span className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                  open === i ? "bg-gradient-to-br from-terracotta to-terracotta-dark text-white rotate-180 shadow-md shadow-terracotta/12" : "bg-sand/20 text-fg/12 hover:bg-sand/35"
                }`}>
                  <IconChevron c="w-3 h-3" />
                </span>
              </button>
              <div className={`grid transition-all duration-500 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-7 pb-6 text-[14px] text-fg/28 leading-[1.85]">
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
   CONTACT FORM — Premium
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

  const inputCls = "w-full px-5 py-4 rounded-xl border border-sand/15 bg-white/70 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-terracotta/10 focus:border-terracotta/18 outline-none transition-all duration-400 text-[15px] placeholder:text-fg/10 shadow-sm focus:shadow-md";

  return (
    <section id="contacto" className="py-32 sm:py-44 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-warm to-bg" />
      <div className="absolute inset-0 desert-texture" />
      <div className="absolute top-0 right-0 w-[500px] h-[350px] rounded-full bg-peach/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-lg mx-auto">
          <div className="text-center">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta/22 mb-5">Contactanos</p>
            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4.4rem] font-extrabold text-fg leading-[0.9] tracking-tight">
              Solicita informacion
            </h2>
            <p className="font-editorial text-[18px] text-fg/25 mt-5 italic leading-[1.7]">
              Completa el formulario y nos pondremos en contacto a la brevedad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-14 space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-[9.5px] font-bold text-fg/32 mb-2 uppercase tracking-[0.14em]">Nombre completo</label>
              <input id="nombre" type="text" required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} className={inputCls} placeholder="Tu nombre" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsapp" className="block text-[9.5px] font-bold text-fg/32 mb-2 uppercase tracking-[0.14em]">WhatsApp</label>
                <input id="whatsapp" type="tel" required value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} className={inputCls} placeholder="+52 55 1234 5678" />
              </div>
              <div>
                <label htmlFor="correo" className="block text-[9.5px] font-bold text-fg/32 mb-2 uppercase tracking-[0.14em]">Correo</label>
                <input id="correo" type="email" required value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} className={inputCls} placeholder="tu@correo.com" />
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-[9.5px] font-bold text-fg/32 mb-2 uppercase tracking-[0.14em]">Mensaje</label>
              <textarea id="mensaje" rows={4} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} className={`${inputCls} resize-none`} placeholder="En que podemos ayudarte?" />
            </div>

            <button type="submit" disabled={status === "sending"} className="w-full btn-shine bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white font-bold py-4.5 rounded-full text-[15px] transition-all duration-500 shadow-xl shadow-terracotta/15 hover:shadow-2xl hover:shadow-terracotta/22 hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0">
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <div className="text-center py-4 px-6 rounded-xl bg-teal/4 border border-teal/8 anim-fade-in">
                <p className="text-teal font-bold text-[14px]">Mensaje enviado! Nos pondremos en contacto pronto.</p>
              </div>
            )}
            {status === "error" && (
              <div className="text-center py-4 px-6 rounded-xl bg-red-50 border border-red-100 anim-fade-in">
                <p className="text-red-600 font-medium text-[14px]">Hubo un error. Intenta de nuevo o escribenos por WhatsApp.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CTA FINAL — Desert night cinematic
   ═══════════════════════════════════════════ */

function CTAFinal() {
  return (
    <section className="relative overflow-hidden">
      {/* Deep desert night */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B0E04] via-[#2C1808] to-[#14100A]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-terracotta/5 via-transparent to-gold/4" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-teal/2 to-transparent" />

      {/* Warm night glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-terracotta/4 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-[15%] w-[350px] h-[350px] rounded-full bg-gold/3 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-[20%] w-[300px] h-[250px] rounded-full bg-coral/3 blur-[100px] pointer-events-none" />

      {/* Sun glow at top */}
      <SunGlow className="absolute top-[-5%] right-[8%] w-[300px] h-[300px] anim-spin-slow opacity-25" />

      {/* Desert horizon */}
      <DesertHorizon className="absolute bottom-[15%] left-0 right-0 w-full h-36 opacity-30" />

      {/* Grain + texture */}
      <div className="absolute inset-0 grain opacity-25" />
      <div className="absolute inset-0 desert-texture opacity-50" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-32 sm:py-44 text-center">
        <div className="accent-line mx-auto mb-8 opacity-30" />
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/10 mb-7">Da el primer paso</p>
        <h2 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4.6rem] font-extrabold text-white leading-[0.9] tracking-tight">
          Profesionaliza a tu personal del hogar <em className="not-italic text-peach/50 font-display" style={{ fontStyle: "italic" }}>hoy</em>
        </h2>
        <p className="mt-8 font-editorial text-[18px] md:text-[20px] text-white/22 max-w-lg mx-auto leading-[1.75] italic">
          Unete a las familias y empleadores que ya confian en CertiHogar para capacitar, certificar y conectar con personal calificado en CDMX.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contacto" className="w-full sm:w-auto group btn-shine bg-gradient-to-r from-terracotta to-coral text-white font-bold px-11 py-4.5 rounded-full text-[15px] transition-all duration-500 shadow-xl shadow-terracotta/15 hover:shadow-2xl hover:shadow-terracotta/25 hover:-translate-y-1.5 flex items-center justify-center gap-3">
            Solicitar informacion
            <IconArrow c="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/4 hover:bg-white/8 text-white/45 font-semibold px-10 py-4.5 rounded-full text-[15px] transition-all duration-500 border border-white/5 hover:border-white/12 hover:-translate-y-1 group">
            <IconWA c="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER — Refined
   ═══════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-[#0C0704] text-white/22 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-terracotta to-dusk flex items-center justify-center">
                <IconShield c="w-4 h-4 text-white" />
              </span>
              <span className="font-display text-[17px] font-bold text-white/45">CertiHogar</span>
            </div>
            <p className="text-[12px] leading-[1.8] text-white/14 max-w-[240px]">
              Capacitacion y certificacion de personal del hogar en Ciudad de Mexico. Formacion practica, verificable y profesional.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white/32 mb-4 text-[9px] uppercase tracking-[0.18em]">Navegacion</h4>
            <ul className="space-y-3 text-[12px]">
              {[["#beneficios", "Beneficios"], ["#proceso", "Como funciona"], ["#precios", "Precios"], ["#faq", "FAQ"]].map(([h, l]) => (
                <li key={h}><a href={h} className="hover:text-peach transition-colors duration-300">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white/32 mb-4 text-[9px] uppercase tracking-[0.18em]">Contacto</h4>
            <ul className="space-y-3 text-[12px]">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white/32 mb-4 text-[9px] uppercase tracking-[0.18em]">WhatsApp</h4>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/3 hover:bg-white/7 flex items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/3" aria-label="WhatsApp">
              <IconWA c="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/3 text-center text-[10.5px] text-white/8">
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
