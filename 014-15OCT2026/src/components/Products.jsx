import { Link } from "react-router";

const products = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Mobile" },
  { id: 103, name: "Headphones" }
];

function Products() {
  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;