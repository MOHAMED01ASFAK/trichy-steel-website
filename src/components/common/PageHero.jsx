import { ArrowRight } from 'lucide-react';

const PageHero = ({ eyebrow, title, subtitle, actionLabel, actionTo }) => {
  return (
    <section className="page-hero blueprint">
      <div className="section-shell page-hero-inner">
        <div className="page-hero-copy">
          {eyebrow ? <span className="section-index">{eyebrow}</span> : null}
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
          {actionLabel ? (
            <a href={actionTo || '/enquiry'} className="inline-link">
              {actionLabel} <ArrowRight size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
