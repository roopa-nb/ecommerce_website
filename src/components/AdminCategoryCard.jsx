export default function AdminCategoryCard({ cat, onDelete, onEdit }) {

  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      overflow: "hidden"
    }}>

      <div style={{ position: "relative" }}>
        <img
          src={cat.imageUrl}
          alt={cat.name}
          style={{ width: "100%", height: 180, objectFit: "cover" }}
        />

        <span style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "#22c55e",
          color: "#fff",
          padding: "4px 10px",
          borderRadius: 20,
          fontSize: 12
        }}>
          Active
        </span>
      </div>

      <div style={{ padding: 15 }}>
        <h3>{cat.name}</h3>
        <p style={{ color: "#555", fontSize: 14 }}>
          Slug: {cat.slug}
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
          <button style={editBtn} onClick={() => onEdit(cat)}>Edit</button>


          <button style={deleteBtn} onClick={() => onDelete(cat.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

const editBtn = {
  flex: 1,
  padding: 10,
  borderRadius: 10,
  border: "none",
  background: "#2563eb",
  color: "#fff",
  cursor: "pointer"
};

const deleteBtn = {
  flex: 1,
  padding: 10,
  borderRadius: 10,
  border: "none",
  background: "#dc2626",
  color: "#fff",
  cursor: "pointer"
};
