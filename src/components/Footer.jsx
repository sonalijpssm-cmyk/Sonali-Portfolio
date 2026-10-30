import React, { useState } from 'react';

export default function Footer() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "6eeece0f-34e3-4c31-bcef-65358751ff50");
    formData.append("from_name", "Sonali Nayak Portfolio");
    formData.append("subject", "New Message from Portfolio Get in Touch Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent.");
        alert("Success! Your message has been sent.");
        form.reset();
      } else {
        const errorMsg = "Error: " + (data.message || "Failed to send message.");
        setResult(errorMsg);
        alert(errorMsg);
      }
    } catch (error) {
      const errorMsg = "Something went wrong. Please try again.";
      setResult(errorMsg);
      alert(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer" id="contact" role="contentinfo">
      <span id="footer" className="sr-only" aria-hidden="true" />
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
            <div className="footer__form-card" id="get-in-touch">
              <h3 className="footer__form-title">Get in touch</h3>
              <p className="footer__form-desc">
                Send me a message and I'll get back to you soon.
              </p>

              {result && (
                <div 
                  className={`footer__form-alert ${result.startsWith("Success") ? "footer__form-alert--success" : "footer__form-alert--error"}`} 
                  role="status"
                >
                  {result}
                </div>
              )}

              <form id="form" className="footer__form" onSubmit={handleSubmit}>
                <div className="footer__form-group">
                  <label htmlFor="footer-name" className="footer__form-label">
                    Name
                  </label>
                  <input 
                    id="footer-name"
                    type="text" 
                    name="name" 
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
                    placeholder="Tell me about your project..." 
                    rows="4" 
                    required 
                    className="footer__form-textarea" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="footer__form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
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
