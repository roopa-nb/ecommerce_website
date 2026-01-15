export default function CategoryModal({ open, onClose, onSave, form, setForm }) {
  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={modal}>

        {/* Header */}
        <div style={header}>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>
            {form.id ? "Edit Category" : "Add Category"}
          </h2>
          <span onClick={onClose} style={closeBtn}>✕</span>
        </div>

        {/* Body */}
        <div style={body}>

          {/* Name */}
          <div style={field}>
            <label style={label}>Category Name *</label>
            <input
              style={input}
              placeholder="Eg: Electronics, Fashion..."
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Description */}
          <div style={field}>
            <label style={label}>Description (optional)</label>
            <textarea
              style={textarea}
              placeholder="Short category description..."
              value={form.description || ""}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />
          </div>

          {/* Row */}
          <div style={row}>
            <div style={{ flex: 1 }}>
              <label style={label}>Display Order</label>
              <input
                type="number"
                style={input}
                value={form.displayOrder}
                onChange={e => setForm({ ...form, displayOrder: Number(e.target.value) })}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={label}>Image URL</label>
              <input
                style={input}
                placeholder="https://image..."
                value={form.imageUrl || ""}
                onChange={e => setForm({ ...form, imageUrl: e.target.value })}
              />
            </div>
          </div>

          {/* Active */}
          <div style={toggleRow}>
            <input
              type="checkbox"
              checked={form.active}
              onChange={e => setForm({ ...form, active: e.target.checked })}
            />
            <span style={{ marginLeft: 8 }}>
              Active (show on user website)
            </span>
          </div>

        </div>

        {/* Footer */}
        <div style={footer}>
          <button onClick={onClose} style={cancelBtn}>Cancel</button>
          <button onClick={onSave} style={saveBtn}>
            {form.id ? "Save Changes" : "Add Category"}
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
};

const modal = {
  background: "#fff",
  borderRadius: 22,
  width: "100%",
  maxWidth: 520,
  boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
  animation: "fadeIn .25s ease"
};

const header = {
  padding: "18px 22px",
  borderBottom: "1px solid #f1f5f9",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const closeBtn = {
  cursor: "pointer",
  fontSize: 20,
  color: "#64748b"
};

const body = {
  padding: 22
};

const footer = {
  padding: 18,
  display: "flex",
  justifyContent: "flex-end",
  gap: 12,
  borderTop: "1px solid #f1f5f9"
};

const field = {
  display: "flex",
  flexDirection: "column",
  marginBottom: 14
};

const row = {
  display: "flex",
  gap: 12,
  marginBottom: 14
};

const toggleRow = {
  display: "flex",
  alignItems: "center",
  marginTop: 10
};

const label = {
  fontSize: 13,
  fontWeight: 600,
  color: "#475569",
  marginBottom: 6
};

const input = {
  padding: "11px 12px",
  borderRadius: 10,
  border: "1px solid #e2e8f0",
  fontSize: 14,
  outline: "none"
};

const textarea = {
  ...input,
  minHeight: 80,
  resize: "none"
};

const cancelBtn = {
  padding: "10px 18px",
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  background: "#f8fafc",
  cursor: "pointer",
  fontWeight: 600
};

const saveBtn = {
  padding: "10px 22px",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  color: "#fff",
  background: "linear-gradient(135deg,#2563eb,#ec4899)",
  boxShadow: "0 10px 22px rgba(37,99,235,.35)"
};
