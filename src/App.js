import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductDetailsPage from "./components/ProductDetailsPage";
import ProductsPage from "./components/ProductsPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route exact path="/:productId" element={<ProductDetailsPage />} />
          <Route path="*" element={<ProductsPage />} />
        </Route>
      </Routes>
    </div>
  );
}
