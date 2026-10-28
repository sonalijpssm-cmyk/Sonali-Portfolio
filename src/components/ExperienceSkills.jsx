import React from 'react';

const skills = [
  'UX Research',
  'User Flows',
  'Wireframing',
  'UI Design',
  'Prototyping',
  'Figma',
  'AI-assisted Exploration'
];

export default function ExperienceSkills() {
  return (
    <section className="experience" id="experience" aria-label="Experience and Skills">
      <div className="container experience__container">
        
        {/* Top Header Row with Star Icon */}
        <div className="experience__header">
          <h2 className="experience__title">Experience &amp; skills.</h2>
          <svg 
            className="experience__star" 
            viewBox="0 0 24 24" 
            width="28" 
            height="28" 
            aria-hidden="true" 
            focusable="false"
          >
            <path d="M12 0L14.4 8.6L23 5L17.4 12L24 12.8L17 14.8L21 21.6L13.2 16.8L12 24L9.6 15.4L1 19L6.6 12L0 11.2L7 9.2L3 2.4L10.8 7.2Z" fill="currentColor"/>
          </svg>
        </div>

        {/* 2-Column Content Grid */}
        <div className="experience__grid">
          
          {/* Left Column: Current Role */}
          <div className="experience__role-block">
            <span className="experience__period">[December 2025-Present]</span>
            <h3 className="experience__role-title">UX/UI Designer — Arovita Healthcare</h3>
            <p className="experience__role-desc">
              Healthcare mobile application and hospital management workflows.
            </p>
          </div>

          {/* Right Column: Everyday Toolkit */}
          <div className="experience__skills-block">
            <span className="experience__skills-eyebrow">MY EVERYDAY TOOLKIT</span>
            <ul className="experience__pill-list" aria-label="Skills and tools list">
              {skills.map((skill) => (
                <li key={skill} className="experience__pill-item">
                  <span className="experience__pill">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
