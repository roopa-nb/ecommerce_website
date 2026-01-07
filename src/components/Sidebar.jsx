import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: 220,
      minHeight: "100vh",
      background: "#111",
      color: "#fff",
      padding: 20
    }}>
      <h2>Admin</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <Link to="/" style={{ color: "#fff" }}>Dashboard</Link>
        <Link to="/categories" style={{ color: "#fff" }}>Categories</Link>
        <Link to="/products" style={{ color: "#fff" }}>Products</Link>
        <Link to="/banners" style={{ color: "#fff" }}>Banners</Link>
      </nav>
    </div>
  );
}
