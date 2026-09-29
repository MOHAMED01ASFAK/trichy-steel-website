import { Link } from 'react-router-dom';

const PrivacyPolicy = () => (
  <section className="section-shell page-shell legal-page">
    <div className="card legal-card">
      <p className="section-index">LEGAL</p>
      <h1>Privacy Policy</h1>
      <p>
        This demo privacy page is a placeholder for the company’s official policy. Replace this text with the
        verified privacy notice for customer data, enquiry records, and contact communications.
      </p>
      <p>
        Trichy Steel may collect contact information, enquiry details, and business requirements to respond to
        customer requests and support ongoing supply discussions. Information is handled responsibly and retained
        only as needed for service, compliance, and business operations.
      </p>
      <p>
        If you are preparing production content, update this page with the final legal wording, consent details,
        and data retention policy required by your business.
      </p>
      <Link to="/" className="btn btn-primary">
        Return home
      </Link>
    </div>
  </section>
);

export default PrivacyPolicy;
