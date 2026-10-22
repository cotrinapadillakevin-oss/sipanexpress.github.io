import React, { useState } from 'react';
import { services } from '../data/services';
import { 
  CheckCircle2, 
  MessageCircle, 
  Bus, 
  Plane, 
  Car, 
  Users, 
  Landmark, 
  Building2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { getAssetUrl } from '../utils/assets';

const serviceIcons = {
  'transporte-turistico': Landmark,
  'traslados-aeropuerto': Plane,
  'traslados-privados': Car,
  'transporte-grupos': Users,
  'circuitos-excursiones': Bus,
  'eventos-corporativos': Building2
};

export const Services = ({ onSelectService, onNavigateToFleet }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const activeService = services.find((s) => s.id === selectedServiceId) || services[0];
  const ActiveIcon = serviceIcons[activeService.id] || Bus;

  const handleWhatsAppQuote = (service) => {
    const text = `*CONSULTA DE SERVICIO - TURISMO SIPÁN EXPRESS*
━━━━━━━━━━━━━━━━━━━━━━━━━━
🚍 *Servicio:* ${service.title}
🏷️ *Categoría:* ${service.tagline}
━━━━━━━━━━━━━━━━━━━━━━━━━━
¡Hola Don Lucho Mena! Deseo solicitar información, disponibilidad y tarifa para este servicio.`;

    const url = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="spa-screen-container">
      <div className="container">
        {/* Section Header */}
        <div className="spa-section-header">
          <span className="spa-section-badge">Servicios Profesionales</span>
          <h2 className="spa-section-title">Nuestros Servicios de Transporte Turístico</h2>
          <p className="spa-section-subtitle">
            Soluciones de movilidad confiables en Chiclayo, Lambayeque y todo el Perú. Selecciona un servicio para conocer sus comodidades.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase Layout */}
        <div className="services-spa-grid">
          {/* Left Column: Service Selector List */}
          <div className="services-list-column">
            {services.map((svc) => {
              const Icon = serviceIcons[svc.id] || Bus;
              const isSelected = svc.id === selectedServiceId;
              return (
                <button
                  key={svc.id}
                  type="button"
                  className={`service-tab-item ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedServiceId(svc.id)}
                >
                  <div className="service-tab-icon">
                    <Icon size={20} />
                  </div>
                  <div className="service-tab-texts">
                    <span className="service-tab-title">{svc.title}</span>
                    <span className="service-tab-tagline">{svc.tagline}</span>
                  </div>
                  <ArrowRight size={16} className="service-tab-arrow" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Featured Service Card */}
          <div className="services-detail-column">
            <div className="service-detail-card">
              <div className="service-detail-image-wrap">
                <img
                  src={getAssetUrl(activeService.image)}
                  alt={activeService.title}
                  className="service-detail-img"
                />
                <div className="service-detail-badge">
                  <ActiveIcon size={16} />
                  <span>{activeService.tagline}</span>
                </div>
              </div>

              <div className="service-detail-body">
                <h3 className="service-detail-title">{activeService.title}</h3>
                <p className="service-detail-desc">{activeService.description}</p>

                <div className="service-detail-features-grid">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="service-feat-row">
                      <CheckCircle2 size={16} className="feat-check-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="service-detail-actions">
                  <button
                    type="button"
                    className="btn btn-gold glow-orange"
                    onClick={() => handleWhatsAppQuote(activeService)}
                  >
                    <MessageCircle size={18} />
                    <span>Cotizar con Lucho Mena</span>
                  </button>

                  {onNavigateToFleet && (
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={onNavigateToFleet}
                    >
                      <Bus size={18} />
                      <span>Ver Nuestra Flota</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
