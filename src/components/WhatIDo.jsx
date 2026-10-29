import React from 'react';
import polaroidImg from '../assets/what-i-do-polaroid.png';

const services = [
  {
    number: '01',
    title: 'UX/UI Design',
    description: 'User flows, wireframes, interface design, and prototypes.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Web & Dashboard Design',
    description: 'Responsive websites, data-heavy interfaces, and operational workflows.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Healthcare Product Design',
    description: 'Patient journeys, healthcare service flows, and hospital systems.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h6.28"/>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Design Systems',
    description: 'Reusable components, visual consistency, and scalable UI patterns.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    )
  }
];

export default function WhatIDo() {
  return (
    <section className="services" id="services" aria-label="What I do">
      <div className="container services__container">
        
        {/* Section Header */}
        <div className="services__header">
          <span className="services__eyebrow">DESIGN WITH INTENTION</span>
          <h2 className="services__title">What I do.</h2>
        </div>

        {/* 2-Column Grid */}
        <div className="services__grid">
          
          {/* Left Column: Polaroid Artwork */}
          <div className="services__polaroid-wrapper">
            <div className="services__polaroid-card">
              <img 
                src={polaroidImg} 
                alt="Workspace desk setup with laptop, plant, notebook, and coffee with caption: Curiosity, always." 
                className="services__polaroid-image"
                width="1024"
                height="910"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column: Capabilities List */}
          <div className="services__list">
            {services.map((service) => (
              <div className="service-item" key={service.number}>
                <div className="service-item__icon" aria-hidden="true">
                  {service.icon}
                </div>
                <div className="service-item__content">
                  <h3 className="service-item__title">
                    <span className="service-item__number">{service.number}</span>
                    <span className="service-item__dash">—</span>
                    <span className="service-item__name">{service.title}</span>
                  </h3>
                  <p className="service-item__description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
