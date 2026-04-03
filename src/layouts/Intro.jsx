import React from 'react'
import Label from '../components/Label'

function Intro() {
  return (
    <div>
    <section className="relative w-full bg-[url('/img/background.jpg')] bg-cover bg-center h-full">
      {/* soft cream overlay to create surface layers per DESIGN.md */}
      <div className="absolute inset-0 bg-[rgba(251,249,245,0.65)] backdrop-blur-sm" />

      <div className="relative max-w-screen-xl mx-auto px-6 py-12 sm:px-12 sm:py-20 h-[48vh] md:h-[64vh] flex flex-col justify-center items-start">
        {/* label */}
        <Label string="SUMMER COLLECTION 2026" style="font-manrope uppercase text-sm tracking-[0.05rem] text-[rgba(27,28,26,0.8)]" />

        {/* editorial headline - Noto Serif display with tight letter spacing */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight -tracking-[0.02em] mt-3 text-[rgba(27,28,26,0.95)]">Send Love</h1>

        {/* subhead */}
        <p className="font-manrope mt-3 text-base sm:text-lg text-[rgba(27,28,26,0.9)]">with Flowers</p>

        {/* signature petal chip (tertiary) */}
        <div className="mt-6">
          <span className="inline-block bg-[rgba(113,89,83,0.12)] text-[rgba(113,89,83,0.95)] rounded-full px-3 py-1 text-sm font-manrope">Seasonal • Limited</span>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Intro