import React from 'react';
import '../styles/Membership.css';

const Membership = () => {
  return (
    <div className="membership-page">
      <section className="membership-hero">
        <div className="membership-hero-copy">
          <p className="membership-eyebrow">Membership</p>
          <h1 className="membership-title">Access built on fit, intention, and care.</h1>
          <p className="membership-intro">
            Membership offers consistent access to the studio and shared resources
            for creators who want to grow inside THE ETHER DETROIT’s ecosystem.
          </p>
        </div>
        <div className="membership-hero-visual" aria-hidden="true">
          <div className="membership-image membership-image-large" />
          <div className="membership-image membership-image-small" />
        </div>
      </section>

      <section className="membership-overview">
        <div className="membership-who">
          <h2 className="section-heading">Who this is for</h2>
          <p className="section-subtext">
            Artists, designers, storytellers, and builders who are ready to invest in
            their process and contribute to a shared creative culture.
          </p>
        </div>
        <div className="membership-fit">
          <h2 className="section-heading">Fit & intention</h2>
          <p className="section-subtext">
            We keep membership small on purpose. Every inquiry is reviewed with
            care to make sure the studio stays aligned and sustainable.
          </p>
        </div>
      </section>

      <section className="membership-access">
        <div className="membership-access-copy">
          <h2 className="section-heading">What access includes</h2>
          <p className="section-subtext">
            A consistent home base for creating, collaborating, and producing.
          </p>
          <ul className="access-list">
            <li>Monthly studio access for production and ideation.</li>
            <li>Priority booking for shoots, workshops, and builds.</li>
            <li>Opportunities to collaborate on community projects.</li>
            <li>Shared tools, backdrops, and production support.</li>
          </ul>
        </div>
        <div className="membership-access-visual" aria-hidden="true">
          <div className="membership-image" />
          <div className="membership-image" />
        </div>
      </section>

      <section className="membership-inquiry">
        <h2 className="section-heading">Membership inquiry</h2>
        <p className="section-subtext">
          Reach out through our contact page and we’ll share the membership form
          with you directly.
        </p>
        <div className="membership-cta-row">
          <a className="membership-cta" href="/contact">Go to contact</a>
        </div>
      </section>
    </div>
  );
};

export default Membership;
