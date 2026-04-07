import React from 'react'

function ProductCard({ image, title, price }) {
    return (
        <article className="flex flex-col h-full overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_56px_rgba(27,28,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(27,28,26,0.14)]">

            <div className="h-[220px] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
            </div>

            <div className="space-y-2 p-5 mt-auto">
                <h3 className="font-serif text-xl text-[#1b1c1a]">{title}</h3>
                <p className="text-sm font-semibold text-[#2b6954]">{price}</p>
            </div>

        </article>
    )
}

export default ProductCard
