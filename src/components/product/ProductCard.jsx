import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ image, title, price, description, to }) {
  const card = (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_0_24px_rgba(27,28,26,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(27,28,26,0.12)]">
      <div className="min-h-[340px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <h2 className="font-serif text-2xl text-[#1b1c1a]">{title}</h2>
        <p className="text-sm leading-relaxed text-[#715953]">{description}</p>
        <div className="text-lg font-semibold text-[#2b6954]">{price}</div>
      </div>
    </article>
  )

  return to ? (
    <Link to={to} className="block">
      {card}
    </Link>
  ) : (
    card
  )
}

export default ProductCard
