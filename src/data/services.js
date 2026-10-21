/**
 * SERVICIOS PROPUESTOS - TURISMO SIPÁN EXPRESS
 * ============================================
 * Estos servicios representan las propuestas de transporte turístico configurables.
 * Cada elemento incluye imagen real, descripción y llamada a la acción de consulta directa.
 * [Nota: Disponibilidad sujeta a confirmación y reserva de itinerario]
 */

export const services = [
  {
    id: "transporte-turistico",
    title: "Transporte Turístico",
    statusBadge: "Propuesta de Servicio",
    tagline: "Rutas culturales, arqueológicas y paisajísticas",
    description: "Servicio especializado de movilidad hacia los principales atractivos turísticos del norte peruano, brindando traslados amenos con paradas programadas y confort en todo momento.",
    image: "/images/services/transporte-turistico.jpg",
    features: [
      "Visitas a museos y complejos arqueológicos",
      "Flexibilidad de horarios según su plan de viaje",
      "Conductores con conocimiento de rutas turísticas"
    ],
    inquiryMessage: "Hola, deseo consultar la disponibilidad y cotización para el servicio de Transporte Turístico."
  },
  {
    id: "traslados-aeropuerto",
    title: "Traslados al Aeropuerto",
    statusBadge: "Propuesta de Servicio",
    tagline: "Conexión directa Chiclayo (ADP) - Hoteles",
    description: "Recogida y traslado puntual hacia y desde el Aeropuerto Internacional Capitán FAP José A. Quiñones González de Chiclayo, garantizando que llegue a tiempo a su vuelo o destino.",
    image: "/images/services/traslados-aeropuerto.jpg",
    features: [
      "Monitoreo de llegadas y salidas de vuelos",
      "Recepción con asistencia de equipaje",
      "Disponibilidad las 24 horas previa coordinación"
    ],
    inquiryMessage: "Hola, deseo solicitar cotización para un Traslado al Aeropuerto de Chiclayo."
  },
  {
    id: "traslados-privados",
    title: "Traslados Privados y Exclusivos",
    statusBadge: "Propuesta de Servicio",
    tagline: "Privacidad y confort a su medida",
    description: "Movilidad exclusiva para personas, familias o parejas que buscan total discreción, comodidad superior y un itinerario 100% personalizado sin compartir unidad.",
    image: "/images/services/traslados-privados.jpg",
    features: [
      "Unidad moderna de uso completamente privado",
      "Atención exclusiva puerta a puerta",
      "Paradas intermedias y tiempo a libre elección"
    ],
    inquiryMessage: "Hola, deseo consultar sobre el servicio de Traslados Privados."
  },
  {
    id: "transporte-grupos",
    title: "Transporte para Grupos y Promociones",
    statusBadge: "Propuesta de Servicio",
    tagline: "Capacidad amplia para delegaciones y familias",
    description: "Movilidad integral para grupos numerosos, colegios, universidades, asociaciones y viajes de promoción, con unidades de gran capacidad y amplias bodegas de equipaje.",
    image: "/images/services/transporte-grupos.jpg",
    features: [
      "Minibuses y buses de amplia capacidad",
      "Maleteros espaciosos y climatización",
      "Coordinación logística con el organizador"
    ],
    inquiryMessage: "Hola, me gustaría solicitar una cotización para Transporte de Grupos / Viajes grupales."
  },
  {
    id: "excursiones-viajes",
    title: "Excursiones y Circuitos Turísticos",
    statusBadge: "Propuesta de Servicio",
    tagline: "Circuitos por Lambayeque, La Libertad y el Norte",
    description: "Viajes planificados a balnearios como Pimentel, represas como Tinajones y Gallito Ciego, y reservas ecológicas del norte del país con paradas gastronómicas y fotográficas.",
    image: "/images/services/excursiones-tours.jpg",
    features: [
      "Rutas panorámicas y paradas estratégicas",
      "Espacio para equipo fotográfico y recreativo",
      "Excelente ambiente para disfrutar con amigos y familia"
    ],
    inquiryMessage: "Hola, deseo cotizar una Excursión turística personalizada con su empresa."
  },
  {
    id: "transporte-corporativo",
    title: "Transporte Corporativo y Eventos",
    statusBadge: "Propuesta de Servicio",
    tagline: "Soluciones de movilidad empresarial y congresos",
    description: "Soluciones de transporte para empresas, congresos, eventos protocolares, hoteles y traslados de personal con altos estándares de formalidad y facturación.",
    image: "/images/services/eventos-corporativo.jpg",
    features: [
      "Cumplimiento estricto de protocolos y puntualidad",
      "Emisión de comprobantes de pago",
      "Unidades impecables para ejecutivos e invitados"
    ],
    inquiryMessage: "Hola, requiero información para transporte corporativo o eventos institucionales."
  }
];
