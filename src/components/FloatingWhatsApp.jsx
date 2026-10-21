import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(companyInfo.contact.whatsappDefaultMessage)}`;

  return (
    <div
      className="floating-whatsapp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="floating-whatsapp-tooltip"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
          transition: 'all var(--transition-normal)'
        }}
      >
        💬 ¿Consultas o reservas? ¡Escríbele a Lucho Mena!
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Contactar a Turismo Sipán Express por WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
