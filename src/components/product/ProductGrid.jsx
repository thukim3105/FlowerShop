import React from 'react'
import ProductCard from './ProductCard'
import { useCart } from '../../context/CartContext'
import bouquetDataset from '../../data/bouquetDataset'

function ProductGrid({ maxPrice = Number.POSITIVE_INFINITY }) {
  const { addItem } = useCart()

  const visibleProducts = bouquetDataset.filter((product) => {
    const numericPrice = Number(product.price.replace(/\D/g, ''))
    return numericPrice <= maxPrice
  })

  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {visibleProducts.map((product) => {
        const numericPrice = Number(product.price.replace(/\D/g, ''))

        return (
          <ProductCard
            key={product.id}
            to={`/product/${product.id}`}
            {...product}
            imageContainerClass="h-72 overflow-hidden"
            onAddToCart={() =>
              addItem({
                id: product.id,
                title: product.title,
                variant: 'Botanical selection',
                price: numericPrice,
                image: product.image,
              })
            }
          />
        )
      })}
    </section>
  )
}

export default ProductGrid
