import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import { galleryCategories } from '../data/images';
import galleryItems from '../data/gallery';

const Gallery = () => {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filteredItems = useMemo(() => {
    if (category === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === category);
  }, [category]);

  const openItem = (index) => setSelected({ item: filteredItems[index], index });

  const closeLightbox = () => setSelected(null);

  const moveSelection = (direction) => {
    if (!selected) return;
    const nextIndex = (selected.index + direction + filteredItems.length) % filteredItems.length;
    setSelected({ item: filteredItems[nextIndex], index: nextIndex });
  };

  return (
    <>
      <PageHero eyebrow="Gallery" title="PROJECT GALLERY" subtitle="Demo content — replace with real Trichy Steel project, branch, and product visuals." />

      <section className="section-shell page-shell">
        <div className="filter-pills project-filters">
          {galleryCategories.map((item) => (
            <button
              key={item}
              type="button"
              className={item === category ? 'filter-pill active' : 'filter-pill'}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="gallery-masonry">
          {filteredItems.map((item, index) => (
            <button key={item.id} type="button" className="gallery-item" onClick={() => openItem(index)}>
              <img src={item.image} alt={item.title} loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      {selected ? (
        <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close image view">
              <X size={18} />
            </button>
            <button type="button" className="lightbox-nav left" onClick={() => moveSelection(-1)} aria-label="Previous image">
              <ArrowLeft size={18} />
            </button>
            <img src={selected.item.image} alt={selected.item.title} />
            <button type="button" className="lightbox-nav right" onClick={() => moveSelection(1)} aria-label="Next image">
              <ArrowRight size={18} />
            </button>
            <div className="lightbox-caption">
              <span>{selected.index + 1} / {filteredItems.length}</span>
              <strong>{selected.item.title}</strong>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Gallery;
