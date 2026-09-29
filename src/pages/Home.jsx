import { ArrowRight, Building2, Factory, MapPinned, MessageSquareMore, ShieldCheck, Warehouse, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Reveal from '../components/common/Reveal';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { images } from '../data/images';
import products from '../data/products';
import branches from '../data/branches';
import projects from '../data/projects';
import galleryItems from '../data/gallery';

const quickActions = [
  { icon: Building2, title: 'Browse Products', href: '/products' },
  { icon: MapPinned, title: 'Find a Branch', href: '/branches' },
  { icon: MessageSquareMore, title: 'Request a Quote', href: '/enquiry' },
];

const credibilityStats = [
  { label: 'Branches', value: '05', note: 'Demo value — replace with verified company information.' },
  { label: 'Years Experience', value: '15+', note: 'Demo value — replace with verified company information.' },
  { label: 'Customers Served', value: '1200+', note: 'Demo value — replace with verified company information.' },
];

const homeProducts = products.slice(0, 4);
const branchPreview = branches.slice(0, 3);
const projectPreview = projects.slice(0, 3);
const galleryPreview = galleryItems.slice(0, 6);

const whyUs = [
  { num: '01', icon: ShieldCheck, title: 'Quality Materials', text: 'Structured sourcing for dependable project delivery.' },
  { num: '02', icon: Warehouse, title: 'Reliable Supply', text: 'Consistent availability across growing demand.' },
  { num: '03', icon: MapPinned, title: 'Multiple Locations', text: 'Regional support and faster local access.' },
  { num: '04', icon: Phone, title: 'Professional Service', text: 'Responsive support from enquiry to dispatch.' },
  { num: '05', icon: Factory, title: 'Customer Support', text: 'Clear coordination for material planning.' },
  { num: '06', icon: Star, title: 'Construction Solutions', text: 'Products and service support for varied site needs.' },
];

const Home = () => {
  return (
    <>
      <section className="hero-section blueprint">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <Reveal>
              <span className="eyebrow">Forged Precision</span>
            </Reveal>
            <Reveal delay={80}>
              <h1>
                BUILDING <span className="highlight-text">STRONGER.</span>
                <span className="line-break">MOVING BUSINESS FORWARD.</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p>
                Demo content — replace with verified service overview for steel, construction materials, and supply support.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="hero-actions">
                <Button as={Link} to="/products" className="hero-btn">
                  Explore Products <ArrowRight size={16} className="icon-arrow" />
                </Button>
                <Button as={Link} to="/enquiry" variant="ghost" className="hero-btn">
                  Get a Quote
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-visual-wrap" delay={120}>
            <div className="hero-visual corner-bracket">
              <ImageWithFallback src={images.hero.main} alt={images.hero.alt} aspectRatio="74%" priority />
              <div className="floating-badge">Multiple Branches</div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-shell quick-actions-wrap">
        <div className="quick-actions card">
          {quickActions.map(({ icon: Icon, title, href }) => (
            <Link key={title} to={href} className="quick-action-link">
              <span className="quick-action-icon"><Icon size={20} /></span>
              <span>
                <strong>{title}</strong>
              </span>
              <ArrowRight size={16} className="icon-arrow" />
            </Link>
          ))}
        </div>
      </div>

      <section className="section-shell credibility-section">
        <div className="credibility-strip card">
          {credibilityStats.map((item) => (
            <div key={item.label} className="credibility-item">
              <strong className="mono">{item.value}</strong>
              <span>{item.label}</span>
              <small>{item.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell home-section about-preview">
        <Reveal>
          <div className="about-media">
            <div className="about-media-stack">
              <div className="about-image top"> 
                <ImageWithFallback src={images.products.tmt} alt="Steel reinforcement and material storage" aspectRatio="72%" />
              </div>
              <div className="about-image bottom corner-bracket">
                <ImageWithFallback src={images.projects.commercial} alt="Construction site and materials" aspectRatio="62%" />
              </div>
            </div>
            <div className="floating-tag">Demo content</div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="about-copy">
            <div className="section-index">01 / ABOUT</div>
            <h2>A STRONG FOUNDATION BUILT ON TRUST</h2>
            <p>
              Demo content — replace with verified company story, mission, and service values that explain why customers choose Trichy Steel for dependable materials and support.
            </p>
            <div className="about-actions">
              <Link to="/about" className="inline-link">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell home-section">
        <div className="section-head-wrap">
          <div className="section-index">02 / PRODUCTS</div>
        </div>
        <div className="products-layout">
          {homeProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 80} className={`product-card ${index === 0 ? 'featured' : ''}`}>
              <div className="product-card-media">
                <ImageWithFallback src={product.image} alt={product.name} aspectRatio={index === 0 ? '72%' : '68%'} />
                <span className="product-pill">{product.category}</span>
              </div>
              <div className="product-card-body">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <Link to={`/products/${product.id}`} className="card-link">
                  View product <ArrowRight size={16} className="icon-arrow" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="product-marquee-section">
        <div className="marquee-track" aria-label="Steel product categories">
          {['TMT BARS', 'STEEL PIPES', 'STEEL SHEETS', 'ANGLES', 'CHANNELS', 'BEAMS', 'TMT BARS', 'STEEL PIPES', 'STEEL SHEETS', 'ANGLES', 'CHANNELS', 'BEAMS'].map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">{item}</span>
          ))}
        </div>
      </section>

      <section className="home-section dark-section">
        <div className="section-shell">
          <div className="section-head-wrap section-head-light">
            <div className="section-index">03 / WHY US</div>
          </div>
          <div className="why-grid">
            {whyUs.map((item) => (
              <Reveal key={item.title} className="why-card">
                <div className="why-card-top">
                  <span className="why-number">{item.num}</span>
                  <span className="why-icon"><item.icon size={18} /></span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell home-section branches-preview">
        <div className="section-head-wrap">
          <div className="section-index">04 / BRANCHES</div>
        </div>
        <div className="branches-showcase">
          <div className="branch-list">
            {branchPreview.map((branch) => (
              <Reveal key={branch.id} className="branch-mini-card card">
                <div>
                  <h3>{branch.name}</h3>
                  <p>{branch.city}</p>
                </div>
                <Link to={`/branches/${branch.id}`} className="card-link">
                  View Details <ArrowRight size={16} className="icon-arrow" />
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="branch-map-wrap card">
            <svg viewBox="0 0 500 360" className="branch-map" aria-label="Stylized branch map">
              <path d="M60 140 L180 80 L300 100 L420 70 L440 180 L350 245 L230 220 L120 260 Z" fill="rgba(11,31,58,0.06)" stroke="rgba(11,31,58,0.2)" strokeWidth="1.5" />
              <path d="M140 90 L200 150 L260 110 L315 180 L390 170" fill="none" stroke="rgba(11,31,58,0.18)" strokeWidth="2" strokeDasharray="5 6" />
              <circle cx="180" cy="140" r="12" fill="#E31E24" opacity="0.9" />
              <circle cx="310" cy="190" r="12" fill="#E31E24" opacity="0.9" />
              <circle cx="395" cy="122" r="12" fill="#E31E24" opacity="0.9" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section-shell home-section projects-preview">
        <div className="section-head-wrap">
          <div className="section-index">05 / PROJECTS</div>
        </div>
        <div className="project-grid">
          {projectPreview.map((project) => (
            <Reveal key={project.id} className="project-card">
              <div className="project-image-wrap">
                <ImageWithFallback src={project.image} alt={project.title} aspectRatio="68%" />
                <span className="project-tag">{project.category}</span>
                <div className="project-overlay">
                  <span>{project.location}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell home-section gallery-preview-section">
        <div className="section-head-wrap">
          <div className="section-index">06 / GALLERY</div>
        </div>
        <div className="gallery-preview-grid">
          {galleryPreview.map((item, index) => (
            <Reveal key={`${item.id}-${index}`} className={`gallery-tile tile-${index % 4}`}>
              <ImageWithFallback src={item.image} alt={item.title} aspectRatio={index % 3 === 0 ? '72%' : '100%'} />
            </Reveal>
          ))}
        </div>
        <div className="gallery-cta-row">
          <Link to="/gallery" className="btn btn-primary">
            View Gallery
          </Link>
        </div>
      </section>

      <section className="final-cta blueprint">
        <div className="section-shell final-cta-inner">
          <Reveal>
            <h2>READY TO BUILD SOMETHING STRONGER?</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Demo copy — replace with a verified call to action tailored to the company’s service offering and branch coverage.</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="final-cta-actions">
              <Button as={Link} to="/enquiry">Get a Quote</Button>
              <Button as={Link} to="/contact" variant="ghost">Contact Us</Button>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="cta-phone-line">Phone: +91 99999 99999 • WhatsApp: +91 99999 99999</div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
