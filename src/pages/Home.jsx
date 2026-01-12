import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logoTeal from '../assets/the_ether_teal.png';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-aura" aria-hidden="true" />
        <div className="hero-visual reveal">
          <div className="hero-image hero-image-main" aria-hidden="true" />
          <div className="hero-image hero-image-accent" aria-hidden="true" />
        </div>
        <div className="hero-copy">
          <div className="logo-animation-container">
            <img
              src={logoTeal}
              alt="THE ETHER DETROIT"
              className="animated-logo"
            />
          </div>
          <h1 className="hero-title reveal delay-1">A space that feels like possibility.</h1>
          <p className="hero-tagline reveal delay-2">
            To redefine Detroit&apos;s creative landscape through the power of Black,
            queer artistry, merging sustainable fashion, radical visual art, and
            intersectional storytelling to inspire, disrupt, and transform culture.
          </p>
          <div className="hero-actions reveal delay-3">
            <Link className="hero-button primary" to="/about">
              Explore THE ETHER DETROIT
            </Link>
            <a
              className="hero-button secondary"
              href="https://www.peerspace.com/pages/listings/682d04fd71ad90bf3ef49acf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enter the Space
            </a>
          </div>
        </div>
      </section>

      <section className="definition-section">
        <h2 className="definition-title reveal">THE ETHER DETROIT</h2>
        <p className="definition-line reveal delay-1">
          A boundless space that sparks change and ignites creativity.
        </p>
        <div className="descriptor-grid reveal delay-2">
          <span>Bold &amp; Transformative</span>
          <span>Rooted in Disruption &amp; Rebellion</span>
          <span>Conceptual &amp; Abstract</span>
        </div>
      </section>

      <section className="space-section">
        <div className="space-header reveal">
          <h2 className="section-heading">The Space (Quick Glimpse)</h2>
          <p className="section-subtext">
            We’re not just creators — we’re connectors. This studio supports
            shoots, workshops, installations, and moments that need room to breathe.
          </p>
        </div>
        <div className="space-gallery reveal delay-1">
          <div className="space-image" aria-hidden="true" />
          <div className="space-image" aria-hidden="true" />
          <div className="space-image" aria-hidden="true" />
        </div>
        <div className="space-cta reveal delay-2">
          <a
            className="hero-button primary"
            href="https://www.peerspace.com/pages/listings/682d04fd71ad90bf3ef49acf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book via Peerspace
          </a>
        </div>
      </section>

      <section className="closing-cta">
        <p className="closing-line reveal">Have an idea that needs room to breathe?</p>
        <Link className="hero-button secondary reveal delay-1" to="/contact">
          Reach out
        </Link>
      </section>
    </div>
  );
};

export default Home;
