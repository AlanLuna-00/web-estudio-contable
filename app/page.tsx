"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  Building2,
  FileText,
  TrendingUp,
  Users,
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  MessageCircle,
  Instagram,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import { NovedadesWrapper } from "@/components/novedades-wrapper";
import { TestimonialsSection } from "@/components/testimonials-section";
import { toast } from "@/hooks/use-toast";

const OFFICE_MAPS_URL = "https://maps.app.goo.gl/rbmmaLK2tak6AgW39";
const OFFICE_ADDRESS =
  "Cnel. Olleros 699, B1752 Lomas del Mirador, Provincia de Buenos Aires, Argentina";

// Data arrays
const services = [
  {
    icon: Calculator,
    title: "Liquidación de impuestos y sueldos",
    description:
      "Gestión integral de obligaciones tributarias y liquidación de haberes.",
  },
  {
    icon: Building2,
    title: "Asesoramiento societario",
    description:
      "Constitución y administración de SRL, SAS, SA y otros tipos societarios.",
  },
  {
    icon: FileText,
    title: "Contabilidad y balances",
    description:
      "Registro contable, estados financieros y balances certificados.",
  },
  {
    icon: TrendingUp,
    title: "Consultoría financiera",
    description:
      "Análisis de rentabilidad, flujo de fondos y planificación financiera.",
  },
  {
    icon: Users,
    title: "Monotributistas y autónomos",
    description:
      "Alta, recategorización y gestión integral de monotributo y autónomos.",
  },
  {
    icon: Shield,
    title: "Representación ante organismos",
    description:
      "Trámites y gestiones ante AFIP, ARBA, AGIP y otros entes fiscales.",
  },
];

const team = [
  {
    name: "Luis Durante",
    role: "Responsable",
    bio: "Contador Público con más de 40 años de experiencia en asesoría fiscal y contable.",
    image: "/team/luis-durante.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/luis-durante/",
  },
  {
    name: "Nereo Diaz",
    role: "Asesor Contable",
    bio: "Estudiante",
    image: "/team/nereo-diaz.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nereo-diaz-a1048b213/",
  },
  {
    name: "Lucila Ayelén Santoli",
    role: "Analista de Marketing y Comunicaciones",
    bio: "Loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/team/lucila-santoli.jpg",
    linkedinUrl: "https://www.linkedin.com/in/lucilasantoli/",
  },
  {
    name: "Micaela Data",
    role: "Community Manager",
    bio: "Loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/team/micaela-data.jpg",
    linkedinUrl: "https://www.linkedin.com/in/micaela-data-81b5b11ba/",
  },
  {
    name: "Alberto Sanguinetti",
    role: "Sueldos, altas, bajas y liquidaciones",
    bio: "Gestión integral de sueldos, liquidaciones, cargas sociales y cumplimiento laboral. Aporta claridad y orden a procesos clave.",
    image: "/team/alberto-sanguinetti.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/alberto-sanguinetti-14b7a892/",
  },
  {
    name: "Luis Gabriel Durante",
    role: "Analista de Inversiones y Trading (ICB)",
    bio: "Lic. en Comercio Internacional (UNLaM). Especialización en armado de carteras personalizadas y seguimiento de mercados nacional e internacional, con informes elaborados para la toma de decisiones.",
    image: "/team/luis-gabriel-durante.jpeg",
    linkedinUrl: null,
  },
  {
    name: "Eduardo Salvatore",
    role: "Contador Público",
    bio: "CP y Lic. en Administración (UNLaM). Asociado de Estudio Durante & Asoc. (+20 años). Asesor impositivo, contable y financiero; foco en pymes.",
    image: "/team/edu.jpeg",
    linkedinUrl: null,
  },
  {
    name: "Ivana Gomez",
    role: "Balances y Estados Contables",
    bio: "Responsable de balances, estados contables y reportes financieros. Su enfoque técnico garantiza información confiable para la toma de decisiones.",
    image: "/team/ivana-gomez.png",
    linkedinUrl: null,
  },
  {
    name: "Eliana Moledo",
    role: "Analista impositiva",
    bio: "Más de 20 años de experiencia.",
    image: "/team/eliana-moledo.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/eliana-elizabeth-moledo-7aba0224a/",
  },
  {
    name: "José Gerardo Olivieri",
    role: "Responsable de Cobranzas",
    bio: "Más de 30 años de experiencia en la coordinación de cobranzas.",
    image: "/team/jose-gerardo.jpeg",
    linkedinUrl: null,
  },
];

const serviciosComplementarios = [
  {
    name: "Francisco Melini",
    image: "/servicios-complementarios/francisco-melini.jpeg",
  },
  {
    name: "Liana Galvan",
    image: "/servicios-complementarios/liana-galvan.jpg",
  },
  {
    name: "Raquel Escandroli",
    image: "/servicios-complementarios/raquel-escandroli.jpg",
  },
  {
    name: "Librería Dan Comercial",
    image: "/servicios-complementarios/libreria-dan-comercial.jpg",
  },
];

const blogPosts = [
  {
    date: "15 Feb 2023",
    title: "Nuevas leyes tributarias para pymes",
    excerpt:
      "Conoce las últimas modificaciones que afectan a tus obligaciones fiscales.",
  },
  {
    date: "10 Mar 2023",
    title: "Cómo optimizar tus estados financieros",
    excerpt: "Descubre técnicas para mejorar la presentación de tus balances.",
  },
  {
    date: "25 Mar 2023",
    title: "Planificación financiera para emprendedores",
    excerpt:
      "Guía paso a paso para asegurar el éxito financiero de tu negocio.",
  },
];

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#servicios-complementarios", label: "Servicios Complementarios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#novedades", label: "Novedades" },
  { href: "#contacto", label: "Contacto" },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@estudioduranteyasociados.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="size-4" />
              info@estudioduranteyasociados.com
            </a>
            <a
              href="tel:+5491125164391"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="size-4" />
              +54 9 11 2516-4391
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4" />
            <span>Lunes a viernes de 9 a 17 hs</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-card"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#inicio"
              className="text-lg md:text-xl font-semibold text-foreground truncate max-w-[240px] sm:max-w-none"
              title="Estudio Durante y Asociados"
            >
              Estudio Durante y Asociados
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button asChild className="hidden md:inline-flex">
                <a href="#contacto">Contactanos</a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-foreground"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-border">
              <div className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-2 px-4 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 px-4">
                  <Button asChild className="w-full">
                    <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
                      Contactanos
                    </a>
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section - banner de fondo */}
        <section
          id="inicio"
          className="relative min-h-[420px] md:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden"
        >
          <picture className="absolute inset-0 block h-full w-full">
            <source media="(min-width: 768px)" srcSet="/images/banner.jpg" />
            <img
              src="/images/banner-mobile.jpg"
              alt=""
              aria-hidden
              className="h-full w-full object-cover object-right"
            />
          </picture>
          <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 lg:py-32">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-balance text-white drop-shadow-md">
                Contabilidad y asesoría fiscal para pymes, profesionales y
                emprendedores.
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mt-6 drop-shadow-sm">
                Más de 42 años brindando tranquilidad a nuestros clientes. Nos
                ocupamos de tus números para que vos te enfoques en hacer crecer
                tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button asChild size="lg" className="gap-2">
                  <a
                    href="https://wa.me/5491125164391?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-5" />
                    Contactanos por WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 border-0"
                >
                  <a href="#contacto">Solicitar consulta</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                ¿En qué podemos ayudarte?
              </h2>
              <p className="text-muted-foreground">
                Soluciones integrales adaptadas a tu actividad. Cada cliente es
                único y merece un servicio personalizado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-md transition-shadow border-border"
                >
                  <CardContent className="p-6">
                    <div className="size-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <a href="#contacto">Solicitá una consulta inicial sin cargo</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Quiénes somos
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Durante y Asociados es una firma de auditores independientes
                    y consultores en administración, contabilidad, auditoría,
                    impuestos y derecho laboral y comercial, integrada no solo
                    por profesionales en ciencias económicas, sino también por
                    Analistas en computación, Asesor financiero, Abogado y
                    Escribano.
                  </p>
                  <p>
                    La firma fue constituida en diciembre de 1983, es decir hace
                    una antigüedad de 42 años, lo que hace que su equipo cuente
                    con la suficiente experiencia para brindar excelentes
                    servicios de auditoría, impuestos, derecho societario y
                    laboral y consultoría financiera.
                  </p>
                  <p>
                    Tratándose de una organización profesional, y como tal
                    encargada de brindar servicios de máxima calidad, hacemos
                    hincapié en los siguientes puntos:
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    Nuestro enfoque
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        Personal profesional permanente
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        Eficiencia en la aplicación de recursos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        Control de calidad
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="group relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/images/edificio.png"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.4] transition-all duration-300 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-neutral-600/75 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="relative z-10 flex items-center justify-center w-full h-full text-center p-8 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none group-hover:pointer-events-none">
                    <p className="text-5xl md:text-6xl font-semibold text-white">
                      42
                    </p>
                    <p className="text-white/90 mt-2">años de experiencia</p>
                  </div>
                </div>
                <Card className="absolute -bottom-6 -right-6 p-4 shadow-lg max-w-[200px] z-10">
                  <p className="text-sm text-muted-foreground">
                    Clientes activos
                  </p>
                  <p className="text-2xl font-semibold text-foreground">+200</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipo" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Nuestro equipo
              </h2>
              <p className="text-muted-foreground">
                Profesionales matriculados con amplia experiencia, dedicados a
                brindar el mejor asesoramiento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="size-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="size-24 w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="size-10 text-muted-foreground" />
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-foreground">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mt-2 mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                    {member.linkedinUrl != null &&
                      member.linkedinUrl !== "" && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                          aria-label={`LinkedIn de ${member.name}`}
                        >
                          <Linkedin className="size-4" />
                          LinkedIn
                        </a>
                      )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios Complementarios - terceros */}
        <section
          id="servicios-complementarios"
          className="py-16 md:py-20 bg-background border-t border-border"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              Servicios complementarios
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
              Colaboramos con profesionales y empresas de confianza para ampliar
              nuestra oferta.
            </p>
            <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
              {serviciosComplementarios.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[200px] sm:w-[240px]"
                >
                  <div className="size-36 sm:size-44 rounded-lg bg-secondary flex items-center justify-center overflow-hidden shrink-0 mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback)
                          (fallback as HTMLElement).style.display = "flex";
                      }}
                    />
                    <div
                      className="size-full hidden items-center justify-center bg-secondary text-muted-foreground"
                      aria-hidden
                    >
                      <Building2 className="size-14 sm:size-16" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-tight">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Queremos escucharte
              </h2>
              <p className="text-muted-foreground">
                Dejanos tu consulta y nos pondremos en contacto a la brevedad.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <Card className="border-border">
                <CardContent className="p-6 md:p-8">
                  <form
                    className="space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const name = (
                        form.elements.namedItem("name") as HTMLInputElement
                      ).value.trim();
                      const email = (
                        form.elements.namedItem("email") as HTMLInputElement
                      ).value.trim();
                      const message = (
                        form.elements.namedItem(
                          "message",
                        ) as HTMLTextAreaElement
                      ).value.trim();
                      if (!name || !email || !message) {
                        toast({
                          title: "Datos incompletos",
                          description: "Completá nombre, email y mensaje.",
                          variant: "destructive",
                        });
                        return;
                      }
                      setIsContactSubmitting(true);
                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ name, email, message }),
                        });
                        const data = await res.json().catch(() => ({}));
                        if (!res.ok) {
                          toast({
                            title: "Error al enviar",
                            description:
                              data.error ||
                              "Intentá de nuevo o contactanos por email.",
                            variant: "destructive",
                          });
                          return;
                        }
                        toast({
                          title: "Mensaje enviado",
                          description: "Te responderemos a la brevedad.",
                        });
                        form.reset();
                      } finally {
                        setIsContactSubmitting(false);
                      }
                    }}
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="¿En qué podemos ayudarte?"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isContactSubmitting}
                    >
                      {isContactSubmitting ? "Enviando…" : "Enviar"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">
                    Datos de contacto
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/5491125164391"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <MessageCircle className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          WhatsApp
                        </p>
                        <p className="font-medium text-foreground">
                          +54 9 11 2516-4391
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@estudioduranteyasociados.com"
                      className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground">
                          info@estudioduranteyasociados.com
                        </p>
                      </div>
                    </a>

                    <a
                      href={OFFICE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Ubicación
                        </p>
                        <p className="font-medium text-foreground">
                          {OFFICE_ADDRESS}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Horario de atención
                        </p>
                        <p className="font-medium text-foreground">
                          Lunes a viernes de 9 a 17 hs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Widget - comentado
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground text-center mb-6">
                Agendá una reunión
              </h3>
              <div
                className="calendly-inline-widget rounded-lg overflow-hidden"
                data-url="https://calendly.com/alanbenitoluna/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
            */}
          </div>
        </section>

        {/* Blog/News Section - Rendered via NovedadesWrapper */}
        <NovedadesWrapper />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold break-words">
                Estudio Durante y Asociados
              </h4>
              <p className="text-sm opacity-80">
                Profesionales comprometidos con tu tranquilidad fiscal y
                contable.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Contacto</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="flex items-center gap-2">
                  <Phone className="size-4" />
                  +54 9 11 2516-4391
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="size-4" />
                  info@estudioduranteyasociados.com
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Ubicación</h4>
              <div className="space-y-2 text-sm opacity-80">
                <a
                  href={OFFICE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:opacity-100 focus:outline-none focus:opacity-100"
                >
                  <MapPin className="size-4 shrink-0 mt-0.5" />
                  <span>{OFFICE_ADDRESS}</span>
                </a>
                <p className="flex items-center gap-2">
                  <Clock className="size-4" />
                  Lunes a viernes de 9 a 17 hs
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Seguinos</h4>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="size-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="size-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>
              © {new Date().getFullYear()} Estudio Contable Durante y Asociados.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5491125164391?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
