import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "¿Con cuánta anticipación debo solicitar una cotización o reserva?",
      answer: "Para traslados al aeropuerto de Chiclayo y paseos privados, recomendamos coordinar con 24 a 48 horas de anticipación. Para viajes de promoción o alquiler de autobuses completos (Salabus o Fuso Rosa), se sugiere reservar con 1 a 2 semanas de antelación para asegurar disponibilidad de unidad y permisos de ruta."
    },
    {
      question: "¿Dónde se realiza el recojo de pasajeros para traslados y tours?",
      answer: "El recojo es totalmente personalizado. Puede ser en el Aeropuerto Internacional Capitán FAP José A. Quiñones de Chiclayo, en su hotel, domicilio particular o punto de encuentro previamente coordinado en Chiclayo o Lambayeque."
    },
    {
      question: "¿Qué capacidad de equipaje tienen las diferentes unidades?",
      answer: "Nuestra Van Toyota HiAce cuenta con espacio interior para maletas de mano y parrilla superior. El Minibús Fuso Rosa dispone de maleteros internos y bodega. Y nuestro Bus Panorámico Salabus cuenta con amplias bodegas inferiores de gran volumen, ideal para maletas grandes de delegaciones escolares y universitarias."
    },
    {
      question: "¿Las unidades cuentan con aire acondicionado y comodidades para viajes largos?",
      answer: "Sí, todas nuestras unidades cuentan con sistema de climatización integral (aire acondicionado), asientos reclinables de alto confort, cortinas de protección solar y equipo de sonido para música ambiental o guiado turístico."
    },
    {
      question: "¿Realizan viajes turísticos fuera del departamento de Lambayeque?",
      answer: "Sí. Nuestra base operativa está en Lambayeque - Chiclayo y cubrimos la Ruta Moche (Tumbas Reales, Túcume, Pimentel), pero también realizamos viajes interdepartamentales hacia Trujillo, Cajamarca, Piura, Chachapoyas y otros destinos turísticos del Perú."
    },
    {
      question: "¿Cuáles son los métodos de pago aceptados para las reservas?",
      answer: "Aceptamos transferencias bancarias directas (BCP, BBVA, Interbank, Banco de la Nación), billeteras digitales (Yape y Plin) y pagos en efectivo coordinados con comprobante oficial."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="spa-screen-container">
      <div className="container">
        {/* Header */}
        <div className="spa-section-header">
          <span className="spa-section-badge">Asistencia al Viajero</span>
          <h2 className="spa-section-title">Preguntas Frecuentes (FAQ)</h2>
          <p className="spa-section-subtitle">
            Resolvemos tus dudas principales sobre reservas, flota, puntos de recojo y políticas de viaje con Turismo Sipán Express.
          </p>
        </div>

        {/* 2-Column Layout (Fits on Desktop Viewport) */}
        <div className="faq-spa-grid">
          {/* Left Column: Direct Support Card */}
          <div className="faq-support-column">
            <div className="faq-support-card">
              <div className="support-card-header">
                <div className="support-icon-wrap">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h4 className="support-card-title">¿Tienes una consulta específica?</h4>
                  <span className="support-card-sub">Atención directa las 24 horas</span>
                </div>
              </div>

              <p className="support-card-text">
                Comunícate directamente con nuestro coordinador principal para verificar itinerarios, fechas especiales y presupuestos a medida.
              </p>

              <div className="support-contact-list">
                <div className="support-contact-item">
                  <Phone size={16} color="var(--color-movil-orange)" />
                  <div>
                    <strong>Lucho Mena (Principal):</strong>
                    <a href="tel:+51968229678">+51 968 229 678</a>
                  </div>
                </div>

                <div className="support-contact-item">
                  <MapPin size={16} color="var(--color-movil-orange)" />
                  <div>
                    <strong>Base Operativa:</strong>
                    <span>Lambayeque - Chiclayo, Perú</span>
                  </div>
                </div>

                <div className="support-contact-item">
                  <ShieldCheck size={16} color="var(--color-movil-orange)" />
                  <div>
                    <strong>Garantía:</strong>
                    <span>Flota con SOAT Turístico y MTC</span>
                  </div>
                </div>
              </div>

              <div className="support-card-actions">
                <a
                  href={`https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent("Hola Don Lucho Mena, tengo una consulta sobre sus servicios de Turismo Sipán Express.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold glow-orange"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="faq-accordion-column">
            <div className="faq-accordion-wrap">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-accordion-trigger"
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <ChevronDown size={18} className="faq-chevron" />
                    </button>

                    {isOpen && (
                      <div className="faq-accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
