import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { projectCategories, default as projects } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <PageHero eyebrow="Projects" title="PROJECTS & EXECUTION" subtitle="Demo content — replace with verified project categories and work highlights." />

      <section className="section-shell page-shell">
        <div className="filter-pills project-filters" aria-label="Project categories">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={category === activeFilter ? 'filter-pill active' : 'filter-pill'}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card project-card-large">
              <div className="project-image-wrap">
                <ImageWithFallback src={project.image} alt={project.title} aspectRatio="68%" />
                <span className="project-tag">{project.category}</span>
                <div className="project-overlay">
                  <span>{project.location}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
                <Link to="/contact" className="card-link">
                  Discuss needs <ArrowRight size={16} className="icon-arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
