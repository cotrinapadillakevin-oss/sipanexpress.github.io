/**
 * DESTINOS TURÍSTICOS ATENDIDOS Y PROPUESTOS - TURISMO SIPÁN EXPRESS
 * =================================================================
 * Catálogo turístico representativo de los lugares donde opera la empresa.
 * Incluye destinos con fotografías reales de las unidades en dichos atractivos
 * y destinos propuestos configurables según el portafolio final.
 */

export const destinations = [
  {
    id: "museo-tumbas-reales",
    name: "Museo Tumbas Reales de Sipán",
    location: "Lambayeque, Perú",
    category: "Cultura y Arqueología",
    statusBadge: "Destino Frecuente en Fotos Reales",
    image: "/images/destinations/museo-tumbas-reales.jpg",
    description: "Uno de los museos más trascendentes de América. Alberga el fastuoso ajuar funerario de oro y plata del Señor de Sipán. Nuestras unidades llegan directamente a la explanada del complejo.",
    highlights: ["Orfebrería Moche", "Museo de renombre mundial", "Acceso directo para buses y vans"],
    duration: "Tour medio día o día completo"
  },
  {
    id: "balneario-pimentel",
    name: "Balneario de Pimentel y Caballitos de Totora",
    location: "Costa de Chiclayo, Lambayeque",
    category: "Playa, Tradición y Gastronomía",
    statusBadge: "Destino Frecuente en Fotos Reales",
    image: "/images/destinations/playa-pimentel-totora.jpg",
    description: "Playa emblemática conocida por su histórico muelle de madera, atardeceres y la milenaria navegación en caballitos de totora. Parada obligatoria para deleitarse con la gastronomía marina.",
    highlights: ["Muelle histórico", "Caballitos de totora", "Malecón y restaurantes típicos"],
    duration: "Tarde o día completo"
  },
  {
    id: "aeropuerto-chiclayo",
    name: "Aeropuerto Internacional José A. Quiñones",
    location: "Chiclayo, Perú",
    category: "Conexión Aérea y Hoteles",
    statusBadge: "Punto de Traslado Frecuente",
    image: "/images/destinations/aeropuerto-chiclayo.jpg",
    description: "Terminal aérea principal del norte. Brindamos traslados coordinados con el horario de llegada de vuelos hacia hoteles de Chiclayo, Lambayeque o playas cercanas.",
    highlights: ["Atención puntual 24/7", "Asistencia de equipaje", "Recepción con cartel personalizado"],
    duration: "Traslados según horario de vuelo"
  },
  {
    id: "mirador-tinajones-gallito",
    name: "Miradores de Tinajones y Gallito Ciego",
    location: "Valles y Represas del Norte",
    category: "Naturaleza, Paisaje y Aventura",
    statusBadge: "Ruta Panorámica en Fotos Reales",
    image: "/images/destinations/mirador-tinajones.jpg",
    description: "Imponentes obras de ingeniería hidráulica rodeadas de colinas y espejos de agua cristalina, con miradores fotográficos ideales para excursiones grupales y paseos al aire libre.",
    highlights: ["Vistas panorámicas espectaculares", "Puntos fotográficos temáticos", "Clima cálido todo el año"],
    duration: "Excursión de día completo"
  },
  {
    id: "piramides-tucume",
    name: "Pirámides de Túcume y Bosque de Pómac",
    location: "Lambayeque, Perú",
    category: "Arqueología y Naturaleza",
    statusBadge: "Destino Propuesto Configurable",
    image: "/images/services/excursiones-tours.jpg",
    description: "[PROPUESTA CONFIGURABLE]: Valle de 26 pirámides de adobe rodeadas por el bosque seco ecuatorial más extenso del Pacífico sudamericano, cuna de leyendas y cultura viva.",
    highlights: ["Huaca Larga", "Museo de Sitio", "Santuario Histórico Pómac"],
    duration: "Ruta de día completo"
  },
  {
    id: "huaca-rajada-sipan",
    name: "Huaca Rajada - Sitio del Descubrimiento",
    location: "Saña, Lambayeque",
    category: "Historia viva del Señor de Sipán",
    statusBadge: "Destino Propuesto Configurable",
    image: "/images/experiences/viajeros-ruta.jpg",
    description: "[PROPUESTA CONFIGURABLE]: El lugar exacto donde el Dr. Walter Alva descubrió las intactas cámaras funerarias del Señor de Sipán y el Sacerdote Moche en 1987.",
    highlights: ["Tumbas in situ", "Museo de sitio contemporáneo", "Circuito histórico Lambayeque"],
    duration: "Medio día"
  }
];
