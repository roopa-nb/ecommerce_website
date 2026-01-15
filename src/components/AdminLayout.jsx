import { NavLink } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div style={layout}>

      {/* ========== SIDEBAR ========== */}
      <aside style={sidebar}>

        {/* Logo */}
        <div style={logoBox}>
          <div style={logoCircle}>A2Z</div>
          <div>
            <h2 style={{ margin: 0, fontSize: 18 }}>A2Z Admin</h2>
            <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
              Control Panel
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav style={nav}>
          <SideLink to="/" label="Dashboard" icon="📊" color="#eff6ff" />
          <SideLink to="/categories" label="Categories" icon="🗂️" color="#fdf2f8" />
          <SideLink to="/products" label="Products" icon="📦" color="#f0fdf4" />
          <SideLink to="/banners" label="Banners" icon="🖼️" color="#fefce8" />
        </nav>

        {/* Bottom Admin Card */}
        <div style={bottomBox}>
          <div style={adminCard}>
            <div style={avatar}>A</div>
            <div>
              <p style={{ margin: 0, fontWeight: 600 }}>Admin</p>
              <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
                admin@a2z.com
              </p>
            </div>
          </div>
        </div>

      </aside>

      {/* ========== MAIN CONTENT ========== */}
      <main style={main}>
        {children}
      </main>

    </div>
  );
}

/* ================= LINK COMPONENT ================= */

function SideLink({ to, label, icon, color }) {
  return (
    <NavLink
      to={to}
      end
      style={({ isActive }) => ({
        ...link,
        background: isActive ? color : "transparent",
        color: isActive ? "#0f172a" : "#475569",
        boxShadow: isActive ? "0 10px 25px rgba(0,0,0,0.06)" : "none",
        transform: isActive ? "translateX(4px)" : "none"
      })}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      {label}
    </NavLink>
  );
}

/* ================= STYLES ================= */

const layout = {
  display: "flex",
  minHeight: "100vh",
  background: "#f8fafc"
};

const sidebar = {
  width: 270,
  background: "#ffffff",
  padding: "24px 20px",
  borderRight: "1px solid #f1f5f9",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "sticky",
  top: 0
};

const logoBox = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 30
};

const logoCircle = {
  width: 42,
  height: 42,
  borderRadius: 14,
  background: "linear-gradient(135deg,#2563eb,#ec4899)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800
};

const nav = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flex: 1
};

const link = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "12px 14px",
  borderRadius: 14,
  fontWeight: 600,
  textDecoration: "none",
  transition: "0.25s"
};

const main = {
  flex: 1,
  padding: 32
};

const bottomBox = {
  marginTop: 20
};

const adminCard = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: 12,
  borderRadius: 16,
  background: "#f8fafc"
};

const avatar = {
  width: 38,
  height: 38,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#22c55e,#16a34a)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700
};
