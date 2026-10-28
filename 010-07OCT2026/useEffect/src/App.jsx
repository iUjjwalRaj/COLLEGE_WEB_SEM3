import { useEffect, useState, useMemo } from 'react';
import ProductList from './ProductsList.jsx';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Theme Management (Dark / Light Mode)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aura-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aura-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    showToast(nextTheme === 'light' ? 'Switched to Light Mode ☀️' : 'Switched to Dark Mode 🌙');
  };

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products?limit=100');
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  // Show Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Toggle Favorite
  const handleToggleFavorite = (id) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      const updated = isFav ? prev.filter((item) => item !== id) : [...prev, id];
      showToast(isFav ? 'Removed from favorites' : 'Added to favorites ❤️');
      return updated;
    });
  };

  // Add to Cart
  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    showToast(`Added "${product.title}" to cart ⚡`);
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const list = new Set(products.map((p) => p.category).filter(Boolean));
    return ['all', ...Array.from(list)];
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesSearch = 
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        if (sortBy === 'discount') return (b.discountPercentage || 0) - (a.discountPercentage || 0);
        return 0; // featured / default
      });
  }, [products, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="app-container">
      {/* Dynamic Ambient Blur Orbs */}
      <div className="ambient-glow top-left"></div>
      <div className="ambient-glow top-right"></div>
      <div className="ambient-glow bottom-center"></div>

      {/* Navigation Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="brand-logo">
            <div className="logo-badge">⚡</div>
            <div>
              <span className="brand-text">AURA</span>
              <span className="brand-sub">Curated Studio</span>
            </div>
          </a>

          <div className="header-actions">
            {/* Theme Toggle Button */}
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle color theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button 
              className="action-chip" 
              onClick={() => showToast(`You have ${favorites.length} saved favorites`)}
              title="View favorites"
            >
              <span>❤️ Saved</span>
              <span className="count-badge">{favorites.length}</span>
            </button>
            <button 
              className="action-chip" 
              onClick={() => showToast(`Cart contains ${cart.length} items ($${cart.reduce((s, i) => s + i.price, 0).toFixed(2)})`)}
              title="View cart"
            >
              <span>🛒 Cart</span>
              <span className="count-badge">{cart.length}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pill">
          <span className="dot"></span>
          <span>Next-Gen Collection 2026</span>
        </div>

        {/* Dynamic Animated Gradient Heading */}
        <h1 className="hero-title">
          <span className="dynamic-moving-gradient">
            Explore Hyper-Curated <br />
            Modern Artifacts & Tech.
          </span>
        </h1>

        <p className="hero-subtitle">
          Discover a seamless catalog of premium gear, high-fashion cosmetics, electronics, and lifestyle pieces crafted for aesthetic perfection.
        </p>

        {/* Search & Filter Toolbar */}
        <div className="toolbar-container">
          <div className="search-row">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search by title, brand, category, or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="clear-search-btn" 
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="filter-controls">
              <select 
                className="custom-select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">✨ Featured</option>
                <option value="price-low">💵 Price: Low to High</option>
                <option value="price-high">💎 Price: High to Low</option>
                <option value="rating">⭐ Highest Rated</option>
                <option value="discount">🔥 Biggest Discount</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="category-pills-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? '✨ All Products' : cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="products-main">
        <div className="results-meta">
          <span>
            Showing <strong className="results-count">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
            {selectedCategory !== 'all' && ` in "${selectedCategory.replace('-', ' ')}"`}
          </span>
          {searchQuery && (
            <button 
              className="action-chip" 
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            >
              Reset Filters ↺
            </button>
          )}
        </div>

        {loading ? (
          <div className="products-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-box" style={{ height: '220px' }}></div>
                <div className="skeleton-box" style={{ height: '24px', width: '60%' }}></div>
                <div className="skeleton-box" style={{ height: '18px', width: '90%' }}></div>
                <div className="skeleton-box" style={{ height: '18px', width: '75%' }}></div>
                <div className="skeleton-box" style={{ height: '36px', marginTop: 'auto' }}></div>
              </div>
            ))}
          </div>
        ) : (
          <ProductList
            products={filteredProducts}
            onSelectProduct={setSelectedProduct}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
            onAddToCart={handleAddToCart}
          />
        )}
      </main>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
            
            <div className="modal-body-grid">
              <div className="modal-gallery">
                <img 
                  src={selectedProduct.thumbnail || (selectedProduct.images && selectedProduct.images[0])} 
                  alt={selectedProduct.title} 
                  className="modal-main-image"
                />
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <div className="modal-thumbnails">
                    {selectedProduct.images.slice(0, 4).map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt="" 
                        className="modal-thumb"
                        onClick={(e) => {
                          const mainImg = e.currentTarget.closest('.modal-gallery').querySelector('.modal-main-image');
                          if (mainImg) mainImg.src = img;
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-info">
                <span className="modal-brand">{selectedProduct.brand || 'Exclusive Selection'}</span>
                <h2 className="modal-title">{selectedProduct.title}</h2>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="rating-pill">★ {selectedProduct.rating}</span>
                  <span className="category-tag">{selectedProduct.category}</span>
                  {selectedProduct.discountPercentage && (
                    <span className="discount-badge">-{Math.round(selectedProduct.discountPercentage)}% OFF</span>
                  )}
                </div>

                <p className="modal-desc">{selectedProduct.description}</p>

                <div className="modal-detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">Status</span>
                    <span className="detail-value" style={{ color: 'var(--accent-emerald)' }}>
                      {selectedProduct.availabilityStatus || 'In Stock'}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">SKU</span>
                    <span className="detail-value">{selectedProduct.sku || 'N/A'}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Warranty</span>
                    <span className="detail-value">{selectedProduct.warrantyInformation || 'Standard Warranty'}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Shipping</span>
                    <span className="detail-value">{selectedProduct.shippingInformation || 'Standard Shipping'}</span>
                  </div>
                </div>

                <div className="card-footer" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <div className="price-box">
                    <span className="current-price" style={{ fontSize: '1.8rem' }}>
                      ${Number(selectedProduct.price).toFixed(2)}
                    </span>
                    {selectedProduct.discountPercentage && (
                      <span className="original-price">
                        ${(selectedProduct.price / (1 - selectedProduct.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button 
                    className="add-cart-btn"
                    style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    <span>Add to Cart</span>
                    <span>⚡</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Toast */}
      {toastMessage && (
        <div className="toast-notification">
          <span className="toast-icon">✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="brand-logo" style={{ fontSize: '1.1rem' }}>
            <div className="logo-badge" style={{ width: '28px', height: '28px', fontSize: '0.9rem' }}>⚡</div>
            <span className="brand-text">AURA SYSTEM</span>
          </div>
          <p className="footer-credit">Engineered with modern React & reactive CSS aesthetics.</p>
          <span className="footer-tag">CONNECTED TO DUMMYJSON REST API // LIVE FEED</span>
        </div>
      </footer>
    </div>
  );
}

export default App;