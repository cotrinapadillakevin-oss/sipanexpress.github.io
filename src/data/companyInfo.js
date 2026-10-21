/**
 * DATOS CONFIGURABLES DE LA EMPRESA - TURISMO SIPÁN EXPRESS
 * =========================================================
 * Todos los datos marcados como [DATO PROVISIONAL] están listos para ser
 * actualizados con la información oficial de la empresa.
 */

export const companyInfo = {
  name: "Turismo Sipán Express",
  legalName: "Turismo Sipán Express E.I.R.L.",
  slogan: "Tu viaje seguro, cómodo y puntual por el norte y todo el Perú",
  shortDescription: "Empresa especializada en transporte turístico terrestre, traslados ejecutivos, viajes grupales y servicios corporativos con altos estándares de confort y seguridad.",

  // Datos de contacto oficiales
  contact: {
    // Número principal de WhatsApp y reservas (Sipán Express)
    whatsappNumber: "51914131725",
    whatsappDisplay: "+51 914 131 725",
    whatsappDefaultMessage: "¡Hola Turismo Sipán Express! Deseo solicitar información y una cotización para un servicio de transporte turístico.",

    // Contacto directo / Coordinación
    managerName: "Lucho Mena",
    managerPhone: "51968229678",
    managerPhoneDisplay: "+51 968 229 678",

    // Lista completa de teléfonos de atención directa
    phoneList: [
      {
        label: "Sipán Express (WhatsApp / Reservas)",
        number: "51914131725",
        display: "+51 914 131 725",
        isWhatsApp: true
      },
      {
        label: "Lucho Mena (Atención Directa)",
        number: "51968229678",
        display: "+51 968 229 678",
        isWhatsApp: true
      }
    ],

    // Teléfono de referencia visual
    phone: "+51 914 131 725 / +51 968 229 678",
    phoneCall: "+51914131725",

    // Correo electrónico de cotizaciones y reservas
    email: "contacto@turismosipanexpress.pe", // [DATO PROVISIONAL - Reemplazar si se proporciona correo corporativo]

    // Ubicación de oficina o base de operaciones
    address: "Chiclayo, Lambayeque - Perú",

    // Horario de atención
    businessHours: "Lunes a Domingo: 24 Horas (Atención previa reserva / consultas de 8:00 AM a 8:00 PM)",

    // Redes sociales (Configurables)
    social: {
      facebook: "https://facebook.com/# [DATO PROVISIONAL]",
      instagram: "https://instagram.com/# [DATO PROVISIONAL]",
      tiktok: "https://tiktok.com/# [DATO PROVISIONAL]"
    }
  },

  // Sección Nosotros: Propuesta corporativa provisional claramente identificada
  about: {
    history: "Turismo Sipán Express nace en la región Lambayeque con la firme convicción de transformar el transporte turístico en el norte del país, ofreciendo a viajeros nacionales y extranjeros un servicio distinguido por la puntualidad, unidades modernas y una atención cálida y personalizada.",
    mission: "[PROPUESTA PROVISIONAL]: Brindar servicios de transporte turístico y traslados privados de máxima excelencia, conectando a los pasajeros con los mejores destinos culturales, naturales y corporativos de la región y el país, garantizando siempre seguridad, confort y una experiencia memorable.",
    vision: "[PROPUESTA PROVISIONAL]: Consolidarnos como la empresa líder de transporte turístico en la región Lambayeque y el norte del Perú, reconocida por la modernidad de su flota, la integridad de su equipo humano y la satisfacción total de cada cliente.",
    values: [
      {
        title: "Seguridad Integral",
        description: "Conductores profesionales con experiencia en rutas interurbanas y unidades con monitoreo y mantenimiento riguroso."
      },
      {
        title: "Puntualidad Absoluta",
        description: "Respetamos su itinerario al minuto en cada recogida, traslado de aeropuerto y excursión programada."
      },
      {
        title: "Confort y Limpieza",
        description: "Vehículos climatizados, asientos reclinables ergonómicos y cabinas desinfectadas para un viaje placentero."
      },
      {
        title: "Atención Cordial y Personalizada",
        description: "Trato humano, respetuoso y adaptable a los requerimientos particulares de familias, empresas e instituciones."
      }
    ]
  }
};
