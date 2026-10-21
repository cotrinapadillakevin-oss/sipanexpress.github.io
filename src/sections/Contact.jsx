import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  Building,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { services } from '../data/services';

export const Contact = ({ preselectedService, preselectedVehicle, preselectedDestination }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceName: 'Transporte Turístico',
    travelDate: '',
    passengers: '5 a 15 pasajeros (Van HiAce)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceName: preselectedService.title
      }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedVehicle) {
      setFormData((prev) => ({
        ...prev,
        notes: `Consulta para unidad: ${preselectedVehicle.name} (${preselectedVehicle.capacityBadge}). ${prev.notes}`
      }));
    }
  }, [preselectedVehicle]);

  useEffect(() => {
    if (preselectedDestination) {
      setFormData((prev) => ({
        ...prev,
        notes: `Ruta de viaje hacia: ${preselectedDestination.name} (${preselectedDestination.location}). ${prev.notes}`
      }));
    }
  }, [preselectedDestination]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*SOLICITUD DE COTIZACIÓN WEB - TURISMO SIPÁN EXPRESS*
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Nombre:* ${formData.fullName}
📱 *Teléfono:* ${formData.phone}
🚍 *Servicio:* ${formData.serviceName}
📅 *Fecha:* ${formData.travelDate || 'Por coordinar'}
👥 *Pasajeros:* ${formData.passengers}
${formData.notes ? `📝 *Detalles:* ${formData.notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━━━━━
¡Hola Lucho Mena! Deseo solicitar disponibilidad y cotización.`;

    const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="spa-screen-container">
      <div className="container">
        {/* Header */}
        <div className="spa-section-header">
          <span className="spa-section-badge">Atención Oficial 24/7</span>
          <h2 className="spa-section-title">Canales de Contacto y Reservas</h2>
          <p className="spa-section-subtitle">
            Comunícate directamente con nuestros coordinadores o completa el formulario para recibir tu cotización inmediata por WhatsApp.
          </p>
        </div>

        {/* 2-Column Contact Layout (Fits on Desktop Viewport) */}
        <div className="contact-spa-grid">
          {/* Left Column: Visual Contact Cards */}
          <div className="contact-cards-column">
            {/* Primary Contact: Lucho Mena */}
            <div className="contact-channel-card primary-channel">
              <div className="channel-badge-top">
                <span className="live-dot">●</span>
                <span>Contacto Principal / Más Usado</span>
              </div>

              <div className="channel-body">
                <div className="channel-avatar">
                  <Phone size={24} />
                </div>
                <div className="channel-meta">
                  <h3 className="channel-name">Lucho Mena</h3>
                  <span className="channel-role">Coordinador General & Reservas</span>
                  <a href="tel:+51968229678" className="channel-phone-link">
                    +51 968 229 678
                  </a>
                </div>
              </div>

              <div className="channel-actions">
                <a
                  href={`https://wa.me/51968229678?text=${encodeURIComponent("Hola Don Lucho Mena, deseo consultar disponibilidad de transporte turístico.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Directo</span>
                </a>

                <a href="tel:+51968229678" className="btn btn-outline">
                  <Phone size={16} />
                  <span>Llamar Ahora</span>
                </a>
              </div>
            </div>

            {/* Secondary Contact: Sipán Express */}
            <div className="contact-channel-card secondary-channel">
              <div className="channel-body">
                <div className="channel-avatar alt">
                  <Phone size={20} />
                </div>
                <div className="channel-meta">
                  <h4 className="channel-name">Turismo Sipán Express</h4>
                  <span className="channel-role">Línea de Respaldo y Soporte</span>
                  <a href="tel:+51914131725" className="channel-phone-link">
                    +51 914 131 725
                  </a>
                </div>
              </div>

              <div className="channel-actions-simple">
                <a
                  href={`https://wa.me/51914131725?text=${encodeURIComponent("Hola Turismo Sipán Express, deseo consultar por un servicio de transporte.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-chat-link"
                >
                  <MessageCircle size={15} />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="contact-info-pill-box">
              <div className="info-pill-item">
                <MapPin size={16} className="info-pill-icon" />
                <div>
                  <strong>Base Operativa:</strong>
                  <span>Lambayeque - Chiclayo, Perú</span>
                </div>
              </div>

              <div className="info-pill-item">
                <Clock size={16} className="info-pill-icon" />
                <div>
                  <strong>Horario de Salidas:</strong>
                  <span>Operaciones 24 Horas / 7 Días</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Quote Form */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <div className="form-card-header">
                <h3 className="form-card-title">Solicitar Cotización Inmediata</h3>
                <span className="form-card-sub">Respuesta directa al WhatsApp de Lucho Mena</span>
              </div>

              <form onSubmit={handleSubmit} className="contact-form-spa">
                <div className="form-row-2">
                  <div className="form-field">
                    <label>Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Teléfono o Celular *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 987 654 321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Tipo de Servicio</label>
                    <select
                      value={formData.serviceName}
                      onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Viaje de Promoción / Delegación">Viaje de Promoción / Delegación</option>
                      <option value="Circuito Arqueológico Personalizado">Circuito Arqueológico</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>N° Pasajeros / Unidad</label>
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    >
                      <option value="1 a 4 personas (Servicio Privado)">1 a 4 personas (Privado)</option>
                      <option value="5 a 15 personas (Van Toyota HiAce)">5 a 15 personas (Van HiAce)</option>
                      <option value="16 a 29 personas (Minibús Fuso Rosa)">16 a 29 personas (Minibús Rosa)</option>
                      <option value="30 a 45+ personas (Bus Salabus)">30 a 45+ personas (Bus Salabus)</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>Fecha de Salida (Opcional)</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label>Comentarios o Itinerario (Opcional)</label>
                  <textarea
                    rows={2}
                    placeholder="Indica puntos de recojo, destinos de interés o consultas adicionales..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-gold glow-orange submit-quote-btn">
                  <MessageCircle size={18} />
                  <span>Enviar Cotización a Lucho Mena</span>
                  <Send size={16} />
                </button>
              </form>

              {submitted && (
                <div className="form-success-banner">
                  <CheckCircle2 size={16} color="var(--color-whatsapp)" />
                  <span>¡Mensaje generado! Abriendo WhatsApp con Turismo Sipan Express...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
