import React from 'react'
import { FiDroplet, FiSun, FiThermometer } from 'react-icons/fi'
import Card from '../../ui/Card'

const iconMap = {
    hydration: FiDroplet,
    light: FiSun,
    temperature: FiThermometer,
}

function CareSection({ items }) {
    return (
        <section className="space-y-8">
            <div className="text-center">
                <h2 className="font-serif text-3xl text-[#1b1c1a]">Preserving the Bloom</h2>
                <p className="mt-3 text-sm leading-7 text-[#5b6c57] sm:text-base">
                    Gentle care makes the difference — simple rituals to keep petals fresh and radiant.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {items.map((item) => {
                    const Icon = iconMap[item.id]
                    return (
                        <Card key={item.id} className="space-y-4">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f8f4] text-[#2b6954]">
                                <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[#1b1c1a]">{item.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-[#5b6c57]">{item.description}</p>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}

export default CareSection
