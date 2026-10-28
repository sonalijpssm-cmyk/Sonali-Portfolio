import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import arovitaImg from '../assets/project-arovita-app.png';
import hospitalImg from '../assets/project-hospital-system.png';
import healthcareWebImg from '../assets/project-healthcare-website.png';

const projects = [
  {
    id: 'arovita-app',
    category: 'Mobile App · Healthcare · UX/UI',
    title: 'Arovita Healthcare App',
    description: 'Simplifying access to doctor consultations, appointments, lab tests, and health records.',
    image: arovitaImg,
    alt: 'Arovita Healthcare App mobile interface preview displaying doctor consultation and lab tests',
    link: '#arovita-app'
  },
  {
    id: 'hospital-management',
    category: 'Dashboard · Workflow Design',
    title: 'Hospital Management System',
    description: 'Designing intuitive workflows and dashboards for hospital operations.',
    image: hospitalImg,
    alt: 'Hospital Management System dashboard interface with patient statistics and analytics charts',
    link: '#hospital-management'
  },
  {
    id: 'healthcare-website',
    category: 'Web Design · Healthcare',
    title: 'Healthcare Website',
    description: 'Making healthcare services and important information easier to discover.',
    image: healthcareWebImg,
    alt: 'Healthcare Website desktop preview featuring appointment and test booking services',
    link: '#healthcare-website'
  }
];

export default function Work() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleScroll = () => {
      const wrappers = cardRefs.current;
      if (!wrappers || wrappers.length < 2) return;

      wrappers.forEach((wrapper, i) => {
        if (!wrapper) return;
        const card = wrapper.querySelector('.work-card');
        if (!card) return;

        // Sticky target position (computed from CSS top offset)
        const computedTop = parseFloat(getComputedStyle(wrapper).top) || 90;

        // Calculate overlap progress from subsequent cards (i + 1, i + 2, etc.)
        let totalOverlapProgress = 0;
        for (let j = i + 1; j < wrappers.length; j++) {
          if (wrappers[j]) {
            const nextRect = wrappers[j].getBoundingClientRect();
            const currentRect = wrapper.getBoundingClientRect();
            const cardHeight = currentRect.height || 420;
            const startCovering = computedTop + cardHeight;
            const fullyCovered = computedTop;

            if (startCovering > fullyCovered) {
              const p = Math.min(
                Math.max((startCovering - nextRect.top) / (startCovering - fullyCovered), 0),
                1
              );
              totalOverlapProgress += p;
            }
          }
        }

        // Apply subtle, high-end scaling and depth brightness
        const scale = Math.max(1 - totalOverlapProgress * 0.04, 0.92);
        const brightness = Math.max(1 - totalOverlapProgress * 0.05, 0.88);

        card.style.transform = `scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
        card.style.transformOrigin = 'center top';
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    const onMotionChange = (e) => {
      if (e.matches) {
        cardRefs.current.forEach((wrapper) => {
          const card = wrapper?.querySelector('.work-card');
          if (card) {
            card.style.transform = '';
            card.style.filter = '';
          }
        });
      } else {
        handleScroll();
      }
    };

    mediaQuery.addEventListener('change', onMotionChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      mediaQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <section className="work" id="work" aria-label="Selected Works">
      <div className="container work__container">
        
        {/* Section Header */}
        <div className="work__header">
          <span className="work__eyebrow">THOUGHTFUL DIGITAL EXPERIENCES</span>
          <h2 className="work__title">
            <span>Selected Works</span>
            <svg 
              className="work__star" 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              aria-hidden="true" 
              focusable="false"
            >
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2Z" fill="currentColor"/>
            </svg>
          </h2>
        </div>

        {/* Project Cards Stacking Deck */}
        <div className="work__list">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="work-card-wrapper"
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ zIndex: index + 1 }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
