import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* ——— Hero / Intro Section ——— */}
      <section className="hero-section">
        <h1 className="hero-title">The Ether (Detroit)</h1>
        <p className="hero-tagline">
          A boundless space that sparks change and ignites creativity.
        </p>
        <div className="hero-keywords">
          <span>Bold & Transformative</span>
          <span>Rooted in Disruption & Rebellion</span>
          <span>Conceptual & Abstract</span>
        </div>
      </section>

       {/* ——— Mission Statement ——— */}
       <section className="mission-section">
        <h2 className="section-heading">Our Mission</h2>
        <p className="mission-text">
          “To redefine Detroit’s creative landscape through the power of Black, queer artistry, merging sustainable fashion, radical visual art, and intersectional
          storytelling to inspire, disrupt, and transform culture.”
        </p>
      </section>

      {/* ——— How We Activate the Studio ——— */}
      <section className="activate-section">
        <h2 className="section-heading">How We Activate the Studio</h2>
        <p className="activate-intro">
          Here’s a glimpse at the ways The Ether collective brings this space to life:
        </p>
        <div className="activate-grid">
          {/* Coworking Days */}
          <div className="activate-card">
            <div className="placeholder-icon" />
            <h3 className="activate-title">Coworking Days</h3>
            <p className="activate-description">
              We open our doors weekdays from 10am–6pm, allowing each other to push projects forward in a collaborative environment.
            </p>
          </div>

          {/* Storage for Creators */}
          <div className="activate-card">
            <div className="placeholder-icon" />
            <h3 className="activate-title">Storage for Creators</h3>
            <p className="activate-description">
              We maintain secure shelving and lockers for props, fabrics, and finished pieces—ensuring everyone has what they need when inspiration strikes.
            </p>
          </div>

          {/* Workshops */}
          <div className="activate-card">
            <div className="placeholder-icon" />
            <h3 className="activate-title">Workshops</h3>
            <p className="activate-description">
              We host hands-on sessions like “Upcycled Fashion 101” or “Intro to Studio Lighting,” sharing skills across our collective.
            </p>
          </div>

          {/* DJ Sessions */}
          <div className="activate-card">
            <div className="placeholder-icon" />
            <h3 className="activate-title">DJ Sessions</h3>
            <p className="activate-description">
              We spin beats, record mixes, and refine our sound in a dedicated booth—creating an auditory layer to our creative process.
            </p>
          </div>

          {/* More Ways */}
          <div className="activate-card">
            <div className="placeholder-icon" />
            <h3 className="activate-title">…And More</h3>
            <p className="activate-description">
              From pop-ups and collaborative art builds to film shoots and gallery setups—our team continuously experiments with new activations.
            </p>
          </div>
        </div>
      </section>


      {/* ——— The Collective ——— */}
      <section className="collective-section">
        <h2 className="section-heading">The Collective</h2>
        <div className="collective-grid">
          {/* Nerd */}
          <div className="member-card">
            <div className="placeholder-image"></div>
            <h3 className="member-name">Nerd</h3>
            <p className="member-role">
              Fashion Designer & Stylist / Technology Developer
            </p>
          </div>

          {/* Snazz */}
          <div className="member-card">
            <div className="placeholder-image"></div>
            <h3 className="member-name">Snazz</h3>
            <p className="member-role">Short-form Content Creator</p>
          </div>

          {/* Miles */}
          <div className="member-card">
            <div className="placeholder-image"></div>
            <h3 className="member-name">Miles</h3>
            <p className="member-role">Director & Producer</p>
          </div>

          {/* AR */}
          <div className="member-card">
            <div className="placeholder-image"></div>
            <h3 className="member-name">AR</h3>
            <p className="member-role">Photographer / Videographer</p>
          </div>
        </div>
      </section>

      {/* ——— The Space ——— */}
      <section className="space-section">
        <h2 className="section-heading">The Space</h2>
        <div className="space-content">
          <div className="placeholder-image-large"></div>
          <div className="space-info">
            <p>
              Our studio spans <strong>1,200 sq ft</strong> in total—of which
              <strong> 800 sq ft </strong> is available for rent (productions,
              workshops, etc.). We activate these walls and floors with rotating
              creative projects, leveraging our built-in backdrop to its full potential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
