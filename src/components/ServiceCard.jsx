import React from 'react';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import Button from './Button';
import { companyInfo } from '../data/companyInfo';

export const ServiceCard = ({ service, onSelectForQuote }) => {
  const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(service.inquiryMessage)}`;

  return (
    <article className="service-card">
      <div className="service-image-wrap">
        <img
          src={service.image}
          alt={`Servicio de ${service.title} - Turismo Sipán Express`}
          loading="lazy"
        />
        <div className="service-badge">
          <span className="badge-provisional">{service.statusBadge}</span>
        </div>
      </div>

      <div className="service-content">
        <span className="service-tagline">{service.tagline}</span>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.description}</p>

        <ul className="service-features" aria-label="Características del servicio">
          {service.features.map((feature, idx) => (
            <li key={idx} className="service-feature-item">
              <Check size={16} className="service-feature-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="service-actions">
          <Button
            variant="outline"
            fullWidth
            onClick={() => onSelectForQuote(service)}
            icon={ArrowRight}
            iconPosition="right"
            style={{ marginBottom: '0.65rem' }}
          >
            Cotizar este Servicio
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            fullWidth
            href={whatsappUrl}
            target="_blank"
            icon={MessageCircle}
          >
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
