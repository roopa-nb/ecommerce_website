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
    slug: "",
    imageUrl: ""
  });

  const load = () => {
    publicApi.get("/categories").then(res => setCategories(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = () => {
    setForm({ id: null, name: "", slug: "", imageUrl: "" });
    setOpen(true);
  };

  const openEdit = (cat) => {
    setForm(cat);
    setOpen(true);
  };

  const saveCategory = async () => {

    if (!form.name || !form.slug) {
      alert("Name and slug required");
      return;
    }

    if (form.id) {
      await api.put(`/categories/${form.id}`, form);
    } else {
      await api.post("/categories", form);
    }

    setOpen(false);
    load();
  };

  const deleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await api.delete(`/categories/${id}`);
    load();
  };

  return (
    <div>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 30 }}>
        <div>
          <h1>Categories Management</h1>
          <p>{categories.length} total categories</p>
        </div>

        <button onClick={openAdd} style={{
          background: "#ec4899",
          color: "#fff",
          border: "none",
          borderRadius: 12,
          padding: "12px 18px",
          fontSize: 16,
          cursor: "pointer"
        }}>
          + Add Category
        </button>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 25
      }}>
        {categories.map(cat => (
          <AdminCategoryCard
            key={cat.id}
            cat={cat}
            onDelete={deleteCategory}
            onEdit={openEdit}
          />
        ))}
      </div>

      {/* Modal */}
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
