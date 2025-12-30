import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div style={grid}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
  padding: "40px",
};

export default Products;
