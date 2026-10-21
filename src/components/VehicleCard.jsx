import React, { useState } from 'react';
import { Users, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import Button from './Button';
import { companyInfo } from '../data/companyInfo';

export const VehicleCard = ({ vehicle, onSelectForQuote }) => {
  const [activeImage, setActiveImage] = useState(vehicle.mainImage);

  const whatsappMessage = `Hola Turismo Sipán Express, deseo consultar disponibilidad y cotización para la unidad: ${vehicle.name} (${vehicle.category}).`;
  const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="vehicle-card">
      <div className="vehicle-gallery-preview">
        <img
          src={activeImage}
          alt={`${vehicle.name} - Flota de Turismo Sipán Express`}
          loading="lazy"
        />
        <div className="vehicle-plate-tag">
          <span>{vehicle.category}</span>
        </div>
      </div>

      {/* Thumbnails if vehicle has multiple real photos */}
      {vehicle.galleryImages && vehicle.galleryImages.length > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', padding: '0.75rem 1.75rem 0', overflowX: 'auto' }}>
          {vehicle.galleryImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImage(img)}
              style={{
                width: '54px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: activeImage === img ? '2px solid var(--color-gold-500)' : '1px solid var(--color-border)',
                opacity: activeImage === img ? 1 : 0.65,
                transition: 'all var(--transition-fast)',
                flexShrink: 0
              }}
              aria-label={`Ver foto ${idx + 1} de ${vehicle.name}`}
            >
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}

      <div className="vehicle-content">
        <div className="vehicle-header-meta">
          <span className="vehicle-category">{vehicle.category}</span>
          <span className="badge-verified">Fotografía Real</span>
        </div>

        <h3 className="vehicle-title">{vehicle.name}</h3>

        <div className="vehicle-capacity-banner">
          <Users size={18} color="var(--color-gold-700)" />
          <span>{vehicle.capacityBadge}</span>
        </div>

        <ul className="vehicle-features-list" aria-label="Equipamiento y comodidades">
          {vehicle.verifiedFeatures.map((feat, idx) => (
            <li key={idx} className="vehicle-feature-item">
              <CheckCircle2 size={16} className="vehicle-feature-check" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="vehicle-recommended">
          <strong>Uso recomendado:</strong> {vehicle.recommendedFor}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <Button
            variant="primary"
            fullWidth
            onClick={() => onSelectForQuote(vehicle)}
            icon={ArrowRight}
            iconPosition="right"
          >
            Cotizar esta Unidad
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

export default VehicleCard;
