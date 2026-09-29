import { ArrowRight, MessageCircleMore, Phone, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ImageWithFallback from '../components/common/ImageWithFallback';
import products from '../data/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <section className="section-shell page-shell">
        <div className="empty-state card">
          <h2>Product not found</h2>
          <p>Demo content — replace with a graceful product error state.</p>
          <Link to="/products" className="btn btn-primary">Return to products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell page-shell product-details-layout">
      <div className="product-detail-media card">
        <ImageWithFallback src={product.image} alt={product.name} aspectRatio="72%" />
      </div>

      <div className="product-detail-copy">
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <h1>{product.name}</h1>
        <p className="lead-copy">{product.description}</p>

        <div className="detail-actions">
          <Link to="/enquiry" className="btn btn-primary">Request Quote</Link>
          <a href="tel:+919999999999" className="btn btn-secondary">Call</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn btn-secondary">WhatsApp</a>
        </div>

        <div className="spec-block">
          <h3>Features</h3>
          <ul>
            {product.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>

        <div className="spec-block">
          <h3>Applications</h3>
          <ul>
            {product.applications.map((app) => <li key={app}>{app}</li>)}
          </ul>
        </div>

        <div className="spec-block">
          <h3>Specifications</h3>
          <table className="spec-table">
            <tbody>
              <tr><th>Category</th><td>{product.category}</td></tr>
              <tr><th>Available Sizes</th><td>{product.sizes.join(', ')}</td></tr>
              <tr><th>Demo Note</th><td>Replace with verified datasheet values.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <aside className="sticky-quote card">
        <h3>Request Quote</h3>
        <p>Demo content — replace with verified response workflow and contact notes.</p>
        <Link to="/enquiry" className="btn btn-primary full-width">Request Quote</Link>
        <div className="sticky-callouts">
          <a href="tel:+919999999999"><Phone size={16} /> Call</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"><MessageCircleMore size={16} /> WhatsApp</a>
          <Link to="/enquiry"><FileText size={16} /> Enquiry</Link>
        </div>
      </aside>
    </section>
  );
};

export default ProductDetails;
