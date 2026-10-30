import React from 'react';
import paintingImg from '../assets/about-painting.png';
import sketchesImg from '../assets/about-sketches.png';
import sunflowersImg from '../assets/about-sunflowers.png';
import perspectivesImg from '../assets/about-perspectives.png';

export default function AboutMe() {
  return (
    <section className="about-me" id="about" aria-label="A little about me">
      <span id="little-about-me" className="sr-only" aria-hidden="true" />
      <div className="container about-me__container">
        
        {/* Section Header: 2 Columns */}
        <div className="about-me__header">
          {/* Left Header */}
          <div className="about-me__header-left">
            <span className="about-me__eyebrow">THE PERSON BEHIND THE PIXELS</span>
            <h2 className="about-me__title">A little about me.</h2>
          </div>

          {/* Right Header */}
          <div className="about-me__header-right">
            <p className="about-me__bio">
              I'm a designer who enjoys making complex things easier to understand.
              Alongside digital design, I enjoy exploring creativity through art, paintings,
              sketches, and visual experimentation.
            </p>
            <h3 className="about-me__subtitle">
              <span>Art, sketches &amp; visual exploration.</span>
              <svg 
                className="about-me__sparkle" 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                aria-hidden="true" 
                focusable="false"
              >
                <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2Z" fill="currentColor"/>
              </svg>
            </h3>
          </div>
        </div>

        {/* Gallery Grid Composition */}
        <div className="about-me__gallery">
          
          {/* Column 1: Left Tilted Painting */}
          <div className="about-card about-card--tilted">
            <div className="about-card__frame">
              <img 
                src={paintingImg} 
                alt="Colorful acrylic painting of a woman in red dress with basket of fruits against vibrant yellow background" 
                className="about-card__image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="about-card__caption">Not perfect, just mine.</p>
          </div>

          {/* Column 2: Center Stack (Sketches + Sunflowers) */}
          <div className="about-me__center-stack">
            {/* Top: Sketches */}
            <div className="about-card">
              <div className="about-card__frame">
                <img 
                  src={sketchesImg} 
                  alt="Pencil sketch artwork of a child and Buddha portrait on paper" 
                  className="about-card__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="about-card__caption">A little mess on paper.</p>
            </div>

            {/* Bottom: Sunflowers */}
            <div className="about-card">
              <div className="about-card__frame">
                <img 
                  src={sunflowersImg} 
                  alt="Two handmade crochet sunflowers held outdoors" 
                  className="about-card__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="about-card__caption">Handmade with love.</p>
            </div>
          </div>

          {/* Column 3: Right Photo (Snow Cafe) + Golden Star */}
          <div className="about-me__right-wrapper">
            <div className="about-me__floating-star" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" focusable="false">
                <path d="M12 0L14.2 8.8L22.6 4.6L16.8 11.6L24 12L16.8 12.4L22.6 19.4L14.2 15.2L12 24L9.8 15.2L1.4 19.4L7.2 12.4L0 12L7.2 11.6L1.4 4.6L9.8 8.8Z" fill="currentColor"/>
              </svg>
            </div>

            <div className="about-card about-card--right">
              <div className="about-card__frame">
                <img 
                  src={perspectivesImg} 
                  alt="Sonali wearing beanie and sunglasses enjoying noodles at a snowy mountain glasshouse cafe" 
                  className="about-card__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="about-card__caption">Little things, fresh perspectives.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
