import React from 'react';
import { ShieldCheck, Clock, Armchair, HeartHandshake, Map, Sparkles } from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Seguridad y Conducción Responsable",
      description: "Nuestras unidades reciben mantenimiento técnico preventivo y son conducidas por choferes con amplia experiencia en rutas turísticas e interurbanas."
    },
    {
      icon: Clock,
      title: "Puntualidad en Cada Salida",
      description: "Sabemos el valor de su tiempo, especialmente en traslados al aeropuerto o excursiones con horarios de museos y vuelos."
    },
    {
      icon: Armchair,
      title: "Confort y Espacio Interior",
      description: "Asientos reclinables ergonómicos, climatización y espacios limpios para que cada kilómetro sea una experiencia agradable y relajante."
    },
    {
      icon: HeartHandshake,
      title: "Atención Cálida y Personalizada",
      description: "Flexibilidad para coordinar puntos de partida, paradas gastronómicas, tiempos de espera y requerimientos de grupos particulares."
    },
    {
      icon: Map,
      title: "Conocimiento de la Región Norteña",
      description: "Orientación en rutas hacia Tumbas Reales, balneario de Pimentel, represas y sitios arqueológicos de Lambayeque y regiones vecinas."
    },
    {
      icon: Sparkles,
      title: "Compromiso de Servicio Formal",
      description: "Trato transparente, unidades identificadas con rotulación de la empresa y seriedad en cada reserva o cotización solicitada."
    }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nuestras Ventajas</span>
          <h2 className="section-title">¿Por Qué Elegir Turismo Sipán Express?</h2>
          <p className="section-subtitle">
            Nos enfocamos en brindar un servicio de transporte confiable, confortable y orientado a superar las expectativas de cada viajero.
          </p>
        </div>

        <div className="grid-3">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  <Icon size={28} />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
