import React from 'react';
import '../styles/Space.css';
import heroSpaceImage from '../assets/main/07022025-10.jpg';
import spaceGalleryImageOne from '../assets/main/07022025.jpg';
import spaceGalleryImageTwo from '../assets/main/07022025-11.jpg';

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
          <img
            className="space-image space-image-large"
            src={heroSpaceImage}
            alt="Wide view of THE ETHER DETROIT studio."
          />
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
          <img
            className="space-image"
            src={spaceGalleryImageOne}
            alt="Creative production setup inside THE ETHER DETROIT."
          />
          <img
            className="space-image"
            src={spaceGalleryImageTwo}
            alt="Studio lounge and lighting setup inside THE ETHER DETROIT."
          />
          <img
            className="space-image"
            src={heroSpaceImage}
            alt="Open studio floor at THE ETHER DETROIT."
          />
        </div>
      </section>

      <section className="space-access">
        <div className="space-access-copy">
          <h2 className="section-heading">Ready to book?</h2>
          <p className="section-subtext">
            Reserve the studio through Peerspace for direct bookings, or submit
            the monthly inquiry form if you want to explore a more intentional
            studio use conversation with our team.
          </p>
          <div className="space-cta-row">
            <a
              className="space-cta"
              href="https://www.peerspace.com/pages/listings/682d04fd71ad90bf3ef49acf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book through Peerspace
            </a>
            <a
              className="space-cta space-cta-secondary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScXX3QYnnNmS3Xod_6CXzGTXYOE70lr9I2qgjjBX8FdTXvUZg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monthly Space Use Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Space;
