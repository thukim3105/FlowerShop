import React from 'react'

const badges = [
  { label: 'SUMMER 2024', bg: 'bg-[#f5d9de]', text: 'text-[#8a3b33]' },
  { label: 'HANDCRAFTED', bg: 'bg-[#dcece0]', text: 'text-[#2b6954]' },
]

function ProductHero() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center bg-[#fbf9f5] rounded-4xl p-8 lg:p-12">
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase ${badge.bg} ${badge.text}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <div>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-[-0.04em] text-[#1b1c1a]">
            Our Seasonal Collection
          </h1>
          <p className="max-w-xl mt-6 text-base leading-relaxed text-[#566342] md:text-lg">
            A curated selection of the season’s finest blooms, hand-arranged to capture the untamed beauty of nature’s most fleeting moments.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-4xl bg-[#fff7f5]">
        <img
          src="/img/hydrangea.jpg"
          alt="Pink Ranunculus bloom"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

export default ProductHero
