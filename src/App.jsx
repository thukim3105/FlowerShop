import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import Plants from './pages/Plants'
import ProductDetail from './pages/ProductDetail'
import PlantDetail from './pages/PlantDetail'
import Cart from './pages/Cart'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App