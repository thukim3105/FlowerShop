import React from 'react'
import { Link } from 'react-router-dom'

function OurStory() {
    return (
        <main className="min-h-screen bg-[#fbf9f5] pt-[8rem] px-6 lg:px-24 pb-16">
            <section className="mx-auto max-w-4xl rounded-[2rem] bg-white p-12 shadow-[0_24px_56px_rgba(27,28,26,0.08)]">
                <h1 className="font-serif text-4xl text-[#1b1c1a]">Our Story</h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#5b6c57]">
                    Since our first botanical editorial, we have created thoughtful floral experiences that feel calm, elegant and unmistakably crafted.
                </p>
                <Link
                    to="/product"
                    className="mt-10 inline-flex rounded-full bg-[#2b6954] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#244f3c]"
                >
                    Browse the collection
                </Link>
            </section>
        </main>
    )
}

export default OurStory
