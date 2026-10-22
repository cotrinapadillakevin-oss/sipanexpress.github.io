import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import { 
  MapPin, 
  Landmark, 
  Waves, 
  TreePine, 
  Plane, 
  Clock, 
  X, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { getAssetUrl } from '../utils/assets';

export const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos los Destinos', icon: MapPin },
    { id: 'cultura', label: 'Arqueología & Historia', icon: Landmark },
    { id: 'playa', label: 'Playas & Gastronomía', icon: Waves },
    { id: 'naturaleza', label: 'Naturaleza & Paisajes', icon: TreePine },
    { id: 'aeropuerto', label: 'Traslados Aeropuerto', icon: Plane }
  ];

  const filteredDestinations = destinations.filter((d) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'cultura') return d.category.toLowerCase().includes('arqueología') || d.category.toLowerCase().includes('cultura');
    if (activeCategory === 'playa') return d.category.toLowerCase().includes('playa') || d.category.toLowerCase().includes('gastronomía');
    if (activeCategory === 'naturaleza') return d.category.toLowerCase().includes('naturaleza') || d.category.toLowerCase().includes('paisaje');
    if (activeCategory === 'aeropuerto') return d.category.toLowerCase().includes('aérea') || d.category.toLowerCase().includes('hoteles');
    return true;
  });

  const handleWhatsAppQuote = (dest) => {
    const text = `*CONSULTA DE DESTINO - TURISMO SIPÁN EXPRESS*
━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 *Destino:* ${dest.name}
📍 *Ubicación:* ${dest.location}
⏱️ *Duración estimada:* ${dest.duration}
━━━━━━━━━━━━━━━━━━━━━━━━━━
¡Hola Don Lucho Mena! Deseo cotizar movilidad turística para este destino.`;

    const url = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="spa-screen-container">
      <div className="container">
        {/* Header */}
        <div className="spa-section-header">
          <span className="spa-section-badge">Rutas del Norte Peruano</span>
          <h2 className="spa-section-title">Destinos Turísticos Destacados</h2>
          <p className="spa-section-subtitle">
            Descubre los atractivos donde operan nuestras unidades. Haz clic en cualquier destino para ver el itinerario detallado.
          </p>

          {/* Category Filter Pills */}
          <div className="spa-filter-pill-bar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`spa-filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Destination Cards Grid (Fits on screen) */}
        <div className="destinations-spa-grid">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="destination-spa-card"
              onClick={() => setSelectedDestination(dest)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedDestination(dest)}
            >
              <div className="dest-spa-img-wrap">
                <img src={getAssetUrl(dest.image)} alt={dest.name} loading="lazy" />
                <span className="dest-spa-category">{dest.category}</span>
              </div>
              <div className="dest-spa-info">
                <h4 className="dest-spa-name">{dest.name}</h4>
                <div className="dest-spa-meta">
                  <span className="dest-spa-loc">
                    <MapPin size={13} />
                    {dest.location}
                  </span>
                  <span className="dest-spa-dur">
                    <Clock size={13} />
                    {dest.duration}
                  </span>
                </div>
                <div className="dest-spa-footer">
                  <span className="dest-spa-action-hint">
                    Ver más información
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="spa-modal-backdrop" onClick={() => setSelectedDestination(null)}>
          <div
            className="spa-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-dest-title"
          >
            <button
              type="button"
              className="spa-modal-close"
              onClick={() => setSelectedDestination(null)}
              aria-label="Cerrar ventana"
            >
              <X size={22} />
            </button>

            <div className="dest-modal-image-wrap">
              <img src={getAssetUrl(selectedDestination.image)} alt={selectedDestination.name} />
              <div className="dest-modal-badge">
                <Sparkles size={16} />
                <span>{selectedDestination.category}</span>
              </div>
            </div>

            <div className="dest-modal-content">
              <div className="dest-modal-header">
                <h3 id="modal-dest-title" className="dest-modal-title">
                  {selectedDestination.name}
                </h3>
                <div className="dest-modal-tags">
                  <span className="dest-modal-tag">
                    <MapPin size={15} color="var(--color-movil-orange)" />
                    {selectedDestination.location}
                  </span>
                  <span className="dest-modal-tag">
                    <Clock size={15} color="var(--color-movil-orange)" />
                    {selectedDestination.duration}
                  </span>
                </div>
              </div>

              <p className="dest-modal-desc">{selectedDestination.description}</p>

              <div className="dest-modal-highlights">
                <h5 className="highlights-heading">Atractivos y Puntos Destacados:</h5>
                <div className="highlights-list">
                  {selectedDestination.highlights.map((item, idx) => (
                    <div key={idx} className="highlight-item">
                      <CheckCircle2 size={16} color="var(--color-movil-orange)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dest-modal-actions">
                <button
                  type="button"
                  className="btn btn-gold glow-orange"
                  onClick={() => handleWhatsAppQuote(selectedDestination)}
                >
                  <MessageCircle size={18} />
                  <span>Cotizar este Destino con Lucho Mena</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedDestination(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;
