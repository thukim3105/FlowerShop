import React from 'react'

const badges = [
    { label: 'INDOOR COLLECTION', bg: 'bg-[#e5f3e9]', text: 'text-[#2b6954]' },
    { label: 'POTTED PLANTS', bg: 'bg-[#f5f0e6]', text: 'text-[#8a4a35]' },
]

function PlantHero() {
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
                        Live Green: Easy-care Potted Plants
                    </h1>
                    <p className="max-w-xl mt-6 text-base leading-relaxed text-[#566342] md:text-lg">
                        Bring soft greenery indoors with curated potted plants designed for apartments, desks, and cozy corners. Each selection is chosen for its beauty, ease, and botanical balance.
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-4xl bg-[#eff7f0]">
                <img
                    src="/img/lavender.jpg"
                    alt="Potted plant collection"
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    )
}

export default PlantHero
