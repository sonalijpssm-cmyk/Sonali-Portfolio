import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <header className="header" id="header">
      <div className="container header__nav-wrapper">
        {/* Left Pill: Calligraphic Monogram + Role / Brand */}
        <a href="#" className="nav-pill nav-pill--brand" aria-label="Sonali Nayak - UX/UI Designer">
          <span className="nav-pill__script-icon">
            <svg viewBox="0 0 32 32" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22 8C20 6 15 5 11 8C7 11 7 16 12 18C18 20 23 21 21 26C19 29 13 30 9 27C7 25 6 22 7 20" stroke="#121512" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="nav-pill__role-title">UX/UI Designer</span>
        </a>

        {/* Right Group: Segmented Links Pill + Separate Dark Green Contact Pill */}
        <div className="header__right-group">
          <nav className={`nav ${isOpen ? 'is-open' : ''}`} id="main-nav" aria-label="Primary Navigation">
            <div className="nav-pill nav-pill--links">
              <a href="#work" className="nav-pill__link" onClick={() => setIsOpen(false)}>Portfolio</a>
              <span className="nav-pill__divider" aria-hidden="true"></span>
              <a href="#about" className="nav-pill__link" onClick={() => setIsOpen(false)}>About</a>
              <span className="nav-pill__divider" aria-hidden="true"></span>
              <a href="#services" className="nav-pill__link" onClick={() => setIsOpen(false)}>What I do</a>
            </div>
            
            <a href="#contact" className="nav-pill nav-pill--cta nav-pill--cta-mobile" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </nav>

          <a href="#contact" className="nav-pill nav-pill--cta nav-pill--cta-desktop">
            Contact
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            className={`nav-toggle ${isOpen ? 'is-active' : ''}`} 
            id="nav-toggle" 
            aria-expanded={isOpen} 
            aria-controls="main-nav" 
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="nav-toggle__bar"></span>
            <span className="nav-toggle__bar"></span>
            <span className="nav-toggle__bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

