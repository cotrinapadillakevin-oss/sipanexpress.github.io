import React, { useState } from 'react';
import { vehicles } from '../data/vehicles';
import { 
  Users, 
  ShieldCheck, 
  Wind, 
  Luggage, 
  Radio, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const Fleet = ({ onSelectVehicle }) => {
  const [selectedVehicleId, setSelectedVehicleId] = useState(vehicles[0].id);
  const activeVehicle = vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0];

  const [activeImage, setActiveImage] = useState(activeVehicle.mainImage);

  // Update active image when vehicle changes
  const handleSelectVehicle = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
    const v = vehicles.find((item) => item.id === vehicleId);
    if (v) {
      setActiveImage(v.mainImage);
    }
  };

  const handleWhatsAppQuote = (veh) => {
    const text = `*CONSULTA DE FLOTA - TURISMO SIPÁN EXPRESS*
━━━━━━━━━━━━━━━━━━━━━━━━━━
🚐 *Unidad:* ${veh.name}
👥 *Capacidad:* ${veh.capacityBadge}
🏷️ *Categoría:* ${veh.category}
━━━━━━━━━━━━━━━━━━━━━━━━━━
¡Hola Don Lucho Mena! Deseo consultar disponibilidad y cotización para esta unidad.`;

    const url = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="spa-screen-container">
      <div className="container">
        {/* Header */}
        <div className="spa-section-header">
          <span className="spa-section-badge">Fotografías 100% Auténticas</span>
          <h2 className="spa-section-title">Nuestra Flota de Transporte Turístico</h2>
          <p className="spa-section-subtitle">
            Unidades modernas, cómodas y minuciosamente mantenidas para garantizar la máxima seguridad y confort en cada viaje.
          </p>

          {/* Vehicle Switcher Tabs */}
          <div className="spa-fleet-tabs">
            {vehicles.map((v) => {
              const isSelected = v.id === selectedVehicleId;
              return (
                <button
                  key={v.id}
                  type="button"
                  className={`fleet-tab-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectVehicle(v.id)}
                >
                  <span className="fleet-tab-name">{v.name}</span>
                  <span className="fleet-tab-badge">{v.capacityBadge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Showcase Grid (Fits on Desktop Viewport) */}
        <div className="fleet-showcase-grid">
          {/* Left Column: Interactive Image & Thumbnail Carousel */}
          <div className="fleet-visual-column">
            <div className="fleet-main-image-wrap">
              <img
                src={activeImage}
                alt={`${activeVehicle.name} - Turismo Sipán Express`}
                className="fleet-main-img"
              />
              <div className="fleet-verified-badge">
                <Camera size={15} />
                <span>Fotografía Real</span>
              </div>
            </div>

            {/* Clickable Thumbnails */}
            {activeVehicle.galleryImages && activeVehicle.galleryImages.length > 1 && (
              <div className="fleet-thumbnails-row">
                {activeVehicle.galleryImages.map((img, idx) => {
                  const isCurrent = activeImage === img;
                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`fleet-thumb-btn ${isCurrent ? 'active' : ''}`}
                      onClick={() => setActiveImage(img)}
                      aria-label={`Ver ángulo ${idx + 1}`}
                    >
                      <img src={img} alt="" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Specifications & Amenities */}
          <div className="fleet-info-column">
            <div className="fleet-info-card">
              <div className="fleet-header-meta">
                <span className="fleet-category-tag">{activeVehicle.category}</span>
                <span className="fleet-capacity-pill">
                  <Users size={16} />
                  {activeVehicle.capacityBadge}
                </span>
              </div>

              <h3 className="fleet-display-title">{activeVehicle.name}</h3>
              <p className="fleet-display-tagline">{activeVehicle.tagline}</p>

              {/* Verified Features Checklist */}
              <div className="fleet-features-list">
                {activeVehicle.verifiedFeatures.map((feat, idx) => (
                  <div key={idx} className="fleet-feat-item">
                    <CheckCircle2 size={16} className="feat-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="fleet-recommendation-box">
                <strong>Recomendado para:</strong>
                <span>{activeVehicle.recommendedFor}</span>
              </div>

              <div className="fleet-actions-row">
                <button
                  type="button"
                  className="btn btn-gold glow-orange"
                  onClick={() => handleWhatsAppQuote(activeVehicle)}
                >
                  <MessageCircle size={18} />
                  <span>Cotizar Unidad con Lucho Mena</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
