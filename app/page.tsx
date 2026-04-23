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
    <nav className="sticky top-0 z-50 bg-[#FDF8F3]/90 backdrop-blur-md border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-bold text-terracotta tracking-tight">
          CertiHogar
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#beneficios" className="hover:text-terracotta transition">
            Beneficios
          </a>
          <a href="#como-funciona" className="hover:text-terracotta transition">
            Cómo funciona
          </a>
          <a href="#certificacion" className="hover:text-terracotta transition">
            Certificación
          </a>
          <a href="#precios" className="hover:text-terracotta transition">
            Precios
          </a>
          <a href="#testimonios" className="hover:text-terracotta transition">
            Testimonios
          </a>
          <a href="#faq" className="hover:text-terracotta transition">
            FAQ
          </a>
          <a
            href="#contacto"
            className="bg-terracotta text-white px-5 py-2 rounded-full hover:bg-primary-dark transition shadow-sm"
          >
            Contacto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E8DDD0] bg-[#FDF8F3] px-4 pb-4 space-y-3 text-sm font-medium">
          <a href="#beneficios" className="block py-2 text-foreground/80" onClick={() => setOpen(false)}>
            Beneficios
          </a>
          <a href="#como-funciona" className="block py-2 text-foreground/80" onClick={() => setOpen(false)}>
            Cómo funciona
          </a>
          <a href="#certificacion" className="block py-2 text-foreground/80" onClick={() => setOpen(false)}>
            Certificación
          </a>
          <a href="#precios" className="block py-2 text-foreground/80" onClick={() => setOpen(false)}>
            Precios
          </a>
          <a href="#testimonios" className="block py-2 text-foreground/80" onClick={() => setOpen(false)}>
            Testimonios
          </a>
          <a href="#faq" className="block py-2 text-foreground/80" onClick={() => setOpen(false)}>
            FAQ
          </a>
          <a
            href="#contacto"
            className="block bg-terracotta text-white text-center py-2.5 rounded-full"
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
    <section className="relative overflow-hidden">
      {/* Desert sunset gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5C6A8] via-[#E8805A]/40 to-[#C9A96E]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FDF8F3] via-transparent to-transparent opacity-60" />

      {/* Subtle decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#F2D4A7]/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#E89B7B]/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta/80 mb-4">
            Capacitación certificada en CDMX
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-deep tracking-tight">
            Profesionaliza a tu personal del hogar
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep/75 max-w-2xl leading-relaxed">
            En CertiHogar ayudamos a familias y empleadores de Ciudad de México a
            profesionalizar a su personal del hogar con formación práctica, evaluación real
            y acceso a una bolsa laboral de egresadas certificadas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-terracotta hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-terracotta/25 hover:shadow-xl hover:shadow-terracotta/30"
            >
              Solicitar información
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/70 hover:bg-white backdrop-blur-sm text-deep font-semibold px-8 py-4 rounded-full text-lg transition border border-deep/10 shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-600" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-deep/50">
            <div className="flex items-center gap-2">
              <ShieldIcon className="w-5 h-5" />
              <span>Certificación verificable</span>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5" />
              <span>Evaluación práctica real</span>
            </div>
            <div className="flex items-center gap-2">
              <UsersIcon className="w-5 h-5" />
              <span>Bolsa laboral incluida</span>
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
      list: [
        "Profesionalización del personal a su cargo",
        "Diferenciación competitiva con certificación",
        "Paquetes grupales con precios accesibles",
        "Proceso claro y evaluación práctica real",
      ],
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta/70 text-center mb-3">
          Propuesta de valor
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-deep">
          ¿Por qué elegir CertiHogar?
        </h2>
        <p className="mt-5 text-center text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
          Ofrecemos un proceso integral de capacitación, evaluación práctica y
          certificación diseñado para elevar el estándar del trabajo del hogar.
        </p>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {items.map((group) => (
            <div
              key={group.title}
              className="bg-gradient-to-br from-sand to-[#FDF8F3] rounded-3xl p-8 md:p-10 border border-sand-dark/50 shadow-sm"
            >
              <h3 className="text-xl font-bold text-deep mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-terracotta/10 flex items-center justify-center">
                  {group.icon === "home" ? (
                    <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  )}
                </span>
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
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
      num: "1",
      title: "Solicita e inscribe",
      desc: "Llena el formulario o escríbenos por WhatsApp. Selecciona el paquete adecuado e inscribe a tu personal al curso.",
    },
    {
      num: "2",
      title: "Capacitación y evaluación",
      desc: "Tu personal completa el curso base y realiza una evaluación práctica con checklist. Al aprobar, recibe su certificado digital verificable.",
    },
    {
      num: "3",
      title: "Certificación y bolsa laboral",
      desc: "Las egresadas obtienen su certificado digital con QR verificable, perfil profesional y acceso a nuestra bolsa laboral.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta/70 text-center mb-3">
          Proceso simple
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-deep">
          ¿Cómo funciona?
        </h2>
        <p className="mt-5 text-center text-foreground/60 max-w-2xl mx-auto text-lg">
          Un proceso transparente en 3 pasos.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s) => (
            <div key={s.num} className="relative text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-terracotta to-coral text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-lg shadow-terracotta/20 group-hover:scale-105 transition-transform">
                {s.num}
              </div>
              {/* Connector line (hidden on mobile and last item) */}
              {s.num !== "3" && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gradient-to-r from-terracotta/30 to-transparent" />
              )}
              <h3 className="mt-6 text-xl font-bold text-deep">
                {s.title}
              </h3>
              <p className="mt-3 text-foreground/60 leading-relaxed">
                {s.desc}
              </p>
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
    },
    {
      title: "Evaluación práctica con checklist",
      desc: "Evaluación en escenarios reales con un checklist detallado para garantizar competencia demostrable.",
    },
    {
      title: "Certificado digital verificable",
      desc: "Al aprobar, cada persona recibe un certificado digital con código QR verificable por cualquier empleador.",
    },
    {
      title: "Perfil laboral de egresada",
      desc: "Cada egresada certificada obtiene un perfil profesional con sus competencias y certificación visible.",
    },
    {
      title: "Bolsa laboral básica",
      desc: "Conectamos a familias y empleadores con egresadas certificadas a través de nuestra plataforma de bolsa laboral.",
    },
  ];

  return (
    <section id="certificacion" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta/70 text-center mb-3">
          Programa completo
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-deep">
          Capacitación y certificación
        </h2>
        <p className="mt-5 text-center text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
          Nuestro programa incluye todo lo necesario para profesionalizar al
          personal del hogar.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-3xl p-7 border border-sand-dark/50 hover:shadow-lg hover:shadow-terracotta/5 transition-all duration-300 ${
                i === 2 ? "bg-gradient-to-br from-terracotta to-coral text-white sm:col-span-2 lg:col-span-1" : "bg-sand"
              }`}
            >
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${
                i === 2 ? "bg-white/20" : "bg-terracotta/10"
              }`}>
                <CheckCircle className={`w-6 h-6 ${i === 2 ? "text-white" : "text-terracotta"}`} />
              </div>
              <h3 className={`text-lg font-bold ${i === 2 ? "text-white" : "text-deep"}`}>
                {f.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 2 ? "text-white/85" : "text-foreground/60"}`}>
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
    <section id="precios" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta/70 text-center mb-3">
          Inversión
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-deep">
          Paquetes y precios
        </h2>
        <p className="mt-5 text-center text-foreground/60 max-w-2xl mx-auto text-lg">
          Planes diseñados para familias, empleadores particulares y pequeñas
          agencias.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 flex flex-col transition-all duration-300 hover:shadow-lg ${
                p.popular
                  ? "bg-gradient-to-br from-terracotta to-coral text-white shadow-xl shadow-terracotta/20 ring-0 scale-[1.02]"
                  : "bg-white border border-sand-dark/50 hover:shadow-terracotta/5"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-deep text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                  Más popular
                </span>
              )}
              <h3 className={`text-lg font-bold ${p.popular ? "text-white" : "text-deep"}`}>
                {p.name}
              </h3>
              <p className={`text-sm mt-1 ${p.popular ? "text-white/70" : "text-foreground/50"}`}>{p.desc}</p>
              <div className="mt-5">
                <span className={`text-3xl font-bold ${p.popular ? "text-white" : "text-terracotta"}`}>
                  {p.price}
                </span>
                <span className={`text-sm ml-1 ${p.popular ? "text-white/70" : "text-foreground/50"}`}>{p.unit}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${p.popular ? "text-white/80" : "text-terracotta"}`} />
                    <span className={p.popular ? "text-white/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-7 block text-center py-3.5 rounded-full font-semibold transition ${
                  p.popular
                    ? "bg-white text-terracotta hover:bg-white/90 shadow-sm"
                    : "bg-terracotta/10 text-terracotta hover:bg-terracotta/20"
                }`}
              >
                Solicitar información
              </a>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center text-center">
          <div className="bg-white rounded-2xl px-8 py-5 border border-sand-dark/50 shadow-sm">
            <span className="text-sm text-foreground/50">Recertificación</span>
            <p className="text-xl font-bold text-terracotta mt-1">$590 MXN</p>
          </div>
          <div className="bg-white rounded-2xl px-8 py-5 border border-sand-dark/50 shadow-sm">
            <span className="text-sm text-foreground/50">
              Acceso a bolsa laboral (sin paquete)
            </span>
            <p className="text-xl font-bold text-terracotta mt-1">
              $390 MXN{" "}
              <span className="text-sm font-normal text-foreground/40">
                cuota única
              </span>
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
    },
    {
      name: "Lupita R.",
      role: "Egresada certificada",
      text: "El curso me dio herramientas que no conocía. Ahora tengo mi certificado y conseguí un mejor empleo gracias a la bolsa laboral. ¡Se los recomiendo!",
    },
    {
      name: "Roberto M.",
      role: "Pequeña agencia de servicios",
      text: "Certificar a nuestro equipo nos diferenció de la competencia. Los clientes valoran mucho que presentemos personal con certificación verificable.",
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta/70 text-center mb-3">
          Prueba social
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-deep">
          Lo que dicen nuestros clientes
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-sand rounded-3xl p-7 border border-sand-dark/50 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 text-accent mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/70 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-sand-dark/50">
                <p className="font-bold text-deep">{t.name}</p>
                <p className="text-sm text-foreground/50">{t.role}</p>
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
    <section id="faq" className="py-24 bg-sand">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta/70 text-center mb-3">
          Resolvemos tus dudas
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-deep">
          Preguntas frecuentes
        </h2>
        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-sand-dark/50 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-medium text-deep hover:bg-sand/50 transition"
              >
                <span>{f.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-terracotta/50 transition-transform duration-200 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-foreground/60 leading-relaxed">
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
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta/70 text-center mb-3">
            Contáctanos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-deep">
            Solicita información
          </h2>
          <p className="mt-5 text-center text-foreground/60 text-lg">
            Completa el formulario y nos pondremos en contacto contigo a la
            brevedad.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-deep mb-2"
              >
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl border border-sand-dark bg-sand focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta outline-none transition"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-deep mb-2"
                >
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl border border-sand-dark bg-sand focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta outline-none transition"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              <div>
                <label
                  htmlFor="correo"
                  className="block text-sm font-medium text-deep mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  type="email"
                  required
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl border border-sand-dark bg-sand focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta outline-none transition"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-deep mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl border border-sand-dark bg-sand focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta outline-none transition resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-terracotta hover:bg-primary-dark text-white font-semibold py-4 rounded-full transition shadow-lg shadow-terracotta/20 hover:shadow-xl disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <p className="text-center text-green-700 font-medium">
                ¡Mensaje enviado! Nos pondremos en contacto pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-600 font-medium">
                Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
              </p>
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
      {/* Desert sunset gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C2542D] via-[#E8805A] to-[#C9A96E]" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#3D2012]/20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
          Profesionaliza a tu personal del hogar hoy
        </h2>
        <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Únete a las familias y empleadores que ya confían en CertiHogar para
          capacitar, certificar y conectar con personal del hogar calificado.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto bg-white text-terracotta hover:bg-white/90 font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg"
          >
            Solicitar información
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg transition border border-white/25"
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
    <footer className="bg-deep text-white/70 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold text-white">CertiHogar</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Capacitación y certificación de personal del hogar en Ciudad de
              México. Formación práctica, verificable y profesional.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#beneficios" className="hover:text-peach transition">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-peach transition">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#certificacion" className="hover:text-peach transition">
                  Certificación
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-peach transition">
                  Precios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta/50 flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} CertiHogar. Todos los derechos
            reservados.
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
