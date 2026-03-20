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
          <p className="contact-fallback">
            Need a quick answer? Call
            <a href="tel:+13136716991"> 313-671-6991</a>.
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

      <section className="contact-forms">
        <h2 className="section-heading">Inquiry Forms</h2>
        <p className="section-subtext">
          Choose the form that matches your request so we can route it with the
          right context from the start.
        </p>
        <div className="contact-form-grid">
          <article className="contact-form-card">
            <h3>The Ether Monthly Space Use Inquiry Form</h3>
            <p>
              For studio use requests, recurring bookings, and space inquiries
              that need a little more context than a direct Peerspace reservation.
            </p>
            <a
              className="contact-form-cta"
              href="https://docs.google.com/forms/d/e/1FAIpQLScXX3QYnnNmS3Xod_6CXzGTXYOE70lr9I2qgjjBX8FdTXvUZg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Space Inquiry Form
            </a>
          </article>

          <article className="contact-form-card">
            <h3>The Ether Community Activation Form</h3>
            <p>
              For partnerships, public programming, brand collaborations, and
              community-centered activations.
            </p>
            <a
              className="contact-form-cta contact-form-cta-secondary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdcfhBJKsNJHd8mp9_3j5MK2vYY7MT9rNlIxnTLW_zRWMLRjg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Community Activation Form
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Contact;
