import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Product({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  return (
    <section className="section product-page">
      <img src={product.image} alt={product.name} />

      <div>
        <h1>{product.name}</h1>
        <p>{product.desc}</p>
        <h2>${product.price}</h2>

        <button
          className="btn primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
