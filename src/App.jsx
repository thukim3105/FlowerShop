import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App