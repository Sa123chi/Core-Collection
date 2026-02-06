import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <section className="section auth">
      <h2>Sign Up</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button className="btn primary">Register</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
} 