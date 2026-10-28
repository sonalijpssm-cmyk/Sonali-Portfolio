import React, { useState, useRef } from 'react';
import heroVisualUrl from '../assets/hero-visual.png';

export default function Hero() {
  const [toastMessage, setToastMessage] = useState('');
  const visualRef = useRef(null);

  const handleResumeClick = () => {
    showToast('Downloading Sonali Nayak Resume...');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const handleMouseMove = (e) => {
    if (!visualRef.current || window.innerWidth <= 992) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = (y / (rect.height / 2)) * -4;
    const tiltY = (x / (rect.width / 2)) * 4;
    visualRef.current.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    if (!visualRef.current) return;
    visualRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container hero__container">
        
        {/* Left Column: Typography & CTAs */}
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__greeting">Hello, I'm</span>
            <span className="hero__name">Sonali Nayak</span>
          </h1>

          <p className="hero__subtitle">UX/UI Designer &amp; Digital Product Designer</p>

          <p className="hero__bio">
            I design websites, dashboards, and digital products that solve
            real problems through research, thoughtful design, and AI
            tools where they make sense.
          </p>

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
        </div>

        {/* Right Column: Visual Artwork Composition */}
        <div className="hero__visual">
          <div 
            className="hero__visual-inner"
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={heroVisualUrl} 
              alt="Sonali Nayak, UX/UI and Product Designer framed with playful illustration and quote: Turning ideas into meaningful experiences." 
              className="hero__visual-image"
              width="406"
              height="392"
              loading="eager"
              decoding="async"
            />
          </div>
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
