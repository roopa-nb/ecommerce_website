export default function AdminCategoryCard({ cat, onDelete, onEdit }) {
  return (
    <div style={card}>
      <div style={{ position: "relative" }}>
        <img src={cat.imageUrl} alt={cat.name} style={image} />

        <span style={{
          ...badge,
          background: cat.active ? "#22c55e" : "#94a3b8"
        }}>
          {cat.active ? "Active" : "Inactive"}
        </span>
      </div>

      <div style={content}>
        <h3 style={{ marginBottom: 4 }}>{cat.name}</h3>
        <p style={{ fontSize: 13, color: "#64748b" }}>Slug: {cat.slug}</p>

        <div style={actions}>
          <button style={editBtn} onClick={() => onEdit(cat)}>Edit</button>
          <button style={deleteBtn} onClick={() => onDelete(cat.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "#fff",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  transition: "0.2s",
};

const image = {
  width: "100%",
  height: 180,
  objectFit: "cover"
};

const badge = {
  position: "absolute",
  top: 12,
  right: 12,
  color: "#fff",
  padding: "4px 12px",
  borderRadius: 20,
  fontSize: 12,
  fontWeight: 600
};

const content = {
  padding: 16
};

const actions = {
  display: "flex",
  gap: 10,
  marginTop: 15
};

const editBtn = {
  flex: 1,
  background: "#2563eb",
  border: "none",
  color: "#fff",
  padding: 10,
  borderRadius: 10,
  cursor: "pointer"
};

const deleteBtn = {
  flex: 1,
  background: "#fee2e2",
  border: "none",
  color: "#b91c1c",
  padding: 10,
  borderRadius: 10,
  cursor: "pointer"
};
