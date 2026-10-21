/**
 * UTILIDADES DE VALIDACIÓN PARA FORMULARIOS
 * Turismo Sipán Express
 */

export const validateQuoteForm = (formData) => {
  const errors = {};

  // 1. Nombre Completo
  if (!formData.fullName || formData.fullName.trim().length === 0) {
    errors.fullName = "Por favor, ingresa tu nombre completo.";
  } else if (formData.fullName.trim().length < 3) {
    errors.fullName = "El nombre debe contener al menos 3 caracteres.";
  }

  // 2. Teléfono / WhatsApp
  const phoneClean = (formData.phone || "").replace(/[\s\-\(\)\+]/g, "");
  if (!formData.phone || formData.phone.trim().length === 0) {
    errors.phone = "El número telefónico o WhatsApp es obligatorio para comunicarnos contigo.";
  } else if (!/^\d{7,15}$/.test(phoneClean)) {
    errors.phone = "Ingresa un número telefónico válido (entre 7 y 15 dígitos numéricos).";
  }

  // 3. Correo Electrónico (Opcional o recomendado)
  if (formData.email && formData.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Ingresa un correo electrónico con formato válido (ej. tu@correo.com).";
    }
  }

  // 4. Servicio Solicitado
  if (!formData.serviceId || formData.serviceId === "") {
    errors.serviceId = "Selecciona el tipo de servicio de transporte que necesitas.";
  }

  // 5. Fecha del Viaje
  if (!formData.travelDate) {
    errors.travelDate = "Selecciona la fecha estimada para el servicio.";
  } else {
    const selectedDate = new Date(formData.travelDate + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.travelDate = "La fecha del viaje no puede ser anterior a hoy.";
    }
  }

  // 6. Cantidad de Pasajeros
  const passengersNum = parseInt(formData.passengers, 10);
  if (!formData.passengers || isNaN(passengersNum)) {
    errors.passengers = "Indica la cantidad estimada de pasajeros.";
  } else if (passengersNum < 1) {
    errors.passengers = "Debe ser al menos 1 pasajero.";
  } else if (passengersNum > 200) {
    errors.passengers = "Para grupos mayores a 200 pasajeros, indícalo detalladamente en el mensaje.";
  }

  // 7. Mensaje / Ruta detallada
  if (!formData.message || formData.message.trim().length === 0) {
    errors.message = "Por favor, agrega una breve descripción de tu ruta, origen y destino.";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Cuéntanos más detalles (al menos 10 caracteres).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Genera el enlace directo a WhatsApp con el mensaje preformateado
 */
export const buildWhatsAppQuoteUrl = (whatsappNumber, quoteData) => {
  const text = `*SOLICITUD DE COTIZACIÓN - TURISMO SIPÁN EXPRESS*
---------------------------------------
👤 *Cliente:* ${quoteData.fullName}
📞 *Teléfono:* ${quoteData.phone}
📧 *Email:* ${quoteData.email || "No especificado"}
🚐 *Servicio:* ${quoteData.serviceName || quoteData.serviceId}
📅 *Fecha:* ${quoteData.travelDate}
👥 *Pasajeros:* ${quoteData.passengers}
📝 *Detalles / Ruta:* ${quoteData.message}
---------------------------------------
Enviado desde el sitio web oficial.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
};
