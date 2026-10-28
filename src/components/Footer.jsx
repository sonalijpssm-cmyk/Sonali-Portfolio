import React, { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setStatus('');
    }, 4500);
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
          {/* Left Column: Heading, Subtitle, and Contact Form Card */}
          <div className="footer__left">
            <span className="footer__eyebrow">GOOD DESIGN STARTS WITH A CONVERSATION</span>
            <h2 className="footer__title">
              Let's create something<br className="footer__title-br" /> meaningful.
            </h2>
            <p className="footer__subtitle">
              Have a product, problem, or idea in mind? I'd love to hear about it.
            </p>

            {/* Contact Form Card */}
            <div className="footer__form-card">
              <h3 className="footer__form-title">Get in touch</h3>
              <p className="footer__form-desc">
                Send me a message and I'll get back to you soon.
              </p>

              {status ? (
                <div className="footer__form-success" role="status">
                  {status}
                </div>
              ) : (
                <form className="footer__form" onSubmit={handleSubmit}>
                  <div className="footer__form-group">
                    <label htmlFor="footer-name" className="footer__form-label">
                      Name
                    </label>
                    <input 
                      id="footer-name"
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required 
                      className="footer__form-input" 
                    />
                  </div>

                  <div className="footer__form-group">
                    <label htmlFor="footer-email" className="footer__form-label">
                      Email
                    </label>
                    <input 
                      id="footer-email"
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com" 
                      required 
                      className="footer__form-input" 
                    />
                  </div>

                  <div className="footer__form-group">
                    <label htmlFor="footer-message" className="footer__form-label">
                      Message
                    </label>
                    <textarea 
                      id="footer-message"
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..." 
                      rows="4" 
                      required 
                      className="footer__form-textarea" 
                    />
                  </div>

                  <button type="submit" className="footer__form-submit">
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Decorative Star Graphic + Contact & Social Links */}
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

            <div className="footer__links">
              {/* Email */}
              <div className="footer__link-item">
                <a 
                  href="mailto:sonalijpssm@gmail.com" 
                  className="footer__link-name"
                  title="Compose email to sonalijpssm@gmail.com"
                >
                  Email <span className="footer__link-arrow" aria-hidden="true">↗</span>
                </a>
                <a 
                  href="mailto:sonalijpssm@gmail.com" 
                  className="footer__link-url"
                  title="Compose email to sonalijpssm@gmail.com"
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
    </footer>
  );
}
