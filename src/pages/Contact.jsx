import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="contact-eyebrow">Contact</p>
          <h1 className="contact-title">Let’s connect with care and intention.</h1>
          <p className="contact-intro">
            Share a few details about what you’re building, and we’ll follow up
            within 3–5 business days.
          </p>
          <p className="contact-fallback">
            Prefer email? Reach us at
            <a href="mailto:theetherdetroit@gmail.com"> theetherdetroit@gmail.com</a>.
          </p>
        </div>
        <div className="contact-hero-visual" aria-hidden="true">
          <div className="contact-image contact-image-large" />
          <div className="contact-image contact-image-small" />
        </div>
      </section>

      <section className="contact-response">
        <h2 className="section-heading">Response time</h2>
        <p className="section-subtext">
          We respond within 3–5 business days. If your request is time-sensitive,
          include your ideal timeline in the message.
        </p>
      </section>
    </div>
  );
};

export default Contact;
