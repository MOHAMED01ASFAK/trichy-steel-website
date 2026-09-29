import { useMemo, useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { categories, default as products } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) || product.shortDescription.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  return (
    <>
      <PageHero eyebrow="Products" title="STEEL & MATERIALS" subtitle="Demo content — replace with verified product categories and supply lines." />

      <section className="section-shell page-shell">
        <div className="toolbar card">
          <label className="search-field">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" aria-label="Search products" />
          </label>
          <div className="filter-pills" aria-label="Product categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={category === selectedCategory ? 'filter-pill active' : 'filter-pill'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid-page">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article key={product.id} className="product-card-page card">
                <ImageWithFallback src={product.image} alt={product.name} aspectRatio="68%" />
                <div className="product-card-body">
                  <span className="product-pill">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <Link to={`/products/${product.id}`} className="card-link">
                    View details <ArrowRight size={16} className="icon-arrow" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state card">
              <h3>No products match your search.</h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
