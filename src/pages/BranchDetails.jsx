import { ArrowRight, Phone, MessageCircleMore, MapPin, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ImageWithFallback from '../components/common/ImageWithFallback';
import branches from '../data/branches';

const BranchDetails = () => {
  const { branchId } = useParams();
  const branch = branches.find((item) => item.id === branchId);

  if (!branch) {
    return (
      <section className="section-shell page-shell">
        <div className="empty-state card">
          <h2>Branch not found</h2>
          <p>Demo content — replace with a professional branch error state.</p>
          <Link to="/branches" className="btn btn-primary">Back to branches</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell page-shell branch-details">
      <div className="branch-detail-header card">
        <div className="branch-detail-copy">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/branches">Branches</Link>
            <span>/</span>
            <span>{branch.name}</span>
          </div>
          <h1>{branch.name}</h1>
          <p>{branch.city} • {branch.area}</p>
        </div>
        <ImageWithFallback src={branch.image} alt={branch.name} aspectRatio="64%" />
      </div>

      <div className="branch-detail-grid">
        <div className="branch-info-block card">
          <h3>Branch Information</h3>
          <ul className="detail-list">
            <li><MapPin size={16} /> {branch.address}</li>
            <li><Phone size={16} /> {branch.phone}</li>
            <li><MessageCircleMore size={16} /> {branch.whatsapp}</li>
            <li><Clock size={16} /> {branch.hours}</li>
          </ul>
        </div>
        <div className="branch-info-block card">
          <h3>Available Products</h3>
          <ul className="tag-list">
            {branch.products.map((product) => <li key={product}>{product}</li>)}
          </ul>
        </div>
      </div>

      <div className="branch-map-wrap card">
        <svg viewBox="0 0 500 360" className="branch-map" aria-label="Map style layout">
          <path d="M60 140 L180 80 L300 100 L420 70 L440 180 L350 245 L230 220 L120 260 Z" fill="rgba(11,31,58,0.06)" stroke="rgba(11,31,58,0.2)" strokeWidth="1.5" />
          <path d="M140 90 L200 150 L260 110 L315 180 L390 170" fill="none" stroke="rgba(11,31,58,0.18)" strokeWidth="2" strokeDasharray="5 6" />
          <circle cx="180" cy="140" r="12" fill="#E31E24" opacity="0.9" />
        </svg>
      </div>

      <div className="cta-panel card">
        <h3>Need material support from this branch?</h3>
        <Link to="/enquiry" className="btn btn-primary">
          Request a Quote <ArrowRight size={16} className="icon-arrow" />
        </Link>
      </div>
    </section>
  );
};

export default BranchDetails;
