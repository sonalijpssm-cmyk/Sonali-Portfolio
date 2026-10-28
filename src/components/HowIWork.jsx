import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Clarify the problem, requirements, users, and constraints.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Explore',
    description: 'Review relevant references, identify patterns, and explore possible solutions.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="18" r="2.5"/>
        <circle cx="18" cy="6" r="2.5"/>
        <path d="M8.5 18h3a4 4 0 0 0 4-4v-4a4 4 0 0 1 4-4"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Structure',
    description: 'Organize information, map user journeys, and create wireframes.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Design',
    description: 'Develop the interface, interactions, and reusable components.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z"/>
        <circle cx="19" cy="5" r="1.2" fill="currentColor"/>
      </svg>
    )
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Review the design, gather feedback, test usability, and iterate to improve the experience.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"/>
        <circle cx="20" cy="4" r="1" fill="currentColor"/>
      </svg>
    )
  }
];

export default function HowIWork() {
  return (
    <section className="how-i-work" id="process" aria-label="How I work">
      <div className="container how-i-work__container">
        
        {/* Section Header */}
        <div className="how-i-work__header">
          <span className="how-i-work__eyebrow">FROM QUESTIONS TO CLARITY</span>
          <h2 className="how-i-work__title">How I work.</h2>
        </div>

        {/* 5-Column Process Steps Grid */}
        <div className="how-i-work__grid">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <div className="process-step__top">
                <span className="process-step__number">{step.number}</span>
                <div className="process-step__icon" aria-hidden="true">
                  {step.icon}
                </div>
              </div>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__description">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
