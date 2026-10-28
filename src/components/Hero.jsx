import React, { useState } from 'react';

export default function Hero() {
  const [toastMessage, setToastMessage] = useState('');

  const handleResumeClick = () => {
    showToast('Downloading Sonali Nayak Resume...');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      {/* Thin Vertical Architectural Grid Lines across the viewport */}
      <div className="hero__grid-overlay" aria-hidden="true">
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
      </div>

      {/* Upper Hero Stage: Role Eyebrow, Asymmetric Textured Sage Circle, and Oversized Serif Headline */}
      <div className="hero__top-stage">
        <div className="hero__role-badge">
          <span className="hero__role-text">UX/UI &amp; DIGITAL PRODUCT DESIGNER</span>
        </div>

        <div className="hero__title-wrapper">
          {/* Large Textured Sage-Green Circle positioned asymmetrically */}
          <div className="hero__sage-circle" aria-hidden="true">
            <div className="hero__sage-circle-texture"></div>
          </div>

          {/* Oversized, Elegant Black Serif Headline */}
          <h1 className="hero__headline-oversized">
            Sonali Nayak
          </h1>
        </div>
      </div>

      {/* Lower Portion: Large Off-White Semicircular Shape (Arch) */}
      <div className="hero__arch">
        {/* Centered Large Serif Statement with Italic Emphasis and Subtle Green Underline Details */}
        <blockquote className="hero__statement">
          At the <span className="hero__statement-italic">heart of design</span> is an{' '}
          <span className="hero__statement-underline-wrapper">
            <span className="hero__statement-italic">opportunity to solve problems</span>
            <svg 
              className="hero__statement-underline-svg" 
              viewBox="0 0 320 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="none" 
              aria-hidden="true"
            >
              <path d="M2 9C70 3 180 3 318 8" stroke="var(--color-green-underline)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>.
        </blockquote>

        {/* Sonali's Personal Details & Bio */}
        <p className="hero__arch-subtitle">
          UX/UI Designer &amp; Digital Product Designer
        </p>

        <p className="hero__arch-bio">
          I design websites, dashboards, and digital products that solve
          real problems through research, thoughtful design, and AI
          tools where they make sense.
        </p>

        {/* Retain Existing Action Buttons */}
        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            <span>VIEW MY WORK</span>
            <span className="btn__arrow" aria-hidden="true">↗</span>
          </a>
          <a 
            href="/assets/Resume.pdf" 
            download="Sonali_Nayak_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn--outline" 
            id="resume-download-btn"
            onClick={handleResumeClick}
          >
            <span>DOWNLOAD MY RESUME</span>
            <span className="btn__arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Centered Scroll Indicator */}
        <div className="hero__scroll">
          <a href="#services" className="hero__scroll-link" id="scroll-explore" aria-label="Scroll down to explore work">
            <span className="scroll__text">SCROLL TO EXPLORE</span>
            <span className="scroll__arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {toastMessage && (
        <div className="portfolio-toast" role="status">
          {toastMessage}
        </div>
      )}
    </section>
  );
}

