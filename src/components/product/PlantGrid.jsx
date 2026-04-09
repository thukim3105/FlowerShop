import React from 'react'
import PlantCard from './PlantCard'
import { useCart } from '../../context/CartContext'
import products from '../../data/productDetailData'

function PlantGrid({ maxPrice = Number.POSITIVE_INFINITY }) {
    const { addItem } = useCart()

    const visibleProducts = products.filter((product) => {
        const numericPrice = Number(product.price.replace(/\D/g, ''))
        return numericPrice <= maxPrice
    })

    return (
        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => {
                const numericPrice = Number(product.price.replace(/\D/g, ''))

                return (
                    <PlantCard
                        key={product.id}
                        to={`/plants/${product.id}`}
                        {...product}
                        onAddToCart={() =>
                            addItem({
                                id: product.id,
                                title: product.title,
                                variant: 'Potted plant',
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

export default PlantGrid
