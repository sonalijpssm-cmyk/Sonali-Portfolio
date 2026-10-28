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
          {/* Left Column: Heading, Subtitle, Contact CTA */}
          <div className="footer__left">
            <span className="footer__eyebrow">GOOD DESIGN STARTS WITH A CONVERSATION</span>
            <h2 className="footer__title">
              Let's create something<br className="footer__title-br" /> meaningful.
            </h2>
            <p className="footer__subtitle">
              Have a product, problem, or idea in mind? I'd love to hear about it.
            </p>

            <div className="footer__contact-action">
              <div className="footer__social-item">
                <a 
                  href="mailto:sonalijpssm@gmail.com" 
                  className="footer__social-name"
                  onClick={handleCopyEmail}
                  title="Send email or click to copy"
                >
                  Email <span className="footer__social-arrow" aria-hidden="true">↗</span>
                </a>
                <a 
                  href="mailto:sonalijpssm@gmail.com" 
                  className="footer__social-url"
                  onClick={handleCopyEmail}
                  title="Click to copy email address"
                >
                  sonalijpssm@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Decorative Star & Social Links */}
          <div className="footer__right">
            <div className="footer__star-wrapper" aria-hidden="true">
              <img 
                src="/assets/footer-star.png" 
                alt="" 
                className="footer__star-img"
                width="175"
                height="175"
                loading="lazy"
              />
            </div>

            <div className="footer__socials">
              <div className="footer__social-item">
                <a 
                  href="https://www.behance.net/sonalinayak6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-name"
                >
                  Behance <span className="footer__social-arrow" aria-hidden="true">↗</span>
                </a>
                <a 
                  href="https://www.behance.net/sonalinayak6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-url"
                >
                  https://www.behance.net/sonalinayak6
                </a>
              </div>

              <div className="footer__social-item">
                <a 
                  href="https://www.linkedin.com/in/sonali-nayak9017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-name"
                >
                  LinkedIn <span className="footer__social-arrow" aria-hidden="true">↗</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sonali-nayak9017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-url"
                >
                  www.linkedin.com/in/sonali-nayak9017
                </a>
              </div>
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
