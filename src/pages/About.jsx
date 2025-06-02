import React from 'react';
import '../styles/About.css'

const About = () => {
  return (
    <div className="about-container">
      {/* ——— Our Story / Founding ——— */}
      <section className="story-section">
        <h2 className="section-heading">Our Story</h2>
        <p className="story-text">
          The Ether Detroit was founded in March 2025 by four Detroit-based creatives:
          a place to amplify Black, queer artistry through cross-disciplinary collaboration.
          We believe in disruption, cultural authenticity, and sustainable impact.
        </p>
      </section>

      {/* ——— Meet the Collective ——— */}
      <section className="meet-section">
        <h2 className="section-heading">Meet the Collective</h2>
        <div className="meet-grid">
          {/* Nerd */}
          <div className="meet-card">
            <div className="placeholder-profile" />
            <h3 className="meet-name">Nerd</h3>
            <p className="meet-role">
              Fashion Designer & Stylist / Technology Developer
            </p>
            <div className="meet-links">
              <a href="https://nerd-portfolio.example.com" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              <span> | </span>
              <a href="https://nerdconsulting.tech" target="_blank" rel="noopener noreferrer">
                Business Site
              </a>
            </div>
          </div>

          {/* Snazz */}
          <div className="meet-card">
            <div className="placeholder-profile" />
            <h3 className="meet-name">Snazz</h3>
            <p className="meet-role">Short-form Content Creator</p>
            <div className="meet-links">
              <a href="https://snazz-portfolio.example.com" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              <span> | </span>
              <a href="https://snazzstudio.example.com" target="_blank" rel="noopener noreferrer">
                Business Site
              </a>
            </div>
          </div>

          {/* Miles */}
          <div className="meet-card">
            <div className="placeholder-profile" />
            <h3 className="meet-name">Miles</h3>
            <p className="meet-role">Director & Producer</p>
            <div className="meet-links">
              <a href="https://miles-portfolio.example.com" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              <span> | </span>
              <a href="https://milesproductions.example.com" target="_blank" rel="noopener noreferrer">
                Business Site
              </a>
            </div>
          </div>

          {/* AR */}
          <div className="meet-card">
            <div className="placeholder-profile" />
            <h3 className="meet-name">AR</h3>
            <p className="meet-role">Photographer / Videographer</p>
            <div className="meet-links">
              <a href="https://ar-portfolio.example.com" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              <span> | </span>
              <a href="https://arstudios.example.com" target="_blank" rel="noopener noreferrer">
                Business Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— What We Stand For ——— */}
      <section className="values-section">
        <h2 className="section-heading">What We Stand For</h2>
        <p className="values-text">
          We’re not just creators—we’re connectors. Our extensive network and diverse creative capabilities unite artists,
          brands, and communities. With authentic lived experiences and a collaborative approach, your story doesn’t just reach audiences—it moves them.
        </p>
        <ul className="values-list">
          <li>Intersectional storytelling</li>
          <li>Cultural authenticity & awareness</li>
          <li>Cross-disciplinary collaboration</li>
          <li>Community connection</li>
          <li>Innovation & disruption</li>
          <li>Sustainability & social impact</li>
          <li>Detroit roots</li>
        </ul>
      </section>

      {/* ——— The Space & Amenities ——— */}
      <section className="about-space-section">
        <h2 className="section-heading">The Space & Amenities</h2>
        <div className="about-space-content">
          <div className="placeholder-image-large"></div>
          <div className="about-space-info">
            <p>
              Our studio occupies a total of <strong>1,200 sq ft</strong>, with <strong>800 sq ft</strong> available for rent.
              That space can be configured for:
            </p>
            <ul className="amenities-list">
              <li>Coworking days (open seating during business hours)</li>
              <li>Short-term storage for props, supplies, and finished work</li>
              <li>Rotating hands-on workshops (from sustainable fashion to lighting)</li>
              <li>DJ sessions</li>
              <li>Pop-ups, film shoots, gallery installations, and more upon request</li>
            </ul>
            <p>
              Located in the heart of the Russell Industrial Center, we’re rooted in Detroit’s legacy
              while pushing toward tomorrow. Our backdrop, lighting rigs, and flexible floor plan are
              designed to bring your vision to life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
