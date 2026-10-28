import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('sonalijpssm@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer" id="contact" role="contentinfo">
      <div className="container footer__container">
        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Left Column: Heading, Subtitle, Stacked Contact & Social Links */}
          <div className="footer__left">
            <span className="footer__eyebrow">GOOD DESIGN STARTS WITH A CONVERSATION</span>
            <h2 className="footer__title">
              Let's create something<br className="footer__title-br" /> meaningful.
            </h2>
            <p className="footer__subtitle">
              Have a product, problem, or idea in mind? I'd love to hear about it.
            </p>

            <div className="footer__links">
              {/* Email */}
              <div className="footer__link-item">
                <a 
                  href="mailto:sonalijpssm@gmail.com" 
                  className="footer__link-name"
                  onClick={handleCopyEmail}
                  title="Send email or click to copy"
                >
                  Email <span className="footer__link-arrow" aria-hidden="true">↗</span>
                </a>
                <a 
                  href="mailto:sonalijpssm@gmail.com" 
                  className="footer__link-url"
                  onClick={handleCopyEmail}
                  title="Click to copy email address"
                >
                  sonalijpssm@gmail.com
                </a>
              </div>

              {/* Behance */}
              <div className="footer__link-item">
                <a 
                  href="https://www.behance.net/sonalinayak6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link-name"
                >
                  Behance <span className="footer__link-arrow" aria-hidden="true">↗</span>
                </a>
                <a 
                  href="https://www.behance.net/sonalinayak6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link-url"
                >
                  https://www.behance.net/sonalinayak6
                </a>
              </div>

              {/* LinkedIn */}
              <div className="footer__link-item">
                <a 
                  href="https://www.linkedin.com/in/sonali-nayak9017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link-name"
                >
                  LinkedIn <span className="footer__link-arrow" aria-hidden="true">↗</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sonali-nayak9017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link-url"
                >
                  www.linkedin.com/in/sonali-nayak9017
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Decorative 8-Pointed Star Graphic */}
          <div className="footer__right">
            <div className="footer__star-wrapper" aria-hidden="true">
              <img 
                src="/assets/footer-star.png" 
                alt="" 
                className="footer__star-img"
                width="195"
                height="195"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer__divider" aria-hidden="true" />

        {/* Sub-Footer Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__brand">
            <span className="footer__brand-text">Sonali.</span>
            <span className="footer__brand-sparkle" aria-hidden="true">✧</span>
          </div>

          <p className="footer__copyright">
            Thoughtfully designed by Sonali Nayak.
          </p>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="footer__back-to-top"
            aria-label="Scroll back to top of page"
          >
            BACK TO TOP <span className="footer__back-arrow" aria-hidden="true">↑</span>
          </button>
        </div>
      </div>

      {/* Copy Notification Toast */}
      {copied && (
        <div className="portfolio-toast" role="status" aria-live="polite">
          Email copied to clipboard! (sonalijpssm@gmail.com)
        </div>
      )}
    </footer>
  );
}
