"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/0000000000?text=Hola%2C%20quiero%20información%20sobre%20CertiHogar";

/* ─── Icons (inline SVG helpers) ─── */

function CheckCircle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
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
    <nav className="sticky top-0 z-50 bg-[#FBF6F0]/80 backdrop-blur-xl border-b border-[#E0D5C7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-terracotta to-coral flex items-center justify-center">
            <ShieldIcon className="w-5 h-5 text-white" />
          </span>
          <span className="font-display text-2xl font-bold text-deep tracking-tight">
            CertiHogar
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 text-[13px] font-semibold tracking-wide uppercase text-foreground/60">
          <a href="#beneficios" className="hover:text-terracotta transition-colors duration-200">
            Beneficios
          </a>
          <a href="#como-funciona" className="hover:text-terracotta transition-colors duration-200">
            Proceso
          </a>
          <a href="#certificacion" className="hover:text-terracotta transition-colors duration-200">
            Certificación
          </a>
          <a href="#precios" className="hover:text-terracotta transition-colors duration-200">
            Precios
          </a>
          <a href="#testimonios" className="hover:text-terracotta transition-colors duration-200">
            Testimonios
          </a>
          <a href="#faq" className="hover:text-terracotta transition-colors duration-200">
            FAQ
          </a>
          <a
            href="#contacto"
            className="bg-gradient-to-r from-terracotta to-coral text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-terracotta/25 transition-all duration-300 hover:-translate-y-0.5 normal-case text-sm tracking-normal"
          >
            Contacto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-sand transition"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
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
        <div className="md:hidden border-t border-[#E0D5C7]/60 bg-[#FBF6F0]/95 backdrop-blur-xl px-4 pb-5 pt-3 space-y-1 animate-fade-in">
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
              className="block py-3 px-4 text-foreground/70 font-medium rounded-xl hover:bg-sand transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="block bg-gradient-to-r from-terracotta to-coral text-white text-center py-3 rounded-full font-semibold mt-3"
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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Multi-layer sunset gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5C6A8] via-[#FADED0] to-[#F3EBE0]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#E89B7B]/30 via-transparent to-[#C9A96E]/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBF6F0]" />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F2D4A7]/40 to-[#E89B7B]/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#4A7C7E]/10 to-[#C9A96E]/15 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-[20%] w-64 h-64 rounded-full bg-[#F5C6A8]/30 blur-2xl animate-pulse-soft" />

      {/* Subtle geometric accents */}
      <div className="absolute top-32 right-[15%] w-px h-32 bg-gradient-to-b from-terracotta/20 to-transparent hidden lg:block" />
      <div className="absolute top-40 right-[14%] w-px h-20 bg-gradient-to-b from-gold/30 to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse-soft" />
            <span className="text-sm font-semibold text-teal tracking-wide">
              Capacitación certificada en CDMX
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] text-deep tracking-tight">
            Capacita y certifica a tu{" "}
            <span className="relative">
              <span className="relative z-10 text-terracotta">personal del hogar</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/30 -z-0 rounded-sm" />
            </span>{" "}
            con respaldo práctico y verificable
          </h1>

          <p className="mt-8 text-lg md:text-xl text-deep/65 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            En CertiHogar ayudamos a familias y empleadores de Ciudad de México a
            profesionalizar a su personal del hogar con formación práctica, evaluación real
            y acceso a una bolsa laboral de egresadas certificadas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up delay-300">
            <a
              href="#contacto"
              className="w-full sm:w-auto group bg-gradient-to-r from-terracotta to-[#D4603A] hover:from-primary-dark hover:to-terracotta text-white font-semibold px-9 py-4.5 rounded-full text-lg transition-all duration-300 shadow-xl shadow-terracotta/20 hover:shadow-2xl hover:shadow-terracotta/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Solicitar información
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/70 hover:bg-white backdrop-blur-md text-deep font-semibold px-9 py-4.5 rounded-full text-lg transition-all duration-300 border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-600" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Trust metrics */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up delay-400">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <ShieldIcon className="w-4 h-4 text-teal" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-deep/40">Certificación</p>
              <p className="text-xs text-deep/40 mt-0.5">verificable</p>
            </div>
            <div className="text-center border-x border-deep/10">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <StarIcon className="w-4 h-4 text-gold" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-deep/40">Evaluación</p>
              <p className="text-xs text-deep/40 mt-0.5">práctica real</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <UsersIcon className="w-4 h-4 text-coral" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-deep/40">Bolsa laboral</p>
              <p className="text-xs text-deep/40 mt-0.5">incluida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const items = [
    {
      title: "Para familias",
      icon: "home",
      gradient: "from-[#4A7C7E] to-[#6A9FA1]",
      list: [
        "Personal capacitado con estándares verificables",
        "Mayor confianza y tranquilidad en casa",
        "Acceso a egresadas certificadas por bolsa laboral",
        "Respaldo documental de la formación",
      ],
    },
    {
      title: "Para empleadores y agencias",
      icon: "briefcase",
      gradient: "from-terracotta to-coral",
      list: [
        "Profesionalización del personal a su cargo",
        "Diferenciación competitiva con certificación",
        "Paquetes grupales con precios accesibles",
        "Proceso claro y evaluación práctica real",
      ],
    },
  ];

  return (
    <section id="beneficios" className="py-28 bg-warm-white relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-peach/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal bg-teal/8 px-4 py-1.5 rounded-full mb-5">
            Propuesta de valor
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-deep leading-tight">
            ¿Por qué elegir CertiHogar?
          </h2>
          <p className="mt-5 text-foreground/55 text-lg leading-relaxed">
            Ofrecemos un proceso integral de capacitación, evaluación práctica y
            certificación diseñado para elevar el estándar del trabajo del hogar.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {items.map((group) => (
            <div
              key={group.title}
              className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-sand-dark/40 shadow-sm hover:shadow-xl hover:shadow-terracotta/5 transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${group.gradient} opacity-60`} />

              <h3 className="text-xl font-bold text-deep mb-7 flex items-center gap-3">
                <span className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-sm`}>
                  {group.icon === "home" ? (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  )}
                </span>
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-teal" />
                    </span>
                    <span className="text-foreground/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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
      desc: "Llena el formulario o escríbenos por WhatsApp. Selecciona el paquete adecuado e inscribe a tu personal al curso.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Capacitación y evaluación",
      desc: "Tu personal completa el curso base y realiza una evaluación práctica con checklist. Al aprobar, recibe su certificado digital verificable.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Certificación y bolsa laboral",
      desc: "Las egresadas obtienen su certificado digital con QR verificable, perfil profesional y acceso a nuestra bolsa laboral.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="py-28 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand via-[#FBF6F0] to-sand" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-peach/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-terracotta bg-terracotta/8 px-4 py-1.5 rounded-full mb-5">
            Proceso simple
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-deep leading-tight">
            ¿Cómo funciona?
          </h2>
          <p className="mt-5 text-foreground/55 text-lg">
            Un proceso transparente en 3 pasos.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <div key={s.num} className="relative group">
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-14 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-terracotta/25 to-gold/25" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/40" />
                </div>
              )}

              <div className="bg-white rounded-[2rem] p-8 text-center border border-sand-dark/40 shadow-sm hover:shadow-xl hover:shadow-terracotta/5 transition-all duration-500 hover:-translate-y-1">
                {/* Step number + icon */}
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terracotta/10 to-coral/10 group-hover:from-terracotta/20 group-hover:to-coral/20 transition-colors duration-500" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-terracotta to-coral flex items-center justify-center shadow-lg shadow-terracotta/15 group-hover:shadow-xl group-hover:shadow-terracotta/25 transition-all duration-500">
                    <span className="text-white">{s.icon}</span>
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-sand-dark/40 flex items-center justify-center text-xs font-bold text-terracotta shadow-sm">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-deep mb-3">
                  {s.title}
                </h3>
                <p className="text-foreground/55 leading-relaxed text-[15px]">
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
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.645 6.374 1.766m0-13.724A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.534v14.534" />
        </svg>
      ),
    },
    {
      title: "Evaluación práctica con checklist",
      desc: "Evaluación en escenarios reales con un checklist detallado para garantizar competencia demostrable.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: "Certificado digital verificable",
      desc: "Al aprobar, cada persona recibe un certificado digital con código QR verificable por cualquier empleador.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      highlight: true,
    },
    {
      title: "Perfil laboral de egresada",
      desc: "Cada egresada certificada obtiene un perfil profesional con sus competencias y certificación visible.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: "Bolsa laboral básica",
      desc: "Conectamos a familias y empleadores con egresadas certificadas a través de nuestra plataforma de bolsa laboral.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="certificacion" className="py-28 bg-warm-white relative">
      <div className="absolute bottom-0 left-0 w-[600px] h-[300px] rounded-full bg-gradient-to-tr from-teal/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold bg-gold/10 px-4 py-1.5 rounded-full mb-5">
            Programa completo
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-deep leading-tight">
            Capacitación y certificación
          </h2>
          <p className="mt-5 text-foreground/55 text-lg leading-relaxed">
            Nuestro programa incluye todo lo necesario para profesionalizar al
            personal del hogar.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 ${
                f.highlight
                  ? "bg-gradient-to-br from-[#4A7C7E] to-[#3D6668] text-white shadow-xl shadow-teal/15 sm:col-span-2 lg:col-span-1 ring-1 ring-teal/20"
                  : "bg-white border border-sand-dark/40 shadow-sm hover:shadow-xl hover:shadow-terracotta/5"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                f.highlight
                  ? "bg-white/15 backdrop-blur-sm"
                  : "bg-gradient-to-br from-sand to-sand-dark/30"
              }`}>
                <span className={f.highlight ? "text-white" : "text-terracotta"}>
                  {f.icon}
                </span>
              </div>
              <h3 className={`text-lg font-bold mb-3 ${f.highlight ? "text-white" : "text-deep"}`}>
                {f.title}
              </h3>
              <p className={`text-[15px] leading-relaxed ${f.highlight ? "text-white/80" : "text-foreground/55"}`}>
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
        "Precio preferencial por volumen",
      ],
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-28 relative overflow-hidden">
      {/* Sunset gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3EBE0] via-[#FBF6F0] to-[#F5C6A8]/20" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-gradient-to-bl from-coral/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-terracotta bg-terracotta/8 px-4 py-1.5 rounded-full mb-5">
            Inversión
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-deep leading-tight">
            Paquetes y precios
          </h2>
          <p className="mt-5 text-foreground/55 text-lg">
            Planes diseñados para familias, empleadores particulares y pequeñas agencias.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-[2rem] p-7 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                p.popular
                  ? "bg-gradient-to-br from-terracotta via-[#D4603A] to-coral text-white shadow-2xl shadow-terracotta/25 ring-1 ring-white/10 scale-[1.03] z-10"
                  : "bg-white border border-sand-dark/40 shadow-sm hover:shadow-xl hover:shadow-terracotta/5"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-gold text-deep text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-gold/20">
                  Más popular
                </span>
              )}
              <div className="mb-5">
                <h3 className={`text-lg font-bold ${p.popular ? "text-white" : "text-deep"}`}>
                  {p.name}
                </h3>
                <p className={`text-sm mt-1 ${p.popular ? "text-white/60" : "text-foreground/45"}`}>{p.desc}</p>
              </div>
              <div className="mb-6 pb-6 border-b border-dashed" style={{ borderColor: p.popular ? "rgba(255,255,255,0.2)" : "rgba(224,213,199,0.6)" }}>
                <span className={`text-4xl font-bold tracking-tight ${p.popular ? "text-white" : "text-deep"}`}>
                  {p.price}
                </span>
                <span className={`text-sm ml-1.5 ${p.popular ? "text-white/60" : "text-foreground/40"}`}>{p.unit}</span>
              </div>
              <ul className="space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${p.popular ? "text-white/70" : "text-teal"}`} />
                    <span className={p.popular ? "text-white/85" : "text-foreground/65"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-8 block text-center py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  p.popular
                    ? "bg-white text-terracotta hover:bg-white/90 shadow-lg shadow-black/10"
                    : "bg-gradient-to-r from-terracotta/10 to-coral/10 text-terracotta hover:from-terracotta/20 hover:to-coral/20"
                }`}
              >
                Solicitar información
              </a>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
          <div className="bg-white rounded-2xl px-8 py-6 border border-sand-dark/40 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground/40">Recertificación</span>
            <p className="text-2xl font-bold text-deep mt-2">$590 <span className="text-sm font-normal text-foreground/40">MXN</span></p>
          </div>
          <div className="bg-white rounded-2xl px-8 py-6 border border-sand-dark/40 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground/40">
              Acceso a bolsa laboral (sin paquete)
            </span>
            <p className="text-2xl font-bold text-deep mt-2">
              $390 <span className="text-sm font-normal text-foreground/40">MXN — cuota única</span>
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
      color: "from-teal to-teal-light",
    },
    {
      name: "Lupita R.",
      role: "Egresada certificada",
      text: "El curso me dio herramientas que no conocía. Ahora tengo mi certificado y conseguí un mejor empleo gracias a la bolsa laboral. ¡Se los recomiendo!",
      initials: "LR",
      color: "from-terracotta to-coral",
    },
    {
      name: "Roberto M.",
      role: "Pequeña agencia de servicios",
      text: "Certificar a nuestro equipo nos diferenció de la competencia. Los clientes valoran mucho que presentemos personal con certificación verificable.",
      initials: "RM",
      color: "from-gold to-accent",
    },
  ];

  return (
    <section id="testimonios" className="py-28 bg-warm-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-b from-peach/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-coral bg-coral/10 px-4 py-1.5 rounded-full mb-5">
            Prueba social
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-deep leading-tight">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-foreground/30 text-sm">
          <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2 border border-sand-dark/40 shadow-sm">
            <ShieldIcon className="w-4 h-4 text-teal" />
            <span className="font-medium text-foreground/50">Certificación verificable</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2 border border-sand-dark/40 shadow-sm">
            <StarIcon className="w-4 h-4 text-gold" />
            <span className="font-medium text-foreground/50">Evaluación real</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2 border border-sand-dark/40 shadow-sm">
            <UsersIcon className="w-4 h-4 text-coral" />
            <span className="font-medium text-foreground/50">Bolsa laboral activa</span>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-white rounded-[2rem] p-8 border border-sand-dark/40 shadow-sm hover:shadow-xl hover:shadow-terracotta/5 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground/65 leading-relaxed text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-7 pt-6 border-t border-sand-dark/40 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-deep text-sm">{t.name}</p>
                  <p className="text-xs text-foreground/45">{t.role}</p>
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
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sand via-[#FBF6F0] to-sand" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal bg-teal/8 px-4 py-1.5 rounded-full mb-5">
            Resolvemos tus dudas
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-deep leading-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIdx === i
                  ? "border-terracotta/20 shadow-lg shadow-terracotta/5"
                  : "border-sand-dark/40 shadow-sm hover:shadow-md"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5.5 text-left font-medium text-deep hover:text-terracotta transition-colors duration-200"
              >
                <span className="pr-4">{f.q}</span>
                <span className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                  openIdx === i ? "bg-terracotta text-white rotate-180" : "bg-sand text-terracotta/50"
                }`}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIdx === i && (
                <div className="px-7 pb-6 text-foreground/55 leading-relaxed animate-fade-in">
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

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
    <section id="contacto" className="py-28 bg-warm-white relative">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-peach/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-terracotta bg-terracotta/8 px-4 py-1.5 rounded-full mb-5">
              Contáctanos
            </span>
            <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-deep leading-tight">
              Solicita información
            </h2>
            <p className="mt-5 text-foreground/55 text-lg">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-deep mb-2">
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border border-sand-dark/60 bg-white focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta outline-none transition-all duration-200 shadow-sm"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-deep mb-2">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-sand-dark/60 bg-white focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta outline-none transition-all duration-200 shadow-sm"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="correo" className="block text-sm font-semibold text-deep mb-2">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  type="email"
                  required
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-sand-dark/60 bg-white focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta outline-none transition-all duration-200 shadow-sm"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-deep mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border border-sand-dark/60 bg-white focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta outline-none transition-all duration-200 resize-none shadow-sm"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-terracotta to-[#D4603A] hover:from-primary-dark hover:to-terracotta text-white font-semibold py-4.5 rounded-full transition-all duration-300 shadow-xl shadow-terracotta/15 hover:shadow-2xl hover:shadow-terracotta/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <div className="text-center py-4 px-6 rounded-2xl bg-teal/10 border border-teal/20 animate-fade-in">
                <p className="text-teal font-semibold">
                  ¡Mensaje enviado! Nos pondremos en contacto pronto.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="text-center py-4 px-6 rounded-2xl bg-red-50 border border-red-200 animate-fade-in">
                <p className="text-red-600 font-medium">
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
      {/* Multi-layer sunset gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A1810] via-[#C2542D] to-[#C9A96E]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810]/40 via-transparent to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-10 right-[10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl animate-float" />
      <div className="absolute bottom-10 left-[10%] w-[300px] h-[300px] rounded-full bg-[#C9A96E]/20 blur-3xl animate-float-delayed" />

      {/* Subtle lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-6">
          Comienza hoy
        </span>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Profesionaliza a tu personal del hogar hoy
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Únete a las familias y empleadores que ya confían en CertiHogar para
          capacitar, certificar y conectar con personal del hogar calificado.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto group bg-white text-terracotta hover:bg-white/90 font-semibold px-9 py-4.5 rounded-full text-lg transition-all duration-300 shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Solicitar información
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-9 py-4.5 rounded-full text-lg transition-all duration-300 border border-white/20 hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1A0E08] text-white/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-terracotta to-coral flex items-center justify-center">
                <ShieldIcon className="w-4 h-4 text-white" />
              </span>
              <span className="font-display text-xl font-bold text-white">CertiHogar</span>
            </div>
            <p className="text-sm leading-relaxed text-white/45">
              Capacitación y certificación de personal del hogar en Ciudad de
              México. Formación práctica, verificable y profesional.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#beneficios" className="hover:text-peach transition-colors duration-200">Beneficios</a></li>
              <li><a href="#como-funciona" className="hover:text-peach transition-colors duration-200">Cómo funciona</a></li>
              <li><a href="#certificacion" className="hover:text-peach transition-colors duration-200">Certificación</a></li>
              <li><a href="#precios" className="hover:text-peach transition-colors duration-200">Precios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2.5 text-sm">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/8 hover:bg-terracotta/40 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/8 text-center text-sm text-white/30">
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
