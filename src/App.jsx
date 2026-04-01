import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className='px-20'>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/product" element= {<Product />}/>
        <Route path= "/product-detail" element= {<ProductDetail />}/>  
      </Routes>
    </div>

  )
}

export default App