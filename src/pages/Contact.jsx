import { Mail, MessageCircleMore, Phone, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/common/PageHero';

const Contact = () => (
  <>
    <PageHero eyebrow="Contact" title="CONTACT TRICHY STEEL" subtitle="Demo content — replace with verified corporate contact details and support channels." />

    <section className="section-shell page-shell contact-layout">
      <div className="contact-cards">
        <div className="info-card card">
          <Phone size={18} />
          <h3>Call</h3>
          <p>Demo phone — replace with verified number.</p>
        </div>
        <div className="info-card card">
          <MessageCircleMore size={18} />
          <h3>WhatsApp</h3>
          <p>Demo WhatsApp — replace with verified number.</p>
        </div>
        <div className="info-card card">
          <Mail size={18} />
          <h3>Email</h3>
          <p>Demo email — replace with verified email.</p>
        </div>
      </div>

      <div className="contact-grid">
        <div className="card contact-info-panel">
          <h3>Head Office</h3>
          <ul className="detail-list">
            <li><MapPin size={16} /> Demo address — replace with verified office address.</li>
            <li><Clock size={16} /> Mon - Sat: 9:00 AM - 7:00 PM</li>
          </ul>
        </div>

        <form className="contact-form card" noValidate>
          <div className="form-grid">
            <div>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" />
            </div>
            <div>
              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" type="tel" />
            </div>
          </div>
          <div className="full-width-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" rows="5" />
          </div>
          <button type="button" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  </>
);

export default Contact;
