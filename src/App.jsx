import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Banners from "./pages/Banners";

export default function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/banners" element={<Banners />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}
