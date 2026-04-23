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

/* ─── Sections ─── */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary">
          CertiHogar
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <a href="#beneficios" className="hover:text-primary transition">
            Beneficios
          </a>
          <a href="#como-funciona" className="hover:text-primary transition">
            Cómo funciona
          </a>
          <a href="#capacitacion" className="hover:text-primary transition">
            Capacitación
          </a>
          <a href="#precios" className="hover:text-primary transition">
            Precios
          </a>
          <a href="#testimonios" className="hover:text-primary transition">
            Testimonios
          </a>
          <a href="#faq" className="hover:text-primary transition">
            FAQ
          </a>
          <a
            href="#contacto"
            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-dark transition"
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
            className="w-6 h-6"
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
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4 space-y-3 text-sm font-medium">
          <a href="#beneficios" className="block py-2" onClick={() => setOpen(false)}>
            Beneficios
          </a>
          <a href="#como-funciona" className="block py-2" onClick={() => setOpen(false)}>
            Cómo funciona
          </a>
          <a href="#capacitacion" className="block py-2" onClick={() => setOpen(false)}>
            Capacitación
          </a>
          <a href="#precios" className="block py-2" onClick={() => setOpen(false)}>
            Precios
          </a>
          <a href="#testimonios" className="block py-2" onClick={() => setOpen(false)}>
            Testimonios
          </a>
          <a href="#faq" className="block py-2" onClick={() => setOpen(false)}>
            FAQ
          </a>
          <a
            href="#contacto"
            className="block bg-primary text-white text-center py-2 rounded-full"
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
    <section className="bg-gradient-to-br from-primary to-[#164f63] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          Capacita y certifica a tu personal del hogar con respaldo práctico y
          verificable
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          En CertiHogar ayudamos a familias y empleadores de Ciudad de México a
          profesionalizar a su personal del hogar con formación, evaluación real
          y acceso a una bolsa laboral básica de egresadas certificadas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg"
          >
            Solicitar información
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-full text-lg transition border border-white/20"
          >
            <WhatsAppIcon />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const items = [
    {
      title: "Para familias",
      list: [
        "Personal capacitado con estándares verificables",
        "Mayor confianza y tranquilidad en casa",
        "Acceso a egresadas certificadas por bolsa laboral",
        "Respaldo documental de la formación",
      ],
    },
    {
      title: "Para empleadores y agencias",
      list: [
        "Profesionalización del personal a su cargo",
        "Diferenciación competitiva con certificación",
        "Paquetes grupales con precios accesibles",
        "Proceso claro y evaluación práctica real",
      ],
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          ¿Por qué elegir CertiHogar?
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Ofrecemos un proceso integral de capacitación, evaluación práctica y
          certificación diseñado para elevar el estándar del trabajo del hogar.
        </p>
        <div className="mt-14 grid md:grid-cols-2 gap-10">
          {items.map((group) => (
            <div
              key={group.title}
              className="bg-background rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-primary mb-6">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
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
      title: "Solicitas información",
      desc: "Llena el formulario o escríbenos por WhatsApp para conocer los detalles del programa.",
    },
    {
      num: "2",
      title: "Inscripción a capacitación",
      desc: "Selecciona el paquete adecuado e inscribe a tu personal al curso base de trabajo del hogar.",
    },
    {
      num: "3",
      title: "Evaluación y certificación",
      desc: "Tu personal realiza una evaluación práctica con checklist. Al aprobar, recibe un certificado digital verificable.",
    },
    {
      num: "4",
      title: "Acceso a bolsa laboral",
      desc: "Las egresadas certificadas obtienen un perfil laboral y acceso a nuestra bolsa laboral básica.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          ¿Cómo funciona?
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Un proceso simple y transparente en 4 pasos.
        </p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto">
                {s.num}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capacitacion() {
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
    <section id="capacitacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Capacitación y certificación
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Nuestro programa MVP incluye todo lo necesario para profesionalizar al
          personal del hogar.
        </p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background rounded-2xl p-6 border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
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
    <section id="precios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Paquetes y precios
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Planes diseñados para familias, empleadores particulares y pequeñas
          agencias.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-6 border flex flex-col ${
                p.popular
                  ? "border-primary bg-white shadow-lg ring-2 ring-primary"
                  : "border-gray-200 bg-white"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Más popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">
                {p.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-primary">
                  {p.price}
                </span>
                <span className="text-sm text-gray-500 ml-1">{p.unit}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-6 block text-center py-3 rounded-full font-semibold transition ${
                  p.popular
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                Solicitar información
              </a>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center text-center">
          <div className="bg-white rounded-xl px-6 py-4 border border-gray-200">
            <span className="text-sm text-gray-600">Recertificación</span>
            <p className="text-xl font-bold text-primary mt-1">$590 MXN</p>
          </div>
          <div className="bg-white rounded-xl px-6 py-4 border border-gray-200">
            <span className="text-sm text-gray-600">
              Acceso a bolsa laboral (sin paquete)
            </span>
            <p className="text-xl font-bold text-primary mt-1">
              $390 MXN{" "}
              <span className="text-sm font-normal text-gray-500">
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
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Lo que dicen nuestros clientes
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex gap-1 text-secondary mb-4">
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
              <p className="text-gray-700 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
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
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Preguntas frecuentes
        </h2>
        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-foreground hover:bg-gray-50 transition"
              >
                <span>{f.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform ${
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
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
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
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Solicita información
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo a la
            brevedad.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-foreground mb-1"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              <div>
                <label
                  htmlFor="correo"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  type="email"
                  required
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-full transition disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <p className="text-center text-green-600 font-medium">
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
    <section className="py-20 bg-gradient-to-br from-primary to-[#164f63] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Profesionaliza a tu personal del hogar hoy
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Únete a las familias y empleadores que ya confían en CertiHogar para
          capacitar, certificar y conectar con personal del hogar calificado.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg"
          >
            Solicitar información
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-full text-lg transition border border-white/20"
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
    <footer className="bg-[#1E293B] text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white">CertiHogar</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Capacitación y certificación de personal del hogar en Ciudad de
              México. Formación práctica, verificable y profesional.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#beneficios" className="hover:text-white transition">
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="hover:text-white transition"
                >
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#capacitacion" className="hover:text-white transition">
                  Capacitación
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-white transition">
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
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm">
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
      <Capacitacion />
      <Precios />
      <Testimonios />
      <FAQ />
      <ContactForm />
      <CTAFinal />
      <Footer />
    </>
  );
}
