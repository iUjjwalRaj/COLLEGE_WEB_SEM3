function ProductsList({ products }) {
  return (
    <main className="products-grid">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <strong className="product-price">${product.price}</strong>
        </article>
      ))}
    </main>
  );
}

export default ProductsList;
