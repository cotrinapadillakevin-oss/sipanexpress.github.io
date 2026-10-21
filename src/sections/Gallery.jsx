import React, { useState } from 'react';
import { ZoomIn, Camera, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/gallery';
import { companyInfo } from '../data/companyInfo';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'todos'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="spa-screen-container">
      <div className="container">
        {/* Header */}
        <div className="spa-section-header">
          <span className="spa-section-badge">Registro Fotográfico Real</span>
          <h2 className="spa-section-title">Galería de Experiencias y Flota</h2>
          <p className="spa-section-subtitle">
            Fotografías auténticas de nuestros viajes, delegaciones turísticas y comodidades a bordo. Haz clic en cualquier imagen para ampliarla.
          </p>

          {/* Category Filter Pills */}
          <div className="spa-filter-pill-bar">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`spa-filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid (Fits on Desktop Viewport) */}
        <div className="gallery-spa-grid">
          {filteredItems.slice(0, 8).map((item, idx) => (
            <div
              key={item.id}
              className="gallery-spa-card"
              onClick={() => setLightboxIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(idx)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-spa-overlay">
                <span className="gallery-spa-cat">{item.categoryLabel}</span>
                <h4 className="gallery-spa-title">{item.title}</h4>
                <div className="gallery-spa-zoom-btn">
                  <ZoomIn size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="spa-lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={() => setLightboxIndex(null)}
            aria-label="Cerrar galería"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            className="lightbox-nav-btn prev"
            onClick={handlePrev}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="lightbox-content-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={currentItem.image} alt={currentItem.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="lightbox-badge">{currentItem.categoryLabel}</span>
              <h3 className="lightbox-title">{currentItem.title}</h3>
              <p className="lightbox-desc">{currentItem.description}</p>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-nav-btn next"
            onClick={handleNext}
            aria-label="Siguiente foto"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
