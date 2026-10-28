import React from 'react';

export default function ScrollCue() {
  return (
    <div className="container hero__scroll-container">
      <a href="#work" className="hero__scroll-link" id="scroll-explore" aria-label="Scroll down to explore work">
        <span className="scroll__text">SCROLL TO EXPLORE</span>
        <span className="scroll__arrow" aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
