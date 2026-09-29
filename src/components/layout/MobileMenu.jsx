import { X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/branches', label: 'Branches' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const MobileMenu = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose} aria-hidden="true">
      <aside
        className="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mobile-menu-header">
          <span>Menu</span>
          <button type="button" className="menu-close" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={onClose}
              className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/enquiry" className="btn btn-primary mobile-quote" onClick={onClose}>
          Get a Quote
        </Link>
      </aside>
    </div>
  );
};

export default MobileMenu;
