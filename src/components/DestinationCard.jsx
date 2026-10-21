import React from 'react';
import { MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import Button from './Button';
import { companyInfo } from '../data/companyInfo';

export const DestinationCard = ({ destination, onSelectDestination }) => {
  const whatsappMessage = `Hola Turismo Sipán Express, deseo consultar transporte para el destino: ${destination.name} (${destination.location}).`;
  const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="destination-card">
      <div className="destination-img-wrap">
        <img
          src={destination.image}
          alt={`${destination.name} - Destino Turismo Sipán Express`}
          loading="lazy"
        />
        <div className="destination-location-chip">
          <MapPin size={14} color="var(--color-gold-400)" />
          <span>{destination.location}</span>
        </div>
      </div>

      <div className="destination-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-600)', letterSpacing: '0.04em' }}>
            {destination.category}
          </span>
          <span className="badge-provisional" style={{ fontSize: '0.68rem' }}>
            {destination.statusBadge}
          </span>
        </div>

        <h3 className="destination-title">{destination.name}</h3>
        <p className="destination-desc">{destination.description}</p>

        <div className="destination-chips" aria-label="Aspectos destacados">
          {destination.highlights.map((item, idx) => (
            <span key={idx} className="destination-chip">
              #{item}
            </span>
          ))}
        </div>

        <div className="destination-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <Clock size={15} color="var(--color-primary-700)" />
            <span>{destination.duration}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSelectDestination(destination)}
              icon={ArrowRight}
              iconPosition="right"
            >
              Cotizar
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              href={whatsappUrl}
              target="_blank"
              icon={MessageCircle}
              aria-label={`Consultar por WhatsApp para ${destination.name}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;
