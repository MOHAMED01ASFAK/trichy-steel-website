import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="section-shell page-shell">
    <div className="empty-state card not-found-box">
      <span className="not-found-tag">404</span>
      <h1>Page Not Found</h1>
      <p>The page you are looking for is unavailable or has moved.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </div>
  </section>
);

export default NotFound;
