import React from 'react';
import '../styles/Community.css';

const Community = () => {
  return (
    <div className="community-page">
      <section className="community-hero">
        <div className="community-hero-copy">
          <p className="community-eyebrow">Community</p>
          <h1 className="community-title">How THE ETHER DETROIT engages community.</h1>
          <p className="community-intro">
            We partner with aligned organizations, artists, and neighborhoods to
            build programming that reflects Detroit’s creative pulse.
          </p>
        </div>
        <div className="community-hero-visual" aria-hidden="true">
          <div className="community-image community-image-large" />
          <div className="community-image community-image-small" />
        </div>
      </section>

      <section className="community-programming">
        <h2 className="section-heading">Types of partnerships & programming</h2>
        <div className="community-pill-grid">
          <span>Artist-led workshops</span>
          <span>Community activations</span>
          <span>Creative youth labs</span>
          <span>Brand collaborations</span>
          <span>Pop-up exhibitions</span>
          <span>Neighborhood storytelling</span>
        </div>
      </section>

      <section className="community-alignment">
        <div className="community-alignment-copy">
          <h2 className="section-heading">What alignment looks like</h2>
          <p className="section-subtext">
            We partner with people who value Black, queer artistry and approach
            collaboration with care, transparency, and shared goals.
          </p>
          <ul className="alignment-list">
            <li>Mission-aligned values and community-centered intent.</li>
            <li>Budgets that honor creative labor.</li>
            <li>Clear scope, timelines, and communication.</li>
            <li>Respect for the studio and the neighborhood.</li>
          </ul>
        </div>
        <div className="community-alignment-visual" aria-hidden="true">
          <div className="community-image" />
        </div>
      </section>

      <section className="community-inquiry">
        <h2 className="section-heading">Partnership inquiry</h2>
        <p className="section-subtext">
          Start the conversation through our contact page. We’ll follow up with
          next steps and share a detailed form when needed.
        </p>
        <div className="community-cta-row">
          <a className="community-cta" href="/contact">Go to contact</a>
        </div>
      </section>
    </div>
  );
};

export default Community;
