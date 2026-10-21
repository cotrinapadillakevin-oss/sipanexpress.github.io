import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bus, 
  MapPin, 
  Camera, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import HeroQuoteBar from '../components/HeroQuoteBar';

export const Hero = ({ onNavigate }) => {
  const slides = [
    {
      image: '/images/fleet/bus-salabus-perfil.jpg',
      position: 'center 62%',
      alt: 'Bus Turístico Salabus de Turismo Sipán Express',
      title: 'Viajes grupales y de promoción por todo el Perú'
    },
    {
      image: '/images/hero/hero-banner.jpg',
      position: 'center 60%',
      alt: 'Minibús Mitsubishi Fuso Rosa en Museo Tumbas Reales de Sipán',
      title: 'Excursiones culturales y circuitos por la Ruta Moche'
    },
    {
      image: '/images/fleet/van-toyota-hiace-sipan.jpg',
      position: 'center 68%',
      alt: 'Van Turística Toyota HiAce en Museo Tumbas Reales',
      title: 'Traslados al aeropuerto de Chiclayo y paseos privados'
    },
    {
      image: '/images/fleet/minibus-fuso-pimentel.jpg',
      position: 'center 75%',
      alt: 'Minibús Turístico en Balneario de Pimentel',
      title: 'Paseos y excursiones a las playas del norte'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const quickFeatures = [
    {
      id: 'servicios',
      icon: Bus,
      title: 'Nuestros Servicios',
      subtitle: 'Traslados Aeropuerto, Tours y Grupos',
      tag: 'Ver Servicios'
    },
    {
      id: 'destinos',
      icon: MapPin,
      title: 'Rutas y Destinos',
      subtitle: 'Tumbas Reales, Pimentel y Ruta Moche',
      tag: 'Ver Destinos'
    },
    {
      id: 'flota',
      icon: Sparkles,
      title: 'Nuestra Flota',
      subtitle: 'Vans, Minibuses y Buses Climatizados',
      tag: 'Ver Flota'
    },
    {
      id: 'contacto',
      icon: PhoneCall,
      title: 'Atención 24 Horas',
      subtitle: 'Don Lucho Mena: +51 968 229 678',
      tag: 'Contactar'
    }
  ];

  return (
    <div className="spa-home-view">
      <section id="inicio" className="movil-hero-section">
        {/* Background Image Carousel with precise focal centering */}
        <div className="movil-hero-slider">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`movil-hero-slide ${idx === currentSlide ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                style={{ objectPosition: slide.position }}
              />
            </div>
          ))}
          <div className="movil-hero-gradient"></div>
        </div>

        {/* Main Banner Content */}
        <div className="movil-hero-inner container">
          {/* Left Side: Bold Promo Badge & Payment Badges (Movilbus Format) */}
          <div className="movil-promo-box">
            <div className="movil-badge-tag">
              <span className="movil-badge-percent">20%</span>
              <div className="movil-badge-texts">
                <span className="movil-badge-title">Dscto</span>
                <span className="movil-badge-sub">con cupón web</span>
              </div>
            </div>

            <div className="movil-payment-strip">
              <span className="payment-callout">Usando tus tarjetas y medios de pago</span>
              <div className="payment-badges-pill">
                <span className="bank-badge bank-bbva">BBVA</span>
                <span className="bank-badge bank-interbank">Interbank</span>
                <span className="bank-badge bank-bcp">BCP</span>
                <span className="bank-badge bank-bn">Banco de la Nación</span>
                <span className="bank-badge bank-yape">Yape</span>
                <span className="bank-badge bank-plin">Plin</span>
              </div>
            </div>
          </div>

          {/* Right Side: Slider Navigation Controls */}
          <div className="movil-slider-controls">
            <button
              type="button"
              className="slider-nav-btn"
              onClick={nextSlide}
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={22} />
            </button>
            <button
              type="button"
              className="slider-nav-btn"
              onClick={prevSlide}
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={22} />
            </button>
          </div>

          {/* Slider Pagination Dots */}
          <div className="movil-slider-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Vertical Side Watermark */}
          <div className="movil-side-watermark">
            <span>Turismo Sipán Express • Chiclayo - Lambayeque, Perú</span>
          </div>
        </div>

        {/* Floating Capsule Booking Engine (Exact Movilbus Layout) */}
        <div className="movil-capsule-wrapper container">
          <HeroQuoteBar />
        </div>
      </section>

      {/* Quick Navigation Cards directly underneath the Hero */}
      <div className="hero-quick-cards-container container">
        <div className="hero-quick-cards-grid">
          {quickFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="hero-quick-card"
                onClick={() => onNavigate && onNavigate(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onNavigate && onNavigate(item.id)}
              >
                <div className="quick-card-icon-wrap">
                  <Icon size={22} />
                </div>
                <div className="quick-card-content">
                  <h4 className="quick-card-title">{item.title}</h4>
                  <p className="quick-card-desc">{item.subtitle}</p>
                </div>
                <div className="quick-card-action">
                  <span>{item.tag}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
