import { Phone, MessageCircleMore, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileContactBar = () => {
  const location = useLocation();
  const hiddenPaths = ['/enquiry', '/contact'];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="mobile-contact-bar" aria-label="Quick contact actions">
      <a href="tel:+919999999999" className="mobile-contact-item">
        <Phone size={18} />
        <span>Call</span>
      </a>
      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="mobile-contact-item">
        <MessageCircleMore size={18} />
        <span>WhatsApp</span>
      </a>
      <Link to="/enquiry" className="mobile-contact-item accent">
        <FileText size={18} />
        <span>Quote</span>
      </Link>
    </div>
  );
};

export default MobileContactBar;
