import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { images } from '../data/images';

const storyPoints = [
  {
    title: 'Company Story',
    text: 'Demo content — replace with the actual company story, business focus, and how the organization supports customers across key markets.',
  },
  {
    title: 'Mission',
    text: 'Demo content — replace with the real mission statement and service principles that guide material supply and project support.',
  },
  {
    title: 'Vision',
    text: 'Demo content — replace with the long-term business vision for growth, quality, and customer confidence.',
  },
  {
    title: 'Values',
    text: 'Demo content — replace with the real values that drive trust, safety, consistency, and partnership across the business.',
  },
];

const About = () => (
  <>
    <PageHero eyebrow="About" title="ABOUT TRICHY STEEL" subtitle="Demo copy — replace with verified company positioning and business story." />

    <section className="section-shell page-shell">
      <div className="story-layout">
        <Reveal className="story-media card">
          <ImageWithFallback src={images.hero.main} alt="Industrial workshop and materials" aspectRatio="76%" />
        </Reveal>
        <Reveal delay={120} className="story-copy">
          <SectionHeading eyebrow="01 / ABOUT" title="A STRONG FOUNDATION BUILT ON TRUST" />
          <p>
            Demo content — replace with the real business narrative, market focus, and why customers choose Trichy Steel for dependable supply and project support.
          </p>
        </Reveal>
      </div>

      <div className="story-grid">
        {storyPoints.map((item) => (
          <Reveal key={item.title} className="info-card card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="info-banner card">
        <div>
          <div className="section-index">BUSINESS STRENGTH</div>
          <h3>Regional reach with dependable service and supply coordination.</h3>
        </div>
        <Link to="/branches" className="inline-link">
          Explore branches <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export default About;
