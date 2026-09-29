import { useState } from 'react';
import PageHero from '../components/common/PageHero';

const initialState = {
  name: '',
  phone: '',
  email: '',
  branch: '',
  product: '',
  quantity: '',
  message: '',
};

const initialErrors = {};

const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Full name is required.';
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[0-9+\s()-]{8,}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.branch.trim()) errors.branch = 'Branch is required.';
  if (!values.product.trim()) errors.product = 'Product is required.';
  if (!values.quantity.trim()) errors.quantity = 'Quantity is required.';
  if (!values.message.trim()) errors.message = 'Please describe your requirement.';

  return errors;
};

const Enquiry = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSuccess(true);
    setErrors({});
    setForm(initialState);
  };

  return (
    <>
      <PageHero eyebrow="Enquiry" title="REQUEST A QUOTE" subtitle="Demo content — replace with verified enquiry process and service response notes." />

      <section className="section-shell page-shell">
        <div className="enquiry-wrap">
          <form className="enquiry-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div>
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
                {errors.name ? <div className="error-text">{errors.name}</div> : null}
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} />
                {errors.phone ? <div className="error-text">{errors.phone}</div> : null}
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
                {errors.email ? <div className="error-text">{errors.email}</div> : null}
              </div>

              <div>
                <label htmlFor="branch">Branch</label>
                <input id="branch" name="branch" type="text" value={form.branch} onChange={handleChange} aria-invalid={Boolean(errors.branch)} />
                {errors.branch ? <div className="error-text">{errors.branch}</div> : null}
              </div>

              <div>
                <label htmlFor="product">Product</label>
                <input id="product" name="product" type="text" value={form.product} onChange={handleChange} aria-invalid={Boolean(errors.product)} />
                {errors.product ? <div className="error-text">{errors.product}</div> : null}
              </div>

              <div>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" name="quantity" type="text" value={form.quantity} onChange={handleChange} aria-invalid={Boolean(errors.quantity)} />
                {errors.quantity ? <div className="error-text">{errors.quantity}</div> : null}
              </div>
            </div>

            <div className="full-width-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
              {errors.message ? <div className="error-text">{errors.message}</div> : null}
            </div>

            <button type="submit" className="btn btn-primary">Send Enquiry</button>
          </form>
        </div>
      </section>

      {success ? (
        <div className="success-modal-backdrop" role="dialog" aria-modal="true" aria-label="Enquiry success">
          <div className="success-modal card">
            <h3>Thank you for your enquiry.</h3>
            <p>Your request has been recorded for this demo.</p>
            <button type="button" className="btn btn-primary" onClick={() => setSuccess(false)}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Enquiry;
