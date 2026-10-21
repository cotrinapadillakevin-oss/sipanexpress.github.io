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

  return (
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

        {/* Desktop Navigation Links */}
        <nav className="movil-nav-menu" aria-label="Navegación principal">
          <ul className={`movil-links-list ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <li key={link.id}>
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
        </nav>

        {/* Right Actions: Phone Call Pill (Lucho Mena) & Hamburger Toggle */}
        <div className="movil-header-actions">
          <a
            href="tel:+51968229678"
            className="movil-phone-pill"
            title="Llamada directa con Don Lucho Mena (+51 968 229 678)"
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
  );
};

export default Header;
