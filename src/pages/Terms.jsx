import { Link } from 'react-router-dom';

const Terms = () => (
  <section className="section-shell page-shell legal-page">
    <div className="card legal-card">
      <p className="section-index">LEGAL</p>
      <h1>Terms & Conditions</h1>
      <p>
        This page is a placeholder for the official terms and conditions governing enquiries, quotations, order
        discussions, and supply arrangements with Trichy Steel.
      </p>
      <p>
        Replace the content with the final business terms covering pricing references, lead times, material
authority, dispatch coordination, and customer responsibilities before publishing the website.
      </p>
      <p>
        These terms should reflect the actual commercial processes and legal obligations of the business before
        the website goes live.
      </p>
      <Link to="/" className="btn btn-primary">
        Return home
      </Link>
    </div>
  </section>
);

export default Terms;
