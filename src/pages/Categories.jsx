import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../services/api";
import AdminCategoryCard from "../components/AdminCategoryCard";
import CategoryModal from "../components/CategoryModal";

const publicApi = axios.create({
  baseURL: "http://localhost:8080/api"
});

export default function Categories() {

  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    id: null,
    name: "",
    description: "",
    displayOrder: 0,
    active: true,
    imageUrl: ""
  });

  // ✅ Load all categories for ADMIN (active + inactive)
  const load = () => {
    publicApi.get("/admin/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Load categories error:", err));
  };

  useEffect(() => {
    load();
  }, []);

  // ✅ Open empty modal
  const openAdd = () => {
    setForm({
      id: null,
      name: "",
      description: "",
      displayOrder: 0,
      active: true,
      imageUrl: ""
    });
    setOpen(true);
  };

  // ✅ Open edit modal
  const openEdit = (cat) => {
    setForm(cat);
    setOpen(true);
  };

  // ✅ Save category (create/update)
  const saveCategory = async () => {
    if (!form.name || !form.name.trim()) {
      alert("Category name required");
      return;
    }

    try {
      if (form.id) {
        await api.put(`/categories/${form.id}`, form);
      } else {
        await api.post("/categories", form);
      }

      setOpen(false);
      load();
    } catch (err) {
      console.error("Save category error:", err);
      alert("Error saving category");
    }
  };

  // ✅ Delete category
  const deleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;

    try {
      await api.delete(`/categories/${id}`);
      load();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  };

  const activeCount = categories.filter(c => c.active).length;
  const inactiveCount = categories.filter(c => !c.active).length;

  return (
    <div>

      {/* 🔷 Header */}
      <div style={header}>
        <div>
          <h1 style={title}>Categories</h1>
          <p style={subtitle}>Manage store categories</p>
        </div>

        <button onClick={openAdd} style={addBtn}>
          + Add Category
        </button>
      </div>

      {/* 🔷 Stats */}
      <div style={statsRow}>
        <StatCard label="Total Categories" value={categories.length} />
        <StatCard label="Active" value={activeCount} />
        <StatCard label="Inactive" value={inactiveCount} />
      </div>

      {/* 🔷 Cards */}
      <div style={grid}>
        {categories.map(cat => (
          <AdminCategoryCard
            key={cat.id}
            cat={cat}
            onDelete={deleteCategory}
            onEdit={openEdit}
          />
        ))}
      </div>

      {/* 🔷 Modal */}
      <CategoryModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={saveCategory}
        form={form}
        setForm={setForm}
      />

    </div>
  );
}

/* ---------------- STATS CARD ---------------- */

function StatCard({ label, value }) {
  return (
    <div style={statCard}>
      <p style={statLabel}>{label}</p>
      <h2 style={statValue}>{value}</h2>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 25
};

const title = { fontSize: 34, fontWeight: 700 };
const subtitle = { color: "#64748b", marginTop: 4 };

const addBtn = {
  background: "linear-gradient(135deg, #2563eb, #ec4899)",
  color: "#fff",
  border: "none",
  padding: "12px 22px",
  borderRadius: 14,
  fontSize: 15,
  cursor: "pointer",
  boxShadow: "0 8px 22px rgba(37,99,235,0.35)"
};

const statsRow = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 20,
  marginBottom: 35
};

const statCard = {
  background: "#fff",
  borderRadius: 18,
  padding: 22,
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const statLabel = {
  color: "#64748b",
  fontSize: 14
};

const statValue = {
  fontSize: 28,
  fontWeight: 700,
  marginTop: 6
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: 25
};
