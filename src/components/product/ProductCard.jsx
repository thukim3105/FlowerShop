import React from 'react'

function ProductCard({ image, title, price, description }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_0_24px_rgba(27,28,26,0.06)]">
      <div className="min-h-[340px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <h2 className="font-serif text-2xl text-[#1b1c1a]">{title}</h2>
        <p className="text-sm leading-relaxed text-[#715953]">{description}</p>
        <div className="text-lg font-semibold text-[#2b6954]">{price}</div>
      </div>
    </article>
  )
}

export default ProductCard
