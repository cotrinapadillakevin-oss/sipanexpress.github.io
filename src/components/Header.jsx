import React, { useState, useEffect } from 'react';
import { Phone, Bus, X, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const Header = ({ activeView = 'inicio', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'servicios', label: 'Nuestros servicios' },
    { id: 'destinos', label: 'Destinos' },
    { id: 'flota', label: 'Nuestra flota' },
    { id: 'galeria', label: 'Galería' },
    { id: 'faq', label: 'Preguntas frecuentes' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleItemClick = (e, viewId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(viewId);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className={`movil-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container movil-nav-container">
          {/* Brand Logo - Returns to 'inicio' view */}
          <a
            href="#inicio"
            className="movil-logo"
            onClick={(e) => handleItemClick(e, 'inicio')}
            aria-label="Turismo Sipán Express - Volver al Inicio"
          >
            <div className="movil-logo-icon">
              <Bus size={24} />
            </div>
            <div className="movil-logo-text">
              <span className="movil-logo-main">sipán</span>
              <span className="movil-logo-sub">express</span>
            </div>
          </a>

          {/* Navigation Menu (Desktop & Mobile Drawer) */}
          <nav
            className={`movil-nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}
            aria-label="Navegación principal"
          >
            <ul className="movil-links-list">
              {navLinks.map((link) => {
                const isActive = activeView === link.id;
                return (
                  <li key={link.id} className="movil-link-li">
                    <a
                      href={`#${link.id}`}
                      className={`movil-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleItemClick(e, link.id)}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="nav-active-bar" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Drawer Call-to-action */}
            <div className="movil-drawer-footer">
              <a
                href="https://wa.me/51968229678?text=Hola%20Turismo%20Sip%C3%A1n%20Express%2C%20deseo%20consultar%20disponibilidad%20de%20transporte%20tur%C3%ADstico."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>WhatsApp: +51 968 229 678</span>
              </a>
            </div>
          </nav>

          {/* Right Actions: Phone Call Pill (Lucho Mena) & Hamburger Toggle */}
          <div className="movil-header-actions">
            <a
              href="tel:+51968229678"
              className="movil-phone-pill"
              title="Llamada directa (+51 968 229 678)"
            >
              <div className="phone-icon-circle">
                <Phone size={14} />
              </div>
              <span className="phone-number">968 229 678</span>
            </a>

            <button
              type="button"
              className="movil-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={26} color="var(--color-movil-orange)" />
              ) : (
                <div className="hamburger-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="movil-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
