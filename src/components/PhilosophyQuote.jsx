import React from 'react';

export default function PhilosophyQuote() {
  return (
    <section className="quote-banner" id="quote" aria-label="Design Philosophy Quote">
      <span id="quote-section" className="sr-only" aria-hidden="true" />
      {/* Background Ambient Glows & Geometric Motifs */}
      <div className="quote-banner__ambient-glow" aria-hidden="true" />
      <div className="quote-banner__circle-motif" aria-hidden="true" />

      <div className="container quote-banner__container">
        <blockquote className="quote-banner__blockquote">
          <p className="quote-banner__text">
            “Simplifying complexity is not about removing features—it’s about creating mental models that make critical decisions feel effortless.”
          </p>
          <footer className="quote-banner__footer">
            <span className="quote-banner__dash" aria-hidden="true" />
            <cite className="quote-banner__author">SONALI NAYAK</cite>
            <span className="quote-banner__dash" aria-hidden="true" />
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
