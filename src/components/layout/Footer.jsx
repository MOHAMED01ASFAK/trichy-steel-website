import { ArrowUpRight, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerColumns = {
  links: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/branches', label: 'Branches' },
    { to: '/projects', label: 'Projects' },
  ],
  products: [
    { label: 'TMT Bars', to: '/products/tmt-bars' },
    { label: 'Steel Pipes', to: '/products/steel-pipes' },
    { label: 'Steel Sheets', to: '/products/steel-sheets' },
    { label: 'Angles & Channels', to: '/products/angles-channels' },
    { label: 'Beams', to: '/products/beams' },
  ],
};

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-wordmark" aria-hidden="true">TRICHY STEEL</div>
    <div className="section-shell footer-grid">
      <div>
        <div className="brand footer-brand">
          <span className="brand-mark">TS</span>
          <span className="brand-text">Trichy Steel</span>
        </div>
        <p className="footer-intro">
          Demo content — replace with verified company profile and service overview.
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <ul className="footer-list">
          {footerColumns.links.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Products</h3>
        <ul className="footer-list">
          {footerColumns.products.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Contact</h3>
        <ul className="footer-list footer-contact-list">
          <li><MapPin size={16} /> Demo address — replace with verified location.</li>
          <li><Phone size={16} /> Demo phone — replace with verified number.</li>
          <li><MessageSquare size={16} /> Demo WhatsApp — replace with verified number.</li>
          <li><Mail size={16} /> Demo email — replace with verified email.</li>
        </ul>
      </div>
    </div>

    <div className="section-shell footer-bottom">
      <div>
        © 2026 Trichy Steel. Demo content — replace with verified company information.
      </div>
      <div className="footer-meta">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <button
          type="button"
          className="top-link"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        >
          Back to top <ArrowUpRight size={15} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
