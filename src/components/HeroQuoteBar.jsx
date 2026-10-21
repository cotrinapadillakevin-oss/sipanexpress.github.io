import React, { useState } from 'react';
import { Calendar, Search, ChevronDown } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { destinations } from '../data/destinations';

export const HeroQuoteBar = () => {
  const [origin, setOrigin] = useState('Chiclayo');
  const [destination, setDestination] = useState('Museo Tumbas Reales');
  
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [departureDate, setDepartureDate] = useState(getTomorrowDate);
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('5 a 15 pasajeros (Van HiAce)');

  const handleSearch = (e) => {
    e.preventDefault();

    const text = `*SOLICITUD DE COTIZACIÓN - TURISMO SIPÁN EXPRESS*
━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Origen:* ${origin}
🎯 *Destino:* ${destination || 'Por coordinar'}
📅 *Fecha Salida:* ${departureDate}
${returnDate ? `🔄 *Fecha Retorno:* ${returnDate}\n` : ''}👥 *N° Pasajeros / Unidad:* ${passengers}
━━━━━━━━━━━━━━━━━━━━━━━━━━
¡Hola Don Lucho Mena! Deseo consultar cotización y disponibilidad para este servicio.`;

    const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="movil-capsule-bar">
      <form onSubmit={handleSearch} className="movil-capsule-form">
        {/* Title block */}
        <div className="capsule-title-block">
          <span className="capsule-main-title">Cotiza tu viaje:</span>
        </div>

        <div className="capsule-divider"></div>

        {/* Origen */}
        <div className="capsule-field">
          <label className="capsule-label">Origen:</label>
          <div className="capsule-select-wrapper">
            <select
              className="capsule-select"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option value="Chiclayo">CHICLAYO</option>
              <option value="Lambayeque">LAMBAYEQUE</option>
              <option value="Aeropuerto Chiclayo (ADP)">AEROPUERTO CHICLAYO</option>
              <option value="Balneario de Pimentel">PIMENTEL</option>
              <option value="Puerto Eten">PUERTO ETEN</option>
              <option value="Punto coordinado">OTRO ORIGEN...</option>
            </select>
            <ChevronDown size={14} className="capsule-chevron" />
          </div>
        </div>

        <div className="capsule-divider"></div>

        {/* Destino */}
        <div className="capsule-field">
          <label className="capsule-label">Destino:</label>
          <div className="capsule-select-wrapper">
            <select
              className="capsule-select"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="Museo Tumbas Reales">MUSEO TUMBAS REALES</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name.toUpperCase()}
                </option>
              ))}
              <option value="Circuito Arqueológico Completo">CIRCUITO ARQUEOLÓGICO</option>
              <option value="Aeropuerto Chiclayo (ADP)">AEROPUERTO CHICLAYO</option>
              <option value="Ruta Fuera de Región">OTRA RUTA / VIAJE NACIONAL</option>
            </select>
            <ChevronDown size={14} className="capsule-chevron" />
          </div>
        </div>

        <div className="capsule-divider"></div>

        {/* Fecha Salida */}
        <div className="capsule-field">
          <label className="capsule-label">Fecha salida:</label>
          <div className="capsule-input-wrapper">
            <input
              type="date"
              className="capsule-date-input"
              value={departureDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
            <Calendar size={14} className="capsule-date-icon" />
          </div>
        </div>

        <div className="capsule-divider"></div>

        {/* Fecha Retorno */}
        <div className="capsule-field">
          <label className="capsule-label">Fecha retorno:</label>
          <div className="capsule-input-wrapper">
            <input
              type="date"
              className="capsule-date-input"
              value={returnDate}
              min={departureDate || new Date().toISOString().split('T')[0]}
              onChange={(e) => setReturnDate(e.target.value)}
              placeholder="dd/mm/aaaa"
            />
            <Calendar size={14} className="capsule-date-icon" />
          </div>
        </div>

        <div className="capsule-divider"></div>

        {/* N° Pasajeros / Unidad */}
        <div className="capsule-field">
          <label className="capsule-label">N° pasajeros:</label>
          <div className="capsule-select-wrapper">
            <select
              className="capsule-select"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            >
              <option value="1 a 4 pasajeros (Servicio Privado)">1 a 4 pasajeros (Privado)</option>
              <option value="5 a 15 pasajeros (Van HiAce)">5 a 15 pasajeros (Van HiAce)</option>
              <option value="16 a 29 pasajeros (Minibús Fuso Rosa)">16 a 29 pasajeros (Minibús)</option>
              <option value="30 a 45+ pasajeros (Bus Salabus)">30 a 45+ pasajeros (Bus)</option>
            </select>
            <ChevronDown size={14} className="capsule-chevron" />
          </div>
        </div>

        {/* Action Button: Vibrant Orange / Gold Pill */}
        <div className="capsule-action-wrapper">
          <button type="submit" className="capsule-submit-btn">
            BUSCAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroQuoteBar;
