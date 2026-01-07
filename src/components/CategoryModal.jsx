export default function CategoryModal({ open, onClose, onSave, form, setForm }) {

  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>{form.id ? "Edit Category" : "Add Category"}</h2>

        <input
          placeholder="Category name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={input}
        />

        <input
          placeholder="Slug (mobiles, laptops...)"
          value={form.slug}
          onChange={e => setForm({ ...form, slug: e.target.value })}
          style={input}
        />

        <input
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={e => setForm({ ...form, imageUrl: e.target.value })}
          style={input}
        />

        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <button onClick={onSave} style={saveBtn}>Save</button>
          <button onClick={onClose} style={cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

/* styles */

const overlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const modal = {
  background: "#fff",
  padding: 25,
  borderRadius: 14,
  width: 350
};

const input = {
  width: "100%",
  padding: 10,
  marginTop: 12,
  borderRadius: 8,
  border: "1px solid #ddd"
};

const saveBtn = {
  flex: 1,
  padding: 10,
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};

const cancelBtn = {
  flex: 1,
  padding: 10,
  background: "#e5e7eb",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};
