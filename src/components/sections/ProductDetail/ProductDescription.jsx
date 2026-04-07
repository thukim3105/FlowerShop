import React from 'react'

function ProductDescription({ data }) {
    return (
        <section className="space-y-6 rounded-[2rem] bg-white p-6 shadow-[0_18px_40px_rgba(27,28,26,0.06)] md:p-8">
            <h2 className="font-serif text-3xl text-[#1b1c1a]">{data.title}</h2>
            <p className="max-w-3xl text-sm leading-7 text-[#5b6c57] sm:text-base">{data.text}</p>
        </section>
    )
}

export default ProductDescription
