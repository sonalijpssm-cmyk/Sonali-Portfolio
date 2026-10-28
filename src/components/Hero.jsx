import React, { useState } from 'react';
import sageCircleTextureUrl from '../assets/sage-circle-texture.jpg';

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
      {/* Repeating Thin Vertical White Pinstripes across the viewport */}
      <div className="hero__pinstripes" aria-hidden="true"></div>

      {/* Center Stage: Textured Mossy Sage Circle & Asymmetric Two-Line Black Serif Name */}
      <div className="container hero__stage">
        <div className="hero__composition">
          {/* Mottled Mossy Sage Textured Circle */}
          <div 
            className="hero__circle" 
            aria-hidden="true"
            style={{ backgroundImage: `radial-gradient(circle at 40% 40%, rgba(130, 150, 120, 0.3) 0%, rgba(85, 105, 75, 0.55) 100%), url(${sageCircleTextureUrl})` }}
          >
            <div className="hero__circle-sheen"></div>
          </div>

          {/* Oversized High-Contrast Black Serif Headline */}
          <h1 className="hero__headline">
            <span className="hero__name-line hero__name-line--first">Sonali</span>
            <span className="hero__name-line hero__name-line--last">Nayak</span>
          </h1>
        </div>
      </div>

      {/* Lower Off-White Semicircular Shape (Flat top cutting behind circle, curved bottom bowl) */}
      <div className="hero__arch-wrapper">
        <div className="hero__arch">
          {/* Centered Large Serif Statement with Zigzag Underline on Design and Straight Underline on solve. */}
          <blockquote className="hero__statement">
            <span className="hero__statement-line">
              At the heart of{' '}
              <span className="hero__highlight hero__highlight--design">
                <em>Design</em>
                <svg className="hero__zigzag-svg" viewBox="0 0 94 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 7L10 2L18 7L26 2L34 7L42 2L50 7L58 2L66 7L74 2L82 7L91 3" stroke="var(--color-green-zigzag)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>{' '}
              is
            </span>
            <span className="hero__statement-line">an opportunity to</span>
            <span className="hero__statement-line">
              problem{' '}
              <span className="hero__highlight hero__highlight--solve">
                <em>solve.</em>
                <span className="hero__straight-line" aria-hidden="true"></span>
              </span>
            </span>
          </blockquote>

          {/* Personal Bio */}
          <p className="hero__bio">
            I design websites, dashboards, and digital products that solve
            real problems through research, thoughtful design, and AI
            tools where they make sense.
          </p>

          {/* Action Buttons */}
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

          {/* Scroll Explore Indicator */}
          <div className="hero__scroll">
            <a href="#services" className="hero__scroll-link" id="scroll-explore" aria-label="Scroll down to explore work">
              <span className="scroll__text">SCROLL TO EXPLORE</span>
              <span className="scroll__arrow" aria-hidden="true">↓</span>
            </a>
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


