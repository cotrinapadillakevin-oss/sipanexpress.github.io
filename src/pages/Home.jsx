import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Fleet from '../sections/Fleet';
import Destinations from '../sections/Destinations';
import Gallery from '../sections/Gallery';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

export const Home = () => {
  // Read initial view from URL hash if available
  const getInitialView = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validViews = ['servicios', 'destinos', 'flota', 'galeria', 'faq', 'contacto'];
    return validViews.includes(hash) ? hash : 'inicio';
  };

  const [activeView, setActiveView] = useState(getInitialView);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Sync hash changes (e.g. browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validViews = ['servicios', 'destinos', 'flota', 'galeria', 'faq', 'contacto'];
      setActiveView(validViews.includes(hash) ? hash : 'inicio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (viewId) => {
    setActiveView(viewId);
    if (viewId === 'inicio') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = viewId;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForQuote = (service) => {
    setSelectedService(service);
    handleNavigate('contacto');
  };

  const handleSelectVehicleForQuote = (vehicle) => {
    setSelectedVehicle(vehicle);
    handleNavigate('contacto');
  };

  const handleSelectDestinationForQuote = (dest) => {
    setSelectedDestination(dest);
    handleNavigate('contacto');
  };

  return (
    <div className="site-wrapper spa-application">
      {/* Persistent Sticky Top Header */}
      <Header activeView={activeView} onNavigate={handleNavigate} />

      {/* Dynamic Single-Screen View Area */}
      <main id="main-content" className="spa-main-stage">
        {activeView === 'inicio' && (
          <div className="spa-view-content animate-fade-in">
            <Hero onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'servicios' && (
          <div className="spa-view-content animate-fade-in">
            <Services
              onSelectService={handleSelectServiceForQuote}
              onNavigateToFleet={() => handleNavigate('flota')}
            />
          </div>
        )}

        {activeView === 'destinos' && (
          <div className="spa-view-content animate-fade-in">
            <Destinations onSelectDestination={handleSelectDestinationForQuote} />
          </div>
        )}

        {activeView === 'flota' && (
          <div className="spa-view-content animate-fade-in">
            <Fleet onSelectVehicle={handleSelectVehicleForQuote} />
          </div>
        )}

        {activeView === 'galeria' && (
          <div className="spa-view-content animate-fade-in">
            <Gallery />
          </div>
        )}

        {activeView === 'faq' && (
          <div className="spa-view-content animate-fade-in">
            <FAQ />
          </div>
        )}

        {activeView === 'contacto' && (
          <div className="spa-view-content animate-fade-in">
            <Contact
              preselectedService={selectedService}
              preselectedVehicle={selectedVehicle}
              preselectedDestination={selectedDestination}
            />
          </div>
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Direct WhatsApp Float */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
