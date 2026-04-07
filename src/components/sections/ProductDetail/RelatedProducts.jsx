import React from 'react'
import ProductCard from '../../ui/ProductCard'

function RelatedProducts({ products }) {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-3xl text-[#1b1c1a]">You may also admire</h2>
        <p className="max-w-2xl text-sm leading-7 text-[#5b6c57]">Three bouquets curated to complement Morning Dew with refined color and texture.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} to={`/product/${product.id}`} {...product} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
