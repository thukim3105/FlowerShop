import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Journal from './pages/Journal'
import OurStory from './pages/OurStory'
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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/story" element={<OurStory />} />
        </Routes>
      </main>
    </div>
  )
}

export default App