/**
 * Logos en /public/testimonials, enlazados por el nombre exacto del cliente en lib/testimonials.ts.
 */
const TESTIMONIAL_IMAGE_BY_NAME: Record<string, string> = {
  "RUGGERI OSCAR": "/testimonials/ruggeri.avif",
  "AUTOPARTES TB SA": "/testimonials/AUTOPARTESTBSA.png",
  "NADIA BS AS SRL": "/testimonials/NADIABSAS.jpg",
  "LOS ESPECIALISTAS EN FILTRO": "/testimonials/LOSESPECIALISTASENFILTRO.png",
  "MOLECULAR ARGENTINA SRL": "/testimonials/MOLECULARARGENTINASRL.jpg",
  "DIFARA SA": "/testimonials/DIFARASA.png",
  "PINTURERIAS MEGAPINT": "/testimonials/PINTURERIASMEGAPINT.png",
  "TODO PESADO REPUESTOS": "/testimonials/TODOPESADOREPUESTOS.png",
  "SEGUROS DE VITO": "/testimonials/SEGUROSDEVITO.jpg",
  "ASCLEPIO SALUD": "/testimonials/ASCLEPIOSALUD.png",
  "CAMPEONES 86 SRL": "/testimonials/CAMPEONES86SRL.jpg",
  "DISTRIBUIDORA REL SRL": "/testimonials/DISTRIBUIDORARELSRL.jpg",
  "TRANSPORTES MAMAN SRL": "/testimonials/TRANSPORTEMAMANSRL.jpg",
  "TRANSPORTES BAREA SRL": "/testimonials/TRANSPORTESBAREASRL.jpg",
  PENTOS: "/testimonials/PENTOS.jpg",
  APOLONIA: "/testimonials/APOLONIA.jpg",
  "SIN FIN BODEGON": "/testimonials/SINFINBODEGON.jpg",
  "TIENDA GOURMET": "/testimonials/TIENDAGOURMET.jpg",
  "METACO SA": "/testimonials/METACOSA.png",
  "MARMOLERIA GIGLIO SRL": "/testimonials/MARMOLERIAGIGLIOSRL.jpg",
  "AVERTURAS VELARDI": "/testimonials/AVERTURASVELARDI.jpg",
};

export function getTestimonialImageSrc(clientName: string): string | undefined {
  return TESTIMONIAL_IMAGE_BY_NAME[clientName];
}
