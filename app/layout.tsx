import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://estudioduranteyasociados.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Estudio Contable Durante y Asociados | Contabilidad y Asesoría Fiscal",
  description:
    "Estudio contable en Buenos Aires especializado en contabilidad, asesoría fiscal, monotributo y liquidación de impuestos para pymes, profesionales y emprendedores.",
  keywords: [
    "contador Buenos Aires",
    "asesoría fiscal",
    "estudio contable",
    "liquidación de impuestos",
    "monotributo",
    "contabilidad pymes",
    "balance contable",
    "AFIP",
    "asesoramiento societario",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Estudio Contable Durante y Asociados",
    title: "Estudio Contable Durante y Asociados | Contabilidad y Asesoría Fiscal",
    description:
      "Estudio contable en Buenos Aires especializado en contabilidad, asesoría fiscal, monotributo y liquidación de impuestos para pymes, profesionales y emprendedores.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Estudio Contable Durante y Asociados" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Contable Durante y Asociados | Contabilidad y Asesoría Fiscal",
    description:
      "Estudio contable en Buenos Aires especializado en contabilidad, asesoría fiscal, monotributo y liquidación de impuestos para pymes, profesionales y emprendedores.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "ProfessionalService", "Organization"],
    name: "Estudio Contable Durante y Asociados",
    description:
      "Estudio contable en Buenos Aires especializado en contabilidad, asesoría fiscal, monotributo y liquidación de impuestos para pymes, profesionales y emprendedores.",
    url: SITE_URL,
    logo: `${SITE_URL}/placeholder-logo.svg`,
    email: "info@estudioduranteyasociados.com",
    telephone: "+54 9 11 2516-4391",
    openingHours: "Mo-Fr 09:00-17:00",
    areaServed: [{ "@type": "Place", name: "Buenos Aires" }, { "@type": "Country", name: "Argentina" }],
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
