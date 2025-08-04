import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// 컴포넌트 import (상대 경로에 따라 경로 수정 필요)
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <BrowserRouter>
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-14 space-y-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/new" element={<ProductForm />} />
            <Route path="/products/edit/:id" element={<ProductForm />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
