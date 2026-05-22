/**
 * Fotos de clientes en /public/testimonials/clients,
 * enlazadas por el nombre exacto del cliente en lib/testimonials.ts.
 */
const TESTIMONIAL_IMAGE_BY_NAME: Record<string, string> = {
  "RUGGERI OSCAR": "/testimonials/clients/RUGGERI.jpg",
  "AUTOPARTES TB SA": "/testimonials/clients/AUTOPARTESTBSA.jpg",
  "NADIA BS AS SRL": "/testimonials/clients/NADIA.jpg",
  "GRUPO BOXES SRL": "/testimonials/clients/GRUPOBOXES.jpg",
  "LOS ESPECIALISTAS EN FILTRO": "/testimonials/clients/LOSESPECIALISTAS.jpg",
  "MOLECULAR ARGENTINA SRL": "/testimonials/clients/MOLECULARARGENTINASRL.jpg",
  "DIFARA SA": "/testimonials/clients/DIFARASA.jpg",
  "PINTURERIAS MEGAPINT": "/testimonials/clients/PINTURERIAMEGAPINT.jpg",
  "DHAMER REPUESTOS": "/testimonials/clients/DAMHER.jpg",
  "TODO PESADO REPUESTOS": "/testimonials/clients/TODOPESADO.jpg",
  "SEGUROS DE VITO": "/testimonials/clients/DEVITO.jpg",
  "ASCLEPIO SALUD": "/testimonials/clients/ASCLEPIOSALUD.jpg",
  "CAMPEONES 86 SRL": "/testimonials/clients/CAMPEONES86SRL.jpg",
  "DISTRIBUIDORA REL SRL": "/testimonials/clients/DISTRIBUIDORAREL.jpg",
  "TRANSPORTES MAMAN SRL": "/testimonials/clients/MAMAN.jpg",
  "TRANSPORTES BAREA SRL": "/testimonials/clients/TRANSPORTEBAREA.jpg",
  PENTOS: "/testimonials/clients/PENTOS.jpg",
  APOLONIA: "/testimonials/clients/APOLONIA.jpg",
  "SIN FIN BODEGON": "/testimonials/clients/SINFIN.jpg",
  "TIENDA GOURMET": "/testimonials/clients/TIENDAGOURMET.jpg",
  "DUCHCOM SRL": "/testimonials/clients/DUCHCOM.jpg",
  "METACO SA": "/testimonials/clients/METACO.jpg",
  "EMIGEN SA": "/testimonials/clients/EMIGEN.jpg",
  "MARMOLERIA GIGLIO SRL": "/testimonials/clients/MARMOLERIAGIGLIOSRL.jpg",
  "AVERTURAS VELARDI": "/testimonials/clients/ABERTURASVELARDI.jpg",
};

export function getTestimonialImageSrc(clientName: string): string | undefined {
  return TESTIMONIAL_IMAGE_BY_NAME[clientName];
}
