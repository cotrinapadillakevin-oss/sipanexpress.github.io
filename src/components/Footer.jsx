import React from 'react';
import { Bus, MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, viewId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(viewId);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <a
              href="#inicio"
              className="brand-logo"
              onClick={(e) => handleLinkClick(e, 'inicio')}
              style={{ marginBottom: '1.25rem' }}
            >
              <div className="brand-icon">
                <Bus size={24} />
              </div>
              <div className="brand-text">
                <span className="brand-name">
                  Sipán <span>Express</span>
                </span>
                <span className="brand-sub">Turismo & Transporte</span>
              </div>
            </a>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {companyInfo.shortDescription}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--color-movil-orange)', background: 'rgba(255, 85, 0, 0.1)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <ShieldCheck size={16} />
              <span>Flota moderna y conductores profesionales</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (SPA) */}
          <div>
            <h4 className="footer-heading">Secciones</h4>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#inicio" className="footer-link" onClick={(e) => handleLinkClick(e, 'inicio')}>Inicio</a>
              </li>
              <li className="footer-link-item">
                <a href="#servicios" className="footer-link" onClick={(e) => handleLinkClick(e, 'servicios')}>Nuestros Servicios</a>
              </li>
              <li className="footer-link-item">
                <a href="#destinos" className="footer-link" onClick={(e) => handleLinkClick(e, 'destinos')}>Destinos del Norte</a>
              </li>
              <li className="footer-link-item">
                <a href="#flota" className="footer-link" onClick={(e) => handleLinkClick(e, 'flota')}>Nuestra Flota</a>
              </li>
              <li className="footer-link-item">
                <a href="#galeria" className="footer-link" onClick={(e) => handleLinkClick(e, 'galeria')}>Galería de Fotos</a>
              </li>
              <li className="footer-link-item">
                <a href="#faq" className="footer-link" onClick={(e) => handleLinkClick(e, 'faq')}>Preguntas Frecuentes</a>
              </li>
              <li className="footer-link-item">
                <a href="#contacto" className="footer-link" onClick={(e) => handleLinkClick(e, 'contacto')}>Contacto y Reservas</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services shortcuts */}
          <div>
            <h4 className="footer-heading">Servicios</h4>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#servicios" className="footer-link" onClick={(e) => handleLinkClick(e, 'servicios')}>Transporte Turístico</a>
              </li>
              <li className="footer-link-item">
                <a href="#servicios" className="footer-link" onClick={(e) => handleLinkClick(e, 'servicios')}>Traslados Aeropuerto (ADP)</a>
              </li>
              <li className="footer-link-item">
                <a href="#servicios" className="footer-link" onClick={(e) => handleLinkClick(e, 'servicios')}>Viajes para Grupos</a>
              </li>
              <li className="footer-link-item">
                <a href="#servicios" className="footer-link" onClick={(e) => handleLinkClick(e, 'servicios')}>Traslados Privados</a>
              </li>
              <li className="footer-link-item">
                <a href="#servicios" className="footer-link" onClick={(e) => handleLinkClick(e, 'servicios')}>Circuitos & Excursiones</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="footer-heading">Contacto Oficial</h4>
            <ul className="footer-links">
              <li className="footer-link-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={18} color="var(--color-movil-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{companyInfo.contact.address}</span>
              </li>
              <li className="footer-link-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={18} color="var(--color-whatsapp)" style={{ flexShrink: 0 }} />
                <a
                  href={`https://wa.me/51968229678?text=${encodeURIComponent("Hola Turismo Sipan Express, deseo consultar disponibilidad de transporte turístico.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-whatsapp)', fontWeight: 700 }}
                >
                  WhatsApp: +51 968 229 678
                </a>
              </li>
              <li className="footer-link-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} color="var(--color-movil-orange)" style={{ flexShrink: 0 }} />
                <a href="tel:+51914131725" style={{ color: 'var(--color-text-light)' }}>
                  Sipán Express: +51 914 131 725
                </a>
              </li>
              <li className="footer-link-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={18} color="var(--color-movil-orange)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem' }}>{companyInfo.contact.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} {companyInfo.name}. Todos los derechos reservados.</p>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.8rem' }}>
            Turismo Sipán Express • Lambayeque - Chiclayo, Perú.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
