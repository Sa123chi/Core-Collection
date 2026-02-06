import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="section auth">
      <h2>Login</h2>

      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button className="btn primary">Login</button>

      <p>
        New here? <Link to="/signup">Create account</Link>
      </p>
    </section>
  );
}
