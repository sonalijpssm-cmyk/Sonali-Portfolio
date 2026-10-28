import React from 'react';
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

        {/* Project Cards Grid / Stack */}
        <div className="work__list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
