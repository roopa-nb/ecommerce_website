export default function ProductModal({ open, setOpen, form, setForm, categories, onSave }) {

  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>{form.id ? "Edit Product" : "Add Product"}</h2>

        <input placeholder="Product name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <input placeholder="Image URL"
          value={form.imageUrl}
          onChange={e => setForm({ ...form, imageUrl: e.target.value })} />

        <textarea placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })} />

        <select
          value={form.categoryId}
          onChange={e => setForm({ ...form, categoryId: Number(e.target.value) })}>
          <option value="">Select category</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <label>
          <input type="checkbox"
            checked={form.active}
            onChange={e => setForm({ ...form, active: e.target.checked })} />
          Active
        </label>

        <label>
          <input type="checkbox"
            checked={form.featured}
            onChange={e => setForm({ ...form, featured: e.target.checked })} />
          Featured
        </label>

        <input type="number"
          placeholder="Display order"
          value={form.displayOrder}
          onChange={e => setForm({ ...form, displayOrder: Number(e.target.value) })}
 />

        <br /><br />
        <button onClick={onSave}>Save</button>
        <button onClick={() => setOpen(false)}>Cancel</button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed", inset: 0, background: "rgba(0,0,0,.4)",
  display: "flex", justifyContent: "center", alignItems: "center"
};

const modal = {
  background: "#fff", padding: 25, borderRadius: 12, width: 420,
  display: "flex", flexDirection: "column", gap: 10
};
