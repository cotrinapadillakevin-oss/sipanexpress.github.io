import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export const GalleryModal = ({ item, total, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="lightbox-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de fotografía ampliada"
    >
      <div className="lightbox-content">
        {/* Close Button */}
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Cerrar imagen"
        >
          <X size={20} />
        </button>

        {/* Prev / Next Navigation */}
        <button
          type="button"
          className="lightbox-nav-btn lightbox-prev"
          onClick={onPrev}
          aria-label="Fotografía anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          className="lightbox-nav-btn lightbox-next"
          onClick={onNext}
          aria-label="Fotografía siguiente"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Display */}
        <div className="lightbox-image-wrap">
          <img
            src={item.image}
            alt={item.title}
          />
        </div>

        {/* Caption & Metadata */}
        <div className="lightbox-caption">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold-400)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {item.categoryLabel}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
              {currentIndex + 1} de {total}
            </span>
          </div>

          <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.35rem' }}>
            {item.title}
          </h3>

          <p style={{ color: 'var(--color-text-light)', fontSize: '0.92rem', lineHeight: 1.5 }}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
