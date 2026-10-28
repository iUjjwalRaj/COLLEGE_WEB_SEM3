
function ProductList({ products, onSelectProduct, onToggleFavorite, favorites, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🔍</span>
        <h3 className="empty-title">No matching products found</h3>
        <p className="empty-subtitle">Try adjusting your search query or filter criteria to discover our catalog.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((element) => {
        const isFav = favorites && favorites.includes(element.id);
        const originalPrice = element.discountPercentage 
          ? (element.price / (1 - element.discountPercentage / 100)).toFixed(2)
          : null;

        return (
          <article 
            key={element.id} 
            className="product-card"
            onClick={() => onSelectProduct && onSelectProduct(element)}
          >
            {/* Visual Media & Floating Badges */}
            <div className="card-media">
              <div className="card-badges-top">
                <div className="badge-group">
                  {element.discountPercentage && (
                    <span className="discount-badge">
                      -{Math.round(element.discountPercentage)}% OFF
                    </span>
                  )}
                  {element.brand && (
                    <span className="brand-badge">{element.brand}</span>
                  )}
                </div>
                
                <button 
                  className={`favorite-btn ${isFav ? 'active' : ''}`}
                  title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite && onToggleFavorite(element.id);
                  }}
                  aria-label="Toggle favorite"
                >
                  {isFav ? '❤️' : '🤍'}
                </button>
              </div>

              <img 
                src={element.thumbnail || (element.images && element.images[0])} 
                alt={element.title} 
                className="product-thumb"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60';
                }}
              />
            </div>

            {/* Content Details */}
            <div className="card-content">
              <div className="card-category-rating">
                <span className="category-tag">{element.category}</span>
                {element.rating && (
                  <div className="rating-pill">
                    <span>★</span>
                    <span>{Number(element.rating).toFixed(1)}</span>
                  </div>
                )}
              </div>

              <h2 className="product-title" title={element.title}>
                {element.title}
              </h2>

              <p className="product-description" title={element.description}>
                {element.description}
              </p>

              <div className="specs-row">
                <span className="spec-chip">
                  <span className="stock-dot"></span>
                  {element.availabilityStatus || `${element.stock || 20} in stock`}
                </span>
                {element.warrantyInformation && (
                  <span className="spec-chip">🛡️ {element.warrantyInformation}</span>
                )}
              </div>

              {/* Price & Action Bar */}
              <div className="card-footer">
                <div className="price-box">
                  <span className="current-price">${Number(element.price).toFixed(2)}</span>
                  {originalPrice && (
                    <span className="original-price">${originalPrice}</span>
                  )}
                </div>

                <button 
                  className="add-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart && onAddToCart(element);
                  }}
                >
                  <span>+ Add</span>
                  <span>⚡</span>
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductList;