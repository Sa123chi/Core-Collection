import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Shop Smarter. Live Better.</h1>
        <p>Discover curated modern collections.</p>

        <Link to="/categories" className="btn hero-btn">
          Shop Collection
        </Link>
      </section>
    </>
  );
}
