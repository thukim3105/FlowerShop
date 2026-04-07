import React from 'react'
import ProductCard from './ProductCard'
import products from '../../data/productDetailData'

function ProductGrid() {
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} to={`/product/${product.id}`} {...product} />
      ))}
    </section>
  )
}

export default ProductGrid
