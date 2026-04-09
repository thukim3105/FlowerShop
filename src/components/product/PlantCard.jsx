import React from 'react'
import { Link } from 'react-router-dom'

function PlantCard({ image, title, price, description, to, onAddToCart }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-[0_0_24px_rgba(27,28,26,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(27,28,26,0.12)]">
            <div className="h-55 overflow-hidden">
                {to ? (
                    <Link to={to} className="block">
                        <img src={image} alt={title} className="h-55 w-full object-cover transition duration-300 group-hover:scale-105" />
                    </Link>
                ) : (
                    <img src={image} alt={title} className="h-full w-full object-cover transition duration-300" />
                )}
            </div>

            <div className="flex flex-col gap-4 p-6">
                <div className="space-y-3">
                    {to ? (
                        <Link to={to} className="block">
                            <h2 className="font-serif text-2xl text-[#1b1c1a] transition hover:text-[#2b6954]">{title}</h2>
                        </Link>
                    ) : (
                        <h2 className="font-serif text-2xl text-[#1b1c1a]">{title}</h2>
                    )}
                    <p className="text-sm leading-relaxed text-[#566342]">{description}</p>
                </div>

                <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-lg font-semibold text-[#2b6954]">{price}</span>
                    {onAddToCart && (
                        <button
                            type="button"
                            onClick={onAddToCart}
                            className="rounded-full bg-[#2b6954] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#244f3c]"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </article>
    )
}

export default PlantCard
