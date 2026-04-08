import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { useCart } from '../../../context/CartContext'
import Button from '../../ui/Button'

function ProductHero({ data }) {
  const { addItem } = useCart()
  const numericPrice = Number(data.price.replace(/\D/g, ''))

  const handleAddToCart = () => {
    addItem({
      id: data.id,
      title: data.title,
      variant: data.shortDescription,
      price: numericPrice,
      image: data.image,
    })
  }

  return (
    <section className="grid gap-10 lg:grid-cols-[1.25fr_0.95fr] items-center rounded-[2rem] bg-[#fff8f3] p-6 md:p-10 shadow-[0_22px_50px_rgba(27,28,26,0.08)]">
      <div className="overflow-hidden rounded-[2rem] bg-[#f8f2ee] shadow-inner shadow-[inset_0_0_0_1px_rgba(43,105,84,0.08)]">
        <img src={data.image} alt={data.title} className="h-full w-full object-cover object-center sm:min-h-[420px]" />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-[#8a3b33]">Bloom Spotlight</p>
          <h1 className="font-serif text-4xl leading-tight text-[#1b1c1a] sm:text-5xl">{data.title}</h1>
          <p className="text-3xl font-semibold text-[#2b6954]">{data.price}</p>
          <p className="max-w-xl text-sm leading-relaxed text-[#5b6c57] sm:text-base">{data.shortDescription}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button className="w-full sm:w-auto" onClick={handleAddToCart}>
            ADD TO CART
          </Button>
          <button
            type="button"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d9d2c8] bg-white text-[#8a3b33] transition duration-300 hover:border-[#2b6954] hover:bg-[#f1f8f2]"
            aria-label="Add to wishlist"
          >
            <FiHeart className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductHero
