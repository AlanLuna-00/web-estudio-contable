"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Instagram,
  Linkedin,
  CheckCircle2,
} from "lucide-react"
import Script from "next/script"
import { NovedadesWrapper } from "@/components/novedades-wrapper"

// Data arrays
const services = [
  {
    icon: Calculator,
    title: "Liquidación de impuestos y sueldos",
    description: "Gestión integral de obligaciones tributarias y liquidación de haberes.",
  },
  {
    icon: Building2,
    title: "Asesoramiento societario",
    description: "Constitución y administración de SRL, SAS, SA y otros tipos societarios.",
  },
  {
    icon: FileText,
    title: "Contabilidad y balances",
    description: "Registro contable, estados financieros y balances certificados.",
  },
  {
    icon: TrendingUp,
    title: "Consultoría financiera",
    description: "Análisis de rentabilidad, flujo de fondos y planificación financiera.",
  },
  {
    icon: Users,
    title: "Monotributistas y autónomos",
    description: "Alta, recategorización y gestión integral de monotributo y autónomos.",
  },
  {
    icon: Shield,
    title: "Representación ante organismos",
    description: "Trámites y gestiones ante AFIP, ARBA, AGIP y otros entes fiscales.",
  },
]

const team = [
  {
    name: "Dra. María González",
    role: "Socia Fundadora",
    bio: "Contadora Pública con más de 20 años de experiencia en asesoría fiscal y contable.",
  },
  {
    name: "Cr. Pablo Fernández",
    role: "Director Contable",
    bio: "Especialista en planificación tributaria y auditoría de empresas.",
  },
  {
    name: "Lic. Laura Martínez",
    role: "Asesora Societaria",
    bio: "Abogada especializada en derecho societario y contratos comerciales.",
  },
  {
    name: "Cr. Diego Rodríguez",
    role: "Analista Financiero",
    bio: "Experto en análisis de estados contables y proyecciones financieras.",
  },
]

const testimonials = [
  {
    name: "Carolina Méndez",
    role: "Dueña de Tienda Online",
    quote: "Desde que trabajo con este estudio, puedo enfocarme en mi negocio sin preocuparme por los impuestos. Siempre están un paso adelante con los vencimientos.",
  },
  {
    name: "Martín Sosa",
    role: "Arquitecto",
    quote: "Excelente atención personalizada. Me ayudaron a elegir la mejor estructura para mi actividad profesional y a optimizar mi carga tributaria.",
  },
  {
    name: "Lucía Pereyra",
    role: "Fundadora de Startup",
    quote: "Nos acompañaron desde la constitución de la SAS hasta el día de hoy. Su asesoramiento fue clave para el crecimiento de nuestra empresa.",
  },
  {
    name: "Roberto Álvarez",
    role: "Comerciante",
    quote: "Profesionales muy responsables y siempre disponibles. Resolvieron problemas que arrastraba hace años con AFIP de manera rápida y efectiva.",
  },
  {
    name: "Valentina Ruiz",
    role: "Freelancer de Marketing",
    quote: "Como monotributista, siempre tuve dudas sobre mis obligaciones. Ahora tengo tranquilidad total gracias a su seguimiento constante.",
  },
  {
    name: "Gustavo Torres",
    role: "Director de Pyme Industrial",
    quote: "Llevamos más de 10 años trabajando juntos. Su compromiso y conocimiento del rubro industrial nos da una ventaja competitiva.",
  },
]

const blogPosts = [
  {
    date: "15 Feb 2023",
    title: "Nuevas leyes tributarias para pymes",
    excerpt: "Conoce las últimas modificaciones que afectan a tus obligaciones fiscales.",
  },
  {
    date: "10 Mar 2023",
    title: "Cómo optimizar tus estados financieros",
    excerpt: "Descubre técnicas para mejorar la presentación de tus balances.",
  },
  {
    date: "25 Mar 2023",
    title: "Planificación financiera para emprendedores",
    excerpt: "Guía paso a paso para asegurar el éxito financiero de tu negocio.",
  },
]

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#novedades", label: "Novedades" },
  { href: "#contacto", label: "Contacto" },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@[dominio].com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="size-4" />
              info@[dominio].com
            </a>
            <a href="tel:+5491112345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="size-4" />
              +54 9 11 XXXX-XXXX
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
            <a href="#inicio" className="text-lg md:text-xl font-semibold text-foreground">
              Estudio Contable <span className="text-muted-foreground">[NOMBRE]</span>
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
                {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
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
        {/* Hero Section */}
        <section id="inicio" className="py-16 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-balance text-foreground">
                  Contabilidad y asesoría fiscal para pymes, profesionales y emprendedores.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Más de 15 años brindando tranquilidad a nuestros clientes. Nos ocupamos de tus números para que vos te enfoques en hacer crecer tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href="https://wa.me/5491112345678?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-5" />
                      Contactanos por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#contacto">Solicitar consulta</a>
                  </Button>
                </div>
              </div>

              {/* Abstract Dashboard Illustration */}
              <div className="hidden lg:block">
                <div className="relative">
                  <Card className="p-8 bg-card shadow-lg">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Estado de cuenta</p>
                          <p className="text-2xl font-semibold text-foreground">Actualizado</p>
                        </div>
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle2 className="size-6 text-primary" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-secondary rounded-lg">
                          <p className="text-sm text-muted-foreground">Próximo vencimiento</p>
                          <p className="text-lg font-medium text-foreground">15 Feb</p>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                          <p className="text-sm text-muted-foreground">Obligaciones al día</p>
                          <p className="text-lg font-medium text-foreground">100%</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-primary" />
                          <div className="flex-1 h-2 bg-primary/20 rounded-full">
                            <div className="h-full w-full bg-primary rounded-full" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-primary" />
                          <div className="flex-1 h-2 bg-primary/20 rounded-full">
                            <div className="h-full w-4/5 bg-primary rounded-full" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-primary" />
                          <div className="flex-1 h-2 bg-primary/20 rounded-full">
                            <div className="h-full w-3/5 bg-primary rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 size-24 border-2 border-border rounded-lg -z-10" />
                  <div className="absolute -bottom-4 -left-4 size-16 bg-secondary rounded-lg -z-10" />
                </div>
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
                Soluciones integrales adaptadas a tu actividad. Cada cliente es único y merece un servicio personalizado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-md transition-shadow border-border">
                  <CardContent className="p-6">
                    <div className="size-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
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
                    Somos un estudio contable con más de 15 años de trayectoria en Buenos Aires. 
                    Nuestro equipo está conformado por profesionales matriculados, comprometidos con 
                    brindar un servicio de excelencia a cada uno de nuestros clientes.
                  </p>
                  <p>
                    Entendemos que detrás de cada número hay una historia, un proyecto y un sueño. 
                    Por eso, trabajamos de manera personalizada para acompañarte en cada etapa de tu 
                    actividad comercial o profesional.
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium text-foreground mb-4">Nuestro enfoque</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">Claridad:</span>
                        <span className="text-muted-foreground"> Explicamos todo de manera simple y sin tecnicismos innecesarios.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">Compromiso:</span>
                        <span className="text-muted-foreground"> Cumplimos con los plazos y estamos siempre disponibles para consultas.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">Cercanía:</span>
                        <span className="text-muted-foreground"> Conocemos a cada cliente por su nombre y entendemos su situación particular.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-5xl md:text-6xl font-semibold text-foreground">+15</p>
                    <p className="text-muted-foreground mt-2">años de experiencia</p>
                  </div>
                </div>
                <Card className="absolute -bottom-6 -right-6 p-4 shadow-lg max-w-[200px]">
                  <p className="text-sm text-muted-foreground">Clientes activos</p>
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
                Profesionales matriculados con amplia experiencia, dedicados a brindar el mejor asesoramiento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="size-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="size-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{member.name}</h3>
                    <Badge variant="secondary" className="mt-2 mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-muted-foreground">
                La confianza de quienes nos eligen es nuestro mayor respaldo.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="relative overflow-hidden border-border">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center">
                    <div className="text-4xl text-muted-foreground/30 mb-4">"</div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      {testimonials[currentTestimonial].quote}
                    </p>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`size-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-primary" : "bg-border"
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-card">
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
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nombre
                      </label>
                      <Input id="name" placeholder="Tu nombre completo" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="¿En qué podemos ayudarte?"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Enviar
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Datos de contacto</h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/5491112345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <MessageCircle className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">WhatsApp</p>
                        <p className="font-medium text-foreground">+54 9 11 XXXX-XXXX</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@[dominio].com"
                      className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground">info@[dominio].com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Ubicación</p>
                        <p className="font-medium text-foreground">Buenos Aires, Argentina</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Horario de atención</p>
                        <p className="font-medium text-foreground">Lunes a viernes de 9 a 17 hs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Widget */}
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
              <h4 className="text-lg font-semibold">Estudio Contable [NOMBRE]</h4>
              <p className="text-sm opacity-80">
                Profesionales comprometidos con tu tranquilidad fiscal y contable.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Contacto</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="flex items-center gap-2">
                  <Phone className="size-4" />
                  +54 9 11 XXXX-XXXX
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="size-4" />
                  info@[dominio].com
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Ubicación</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  Buenos Aires, Argentina
                </p>
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
            <p>© {new Date().getFullYear()} Estudio Contable [NOMBRE]. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5491112345678?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  )
}
