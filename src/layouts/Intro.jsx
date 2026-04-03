import React from 'react'
import Label from '../components/Label'

function Intro() {
  return (
    <section className="relative w-full bg-[url('/img/background.jpg')] bg-cover bg-center">
      {/* overlay for tonal depth (glass-like) */}
      <div className="absolute inset-0 bg-[rgba(251,249,245,0.6)] backdrop-blur-sm" />

      <div className="relative flex flex-col justify-center items-start px-6 py-12 sm:px-12 sm:py-20 h-[48vh] md:h-[60vh] max-w-screen-xl mx-auto">
        <Label string="SUMMER COLLECTION 2026" style="font-manrope uppercase text-sm tracking-wider text-[rgba(27,28,26,0.85)]" />
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl leading-tight mt-2 text-[rgba(27,28,26,0.95)]">Send Love</h1>
        <p className="font-manrope mt-2 text-base sm:text-lg text-[rgba(27,28,26,0.9)]">with Flowers</p>
      </div>
    </section>
  )
}

export default Intro