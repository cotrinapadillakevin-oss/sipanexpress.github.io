import React from 'react';
import { MessageSquareQuote, Star, CheckCircle2, MessageCircle } from 'lucide-react';
import { testimonialsConfig } from '../data/testimonials';
import { companyInfo } from '../data/companyInfo';
import Button from '../components/Button';

export const Testimonials = () => {
  const hasReviews = testimonialsConfig.items && testimonialsConfig.items.length > 0;
  const whatsappFeedbackUrl = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent("Hola Turismo Sipán Express, me gustaría compartir mi opinión y experiencia de viaje con su empresa.")}`;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Experiencias y Reseñas</span>
          <h2 className="section-title">{testimonialsConfig.sectionTitle}</h2>
          <p className="section-subtitle">
            {testimonialsConfig.sectionSubtitle}
          </p>
        </div>

        {hasReviews ? (
          <div className="grid-3">
            {testimonialsConfig.items.map((rev) => (
              <div key={rev.id} className="service-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#f59e0b' }}>
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                  "{rev.comment}"
                </p>
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary-900)' }}>{rev.author}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{rev.role} • {rev.route}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Honest, prepared section without fabricated reviews */
          <div className="testimonials-box">
            <div className="testimonials-icon-wrap">
              <MessageSquareQuote size={32} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-primary-900)' }}>
              Sección Lista para Reseñas Verificadas
            </h3>

            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              {testimonialsConfig.notice}
            </p>

            <div style={{ background: 'var(--color-bg-alt)', padding: '1.25rem', borderRadius: 'var(--radius-md)', maxWidth: '580px', margin: '0 auto 1.75rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', margin: 0 }}>
                {testimonialsConfig.invitationText}
              </p>
            </div>

            <Button
              variant="whatsapp"
              href={whatsappFeedbackUrl}
              target="_blank"
              icon={MessageCircle}
            >
              {testimonialsConfig.ctaButtonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
