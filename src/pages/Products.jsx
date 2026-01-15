import { useEffect, useState } from "react";
import { api } from "../services/api";
import ProductModal from "../components/ProductModal";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const emptyForm = {
    id: null,
    name: "",
    description: "",
    imageUrl: "",
    displayOrder: 0,
    active: true,
    featured: false,
    categoryId: ""
  };

  const [form, setForm] = useState(emptyForm);

  // LOAD PRODUCTS + CATEGORIES
  const load = async () => {
    try {
      const p = await api.get("/products");     // → /api/admin/products
      const c = await api.get("/categories");   // → /api/admin/categories

      setProducts(p.data);
      setCategories(c.data);
    } catch (err) {
      console.error("LOAD ERROR:", err);
    }
  };

  useEffect(() => { 
    load(); 
  }, []);

  const openAdd = () => {
    setForm(emptyForm);
    setOpen(true);
  };

  // SAVE PRODUCT
  const save = async () => {
    if (!form.name || !form.categoryId) {
      alert("Product name and category required");
      return;
    }

    const payload = {
      name: form.name,
      description: form.description,
      imageUrl: form.imageUrl,
      active: form.active,
      featured: form.featured,
      displayOrder: form.displayOrder,
      category: { id: form.categoryId }
    };

    try {
      if (form.id) {
        await api.put(`/products/${form.id}`, payload);
      } else {
        await api.post("/products", payload);
      }

      setOpen(false);
      load();
    } catch (err) {
      console.error("SAVE ERROR:", err);
      alert("Error saving product");
    }
  };

  // DELETE PRODUCT
  const remove = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await api.delete(`/products/${id}`);
    load();
  };

  return (
    <div>
      <h1>Products</h1>

      <button onClick={openAdd}>+ Add Product</button>

      <table width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Active</th>
            <th>Featured</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category?.name}</td>
              <td>{p.active ? "Yes" : "No"}</td>
              <td>{p.featured ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => { 
                  setForm({
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    imageUrl: p.imageUrl,
                    active: p.active,
                    featured: p.featured,
                    displayOrder: p.displayOrder || 0,
                    categoryId: p.category?.id || ""
                  }); 
                  setOpen(true); 
                }}>
                  Edit
                </button>

                <button onClick={() => remove(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProductModal 
        open={open}
        setOpen={setOpen}
        form={form}
        setForm={setForm}
        categories={categories}
        onSave={save}
      />
    </div>
  );
}
