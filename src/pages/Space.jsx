import React from 'react';
import '../styles/Space.css';

const Space = () => {
  return (
    <div className="space-page">
      <section className="space-hero">
        <div className="space-hero-copy">
          <p className="space-eyebrow">The Space</p>
          <h1 className="space-title">A container for process, experimentation, and bold work.</h1>
          <p className="space-intro">
            THE ETHER DETROIT studio is built for creators who need room to explore. It’s
            intentional in scale, adaptable in layout, and rooted in Detroit’s
            creative pulse.
          </p>
          <p className="space-safe">
            A safe, affirming space where everyone is welcome.
          </p>
          <a
            className="space-cta"
            href="https://www.peerspace.com/pages/listings/682d04fd71ad90bf3ef49acf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book via Peerspace
          </a>
        </div>
        <div className="space-hero-visual" aria-hidden="true">
          <div className="space-image space-image-large" />
          <div className="space-image space-image-small" />
        </div>
      </section>

      <section className="space-usage">
        <h2 className="section-heading">What the space is best used for</h2>
        <div className="space-pill-grid">
          <span>Photo + video productions</span>
          <span>Workshops + skill shares</span>
          <span>Installations + exhibitions</span>
          <span>Listening sessions</span>
          <span>Brand activations</span>
          <span>Creative retreats</span>
        </div>
      </section>

      <section className="space-supported">
        <div className="space-supported-copy">
          <h2 className="section-heading">Types of creative work supported</h2>
          <p className="section-subtext">
            Fashion builds, styling sessions, visual art creation, storytelling
            labs, sonic experiments, and collaborative production.
          </p>
        </div>
        <div className="space-supported-visual" aria-hidden="true">
          <div className="space-image" />
          <div className="space-image" />
          <div className="space-image" />
        </div>
      </section>

      <section className="space-access">
        <div className="space-access-copy">
          <h2 className="section-heading">Ready to book?</h2>
          <p className="section-subtext">
            Reserve the studio through Peerspace. We review each request to keep
            the space aligned and can support your setup if needed.
          </p>
          <a
            className="space-cta"
            href="https://www.peerspace.com/pages/listings/682d04fd71ad90bf3ef49acf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book through Peerspace
          </a>
        </div>
      </section>
    </div>
  );
};

export default Space;
