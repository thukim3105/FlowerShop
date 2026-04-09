import React, { useState } from 'react'
import PlantHero from '../components/product/PlantHero'
import SidebarFilter from '../components/product/SidebarFilter'
import PlantGrid from '../components/product/PlantGrid'

const plantFilters = [
    {
        title: 'LIGHT NEEDS',
        items: ['Low Light', 'Bright Indirect', 'Full Sun'],
        active: 'Low Light',
    },
    {
        title: 'CARE LEVEL',
        items: ['Easy Care', 'Moderate Care', 'Advanced Care'],
        active: 'Easy Care',
    },
    {
        title: 'PLANT TYPE',
        items: ['Indoor', 'Outdoor', 'Pet-Friendly'],
        active: 'Indoor',
    },
]

function Plants() {
    const [priceValue, setPriceValue] = useState(120)

    return (
        <main className="bg-[#fbf9f5] pt-27 px-6 lg:px-24 pb-16">
            <div className="mx-auto flex max-w-360 flex-col gap-14">
                <PlantHero />

                <div className="grid gap-10 xl:grid-cols-[280px_minmax(0,1fr)]">
                    <SidebarFilter
                        groups={plantFilters}
                        value={priceValue}
                        min={30}
                        max={180}
                        minLabel="$30"
                        maxLabel="$180"
                        onChange={(event) => setPriceValue(Number(event.target.value))}
                    />
                    <PlantGrid maxPrice={priceValue} />
                </div>
            </div>
        </main>
    )
}

export default Plants
