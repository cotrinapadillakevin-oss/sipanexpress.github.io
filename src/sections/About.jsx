import React from 'react';
import { Target, Compass, Award, Shield, Users, HeartHandshake, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const About = () => {
  const { about } = companyInfo;

  return (
    <section id="nosotros" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sobre Nosotros</span>
          <h2 className="section-title">Comprometidos con la Excelencia en el Transporte Turístico</h2>
          <p className="section-subtitle">
            Conectamos a viajeros y empresas con los tesoros culturales, playas y paisajes del norte peruano con el máximo confort y seriedad.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3.5rem', alignItems: 'center', marginBottom: '4rem' }}>
          {/* Real Photo Montage */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}>
              <img
                src="/images/fleet/van-toyota-hiace-sipan.jpg"
                alt="Van Turística Sipán Express en Museo Tumbas Reales de Sipán"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
            {/* Overlapping Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '1.5rem',
                background: 'var(--color-primary-900)',
                color: '#ffffff',
                padding: '1.25rem 1.75rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-xl)',
                border: '1.5px solid var(--color-gold-500)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Award size={36} color="var(--color-gold-400)" />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
                  Flota Propia Real
                </strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-light)' }}>
                  Unidades modernas y acondicionadas
                </span>
              </div>
            </div>
          </div>

          {/* Presentation Text */}
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>
              Turismo Sipán Express: Tradición, Puntualidad y Experiencia
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {about.history}
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Cada trayecto que realizamos está diseñado para que el pasajero viaje sin preocupaciones. Desde la recepción de bienvenida en el aeropuerto hasta las excursiones a Tumbas Reales de Sipán, Pimentel o viajes especiales por todo el territorio nacional, nuestro compromiso es la total satisfacción de quienes confían en nosotros.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle size={18} color="var(--color-gold-600)" />
                <span>Atención personalizada</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle size={18} color="var(--color-gold-600)" />
                <span>Conductores con experiencia</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle size={18} color="var(--color-gold-600)" />
                <span>Monitoreo y seguridad</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle size={18} color="var(--color-gold-600)" />
                <span>Comodidad climatizada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Values with Clear Provisional Tag */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <span className="badge-provisional">
            Marco Corporativo Propuesto [Información provisional claramente identificada]
          </span>
        </div>

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {/* Misión */}
          <div className="why-card" style={{ background: '#ffffff', border: '1px solid var(--color-border)', color: 'var(--color-text-main)' }}>
            <div className="why-icon-box" style={{ background: 'var(--color-gold-100)', color: 'var(--color-gold-700)' }}>
              <Target size={28} />
            </div>
            <h4 style={{ color: 'var(--color-primary-900)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
              Nuestra Misión
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {about.mission}
            </p>
          </div>

          {/* Visión */}
          <div className="why-card" style={{ background: '#ffffff', border: '1px solid var(--color-border)', color: 'var(--color-text-main)' }}>
            <div className="why-icon-box" style={{ background: 'var(--color-gold-100)', color: 'var(--color-gold-700)' }}>
              <Compass size={28} />
            </div>
            <h4 style={{ color: 'var(--color-primary-900)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
              Nuestra Visión
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {about.vision}
            </p>
          </div>

          {/* Pilares */}
          <div className="why-card" style={{ background: '#ffffff', border: '1px solid var(--color-border)', color: 'var(--color-text-main)' }}>
            <div className="why-icon-box" style={{ background: 'var(--color-gold-100)', color: 'var(--color-gold-700)' }}>
              <HeartHandshake size={28} />
            </div>
            <h4 style={{ color: 'var(--color-primary-900)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
              Nuestros Valores
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {about.values.map((val, idx) => (
                <li key={idx} style={{ marginBottom: '0.65rem', fontSize: '0.88rem' }}>
                  <strong style={{ color: 'var(--color-primary-900)' }}>{val.title}:</strong>{' '}
                  <span style={{ color: 'var(--color-text-muted)' }}>{val.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
