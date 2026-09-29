import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import branches from '../data/branches';

const Branches = () => {
  const [query, setQuery] = useState('');

  const filteredBranches = useMemo(() => {
    return branches.filter((branch) =>
      branch.name.toLowerCase().includes(query.toLowerCase()) || branch.city.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <>
      <PageHero eyebrow="Branches" title="OUR BRANCH NETWORK" subtitle="Demo copy — replace with verified network coverage and branch details." />

      <section className="section-shell page-shell">
        <div className="toolbar card">
          <label className="search-field">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search city or branch" aria-label="Search branches" />
          </label>
        </div>

        <div className="branches-layout">
          <div className="branch-directory">
            {filteredBranches.length > 0 ? (
              filteredBranches.map((branch) => (
                <article key={branch.id} className="branch-card card">
                  <div>
                    <p className="small-label">{branch.city}</p>
                    <h3>{branch.name}</h3>
                    <p>{branch.address}</p>
                  </div>
                  <div className="branch-meta-row">
                    <span>{branch.hours}</span>
                    <Link to={`/branches/${branch.id}`} className="card-link">
                      View Details <ArrowRight size={16} className="icon-arrow" />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state card">
                <h3>No branch matches your search.</h3>
              </div>
            )}
          </div>

          <div className="branch-map-wrap card">
            <svg viewBox="0 0 500 360" className="branch-map" aria-label="Branch coverage map">
              <path d="M60 140 L180 80 L300 100 L420 70 L440 180 L350 245 L230 220 L120 260 Z" fill="rgba(11,31,58,0.06)" stroke="rgba(11,31,58,0.2)" strokeWidth="1.5" />
              <path d="M140 90 L200 150 L260 110 L315 180 L390 170" fill="none" stroke="rgba(11,31,58,0.18)" strokeWidth="2" strokeDasharray="5 6" />
              <circle cx="180" cy="140" r="12" fill="#E31E24" opacity="0.9" />
              <circle cx="310" cy="190" r="12" fill="#E31E24" opacity="0.9" />
              <circle cx="395" cy="122" r="12" fill="#E31E24" opacity="0.9" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branches;
