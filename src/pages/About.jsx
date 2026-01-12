import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <p className="about-eyebrow">About THE ETHER DETROIT</p>
        <h1 className="about-title">A boundless space that sparks change and ignites creativity.</h1>
        <p className="about-intro">
          THE ETHER DETROIT is a studio and creative practice grounded in Black,
          queer artistry. We work at an intentional scale so ideas can breathe,
          evolve, and become something real.
        </p>
      </section>

      <section className="mission-section">
        <h2 className="section-heading">Mission statement</h2>
        <p className="mission-text">
          “To redefine Detroit&apos;s creative landscape through the power of Black,
          queer artistry, merging sustainable fashion, radical visual art, and
          intersectional storytelling to inspire, disrupt, and transform culture.”
        </p>
      </section>

      <section className="story-section">
        <div className="story-grid">
          <div className="story-copy">
            <h2 className="section-heading">Why THE ETHER DETROIT exists</h2>
            <p className="story-text">
              Detroit taught us how to build with what we have and dream beyond what we
              see. THE ETHER DETROIT exists to hold that energy — a container for process,
              experimentation, and cross-disciplinary work that honors the city’s
              legacy of making and remixing.
            </p>
            <p className="story-text">
              This is a space for deliberate creation: small enough to stay human,
              large enough to shift culture.
            </p>
          </div>
          <div className="story-visual" aria-hidden="true">
            <div className="story-image" />
          </div>
        </div>
      </section>

      <section className="detroit-root">
        <div className="detroit-grid">
          <div className="detroit-visual" aria-hidden="true">
            <div className="story-image" />
          </div>
          <div className="detroit-copy">
            <h2 className="section-heading">Detroit as creative root</h2>
            <p className="intent-text">
              We are rooted in Detroit’s creative lineage and its radical imagination.
              Every project is informed by the city — its people, its resilience, and
              its refusal to be boxed in.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-heading">What we stand for</h2>
        <p className="values-text">
          These values are lived daily in the studio and in the way we partner.
        </p>
        <ul className="values-list">
          <li>Intersectional storytelling</li>
          <li>Cultural authenticity</li>
          <li>Cross-disciplinary collaboration</li>
          <li>Community connection</li>
          <li>Innovation and disruption</li>
          <li>Sustainability and social impact</li>
          <li>Detroit roots</li>
        </ul>
      </section>

      <section className="meet-section">
        <h2 className="section-heading">The People</h2>
        <div className="meet-grid">
          <div className="meet-card">
            <div className="placeholder-profile" />
            <h3 className="meet-name">Nerd</h3>
            <p className="meet-role">Fashion Designer & Stylist / Technology Developer</p>
            <p className="meet-bio">
              Builds wearable worlds and digital tools that support bold
              storytelling.
            </p>
            <p className="meet-focus">Creative focus: fashion systems + visual identity.</p>
            <a
              className="meet-brand"
              href="https://www.showbothrows.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              House of Both Rows
            </a>
          </div>

          <div className="meet-card">
            <div className="placeholder-profile" />
            <h3 className="meet-name">AR</h3>
            <p className="meet-role">Photographer / Videographer</p>
            <p className="meet-bio">
              Captures the texture of Detroit with a focus on movement, mood, and
              intimacy.
            </p>
            <p className="meet-focus">Creative focus: photo + film direction.</p>
            <a
              className="meet-brand"
              href="https://www.roguesgallery.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rogue&apos;s Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
