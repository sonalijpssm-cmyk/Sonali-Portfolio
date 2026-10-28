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
      <div className="header__pill">
        <a href="#" className="header__logo" aria-label="Sonali Nayak - Homepage">
          <span className="logo__text">Sonali.</span>
          <svg className="logo__star" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
            <path d="M12 0L14.2 8.8L22.6 4.6L16.8 11.6L24 12L16.8 12.4L22.6 19.4L14.2 15.2L12 24L9.8 15.2L1.4 19.4L7.2 12.4L0 12L7.2 11.6L1.4 4.6L9.8 8.8Z" fill="currentColor"/>
          </svg>
        </a>

        {/* Primary Navigation */}
        <nav className={`nav ${isOpen ? 'is-open' : ''}`} id="main-nav" aria-label="Primary Navigation">
          <ul className="nav__list">
            <li className="nav__item"><a href="#work" className="nav__link" onClick={() => setIsOpen(false)}>Work</a></li>
            <li className="nav__item"><a href="#about" className="nav__link" onClick={() => setIsOpen(false)}>About</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>

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
    </header>
  );
}
