import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logoTeal from '../assets/the_ether_teal.png';
import heroMainImage from '../assets/main/07022025-10.jpg';
import galleryImageOne from '../assets/main/07022025.jpg';
import galleryImageTwo from '../assets/main/07022025-11.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-aura" aria-hidden="true" />
        <div className="hero-visual reveal">
          <img
            className="hero-image hero-image-main"
            src={heroMainImage}
            alt="Wide view of THE ETHER DETROIT studio setup."
          />
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
          <img
            className="space-image"
            src={galleryImageOne}
            alt="Creative production area inside THE ETHER DETROIT."
          />
          <img
            className="space-image"
            src={galleryImageTwo}
            alt="Studio lounge and lighting setup inside THE ETHER DETROIT."
          />
          <img
            className="space-image"
            src={heroMainImage}
            alt="Open studio floor at THE ETHER DETROIT."
          />
        </div>
      </section>

      <section className="closing-cta">
        <p className="closing-line reveal">Have an idea that needs room to breathe?</p>
        <div className="home-form-actions reveal delay-1">
          <a
            className="hero-button secondary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdcfhBJKsNJHd8mp9_3j5MK2vYY7MT9rNlIxnTLW_zRWMLRjg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community Activation Form
          </a>
          <Link className="hero-button primary" to="/contact">
            General Contact
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
