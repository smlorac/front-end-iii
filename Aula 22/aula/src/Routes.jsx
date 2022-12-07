import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/Dashboard/Home";
import DashboardReports from "./pages/Dashboard/Reports";

import Products from "./pages/Products";
import ProductsHome from "./pages/Products/Home";
import ProductsDetails from "./pages/Products/Details"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardHome />} />
          <Route path="reports" element={<DashboardReports />} />
        </Route>

        <Route path="/products" element={<Products />}>
          <Route path="" element={<ProductsHome />} />
          <Route path=":id" element={<ProductsDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
